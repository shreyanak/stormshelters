import requests
import json

def scrape_city_data(name):
    url = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-cities-demographics/records?limit=20&refine=state%3A%22Texas%22"


def scrape_shelter_data():
    # name
    # address
    # url
    # is_closed
    # phone

    cities_in_harris = ['baytown,tx', 'bellaire,tx', 'deer park,tx', 'cypress,tx', 'highlands,tx', 'houston,tx', 'katy,tx', 'huffman,tx', 'kingwood,tx', 'pasadena,tx', 'spring,tx', 'waller,tx', 'tomball,tx', 'humble,tx', 'webster,tx']
    
    yelp_api_key = "ZwMb0UM46E2Fjr2075F5B9whbN8M2D9kN6kyg_UI7ckI6e7nhflpAxV7zdjBGu5yXItPwZlcdeReIuY2T96IKE_XlNRfx5UTHYA4dMDCxw0KfLMIx7Dl2RSeyekdZXYx"
    # yelp_client_id = "6aT9O-M3-H7ucEIOQsUt5w"
    
    url = "https://api.yelp.com/v3/businesses/search"

    headers={
        'Authorization': 'bearer ' + yelp_api_key
    }

    for city in cities_in_harris:
        shelter_params = {
            'term': 'homeless shelter',
            'location': city
        }

        food_pantry_params = {
            'term': 'food pantry',
            'location': city
        }

        shelter_response = requests.get(url, params=shelter_params, headers=headers)
        shelter_data = shelter_response.json()
        file = open("shelters.json", "w")
        json.dump(shelter_data, file, indent=2)
        file.write('\n')
        file.close()

        food_response = requests.get(url, params=food_pantry_params, headers=headers)
        food_data = food_response.json()
        file = open("food.json", "w")
        json.dump(food_data, file, indent=2)
        file.write('\n')
        file.close()
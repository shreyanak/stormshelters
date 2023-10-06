import json
import requests


cities_in_harris = ['baytown,tx', 'bellaire,tx', 'deer park,tx', 'cypress,tx', 'highlands,tx', 'houston,tx', 'katy,tx', 'huffman,tx', 'kingwood,tx', 'pasadena,tx', 'spring,tx', 'waller,tx', 'tomball,tx', 'humble,tx', 'webster,tx', 'aldine,tx', 'jersey village,tx', 'atascocita,tx', 'southside place,tx', 'hedwig village,tx', 'bunker hill village,tx', 'el lago,tx', 'sheldon,tx', 'barrett,tx', 'cloverleaf,tx', 'morgans point,tx', 'la porte,tx', 'galena park,tx']
population = [82543, 17262, 34240, 2173, 7714, 2293288, 21926,'-','-', 151964, 62569, 3337, 12333, 16603, 12280, 15887, 7904, 84222, 1480, 2343, 3821, 3060, 2176, 3668, 25576, 260, 35566, 10770]

create_response = []

# scrape city data
def scrape_city_data():
    base_url = "http://api.weatherapi.com/v1/forecast.json"
    api_key = '744d573dcf37484986351000230510'

    for city, pop in zip(cities_in_harris, population):
        params = {
            'key': api_key,
            'q': city
        }

        # weather api get request
        forecast_response = requests.get(base_url, params=params)
       
        forecast_data = forecast_response.json()
        weather_data = {"name": forecast_data['location']['name'], "pop":pop, "temp in f": forecast_data['current']['temp_f'], "wind_mph":forecast_data['current']['wind_mph'], "condition":forecast_data['current']['condition']['text'], "precip_in": forecast_data['current']['precip_in']}
        create_response.append(weather_data)

    # write json output to file
    file = open("cities.json", "w")
    json.dump(create_response, file, indent=2)
    file.write('\n')
    file.close()
    
# scrape shelter data    
def scrape_shelter_data():
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

# scrape natural disaster data
def scrape_med_data():
    # add lat long to list - the list will correspond to the city list
    # use this list to get the pharmacies/medical centers

    url = 'https://api.api-ninjas.com/v1/geocoding'

    headers = {
        'X-Api-Key': '7N5tDuyeUirZtdVSLtXuJg==kT4uQckB4sSnM4Bw'
    }

    create_med_response = []

    coord_list = []

    for city in cities_in_harris:
        params = {
            'city': city,
            'country': 'US'
        }
    
        coord_response = requests.get(url, params=params, headers=headers)
        coord_data = coord_response.json()

        city_coord = [0] * 2
        # longitude
        city_coord[0] = coord_data[0]['longitude']
        # latitude
        city_coord[1] = coord_data[0]['latitude']
        coord_list.append(city_coord)

    geo_place_url = 'https://api.geoapify.com/v2/places'
    file = open("medical.json", "w")
    for coord in coord_list:

        med_params = {
            'apiKey': '8e30cd9a70c440b59c2e1c7e486db8b1',
            'categories': 'healthcare.pharmacy',
            'bias': f'proximity:{coord[0]},{coord[1]}',
            'limit': 5
        }

        hospital_response = requests.get(geo_place_url, params=med_params)
        hospital_data = hospital_response.json()
        
        json.dump(hospital_data, file, indent=2)
        file.write('\n')
        
    file.close()



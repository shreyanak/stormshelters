import mysql.connector
import json
import requests

def main():
    load_cities_images()

def load_cities() :

    # AWS RPS DB info
    storm_host = "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com"
    storm_user = "admin"
    storm_password = "StormShelters2023"
    storm_database = "models"

    print("attempting to connect")

    # Database connection
    stormshelters_db = mysql.connector.connect(
        host = storm_host,
        user = storm_user,
        password = storm_password,
        database = storm_database
    )

    # read json data from a file
    with open("cities.json", "r") as json_file:
        city_data = json.load(json_file)

    cursor = stormshelters_db.cursor()
    # Define the SQL query to insert data
    insert_query = """
    INSERT INTO cities_new (name, pop, temp_in_f, wind_mph, cond, precip_in)
    VALUES (%(name)s, %(pop)s, %(temp_in_f)s, %(wind_mph)s, %(cond)s, %(precip_in)s)
    """
    for entry in city_data:
        extracted_data = {
            "name": entry["name"],
            "pop": entry["pop"],
            "temp_in_f": entry["temp in f"],
            "wind_mph": entry["wind_mph"],
            "cond": entry["condition"],
            "precip_in": entry["precip_in"],
        }

        cursor.execute(insert_query, extracted_data)

    stormshelters_db.commit()
    print('Data inserted successfully')

def load_cities_images():
    # AWS RPS DB info
    storm_host = "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com"
    storm_user = "admin"
    storm_password = "StormShelters2023"
    storm_database = "models"

    print("attempting to connect")

    # Database connection
    stormshelters_db = mysql.connector.connect(
        host = storm_host,
        user = storm_user,
        password = storm_password,
        database = storm_database
    )

    cursor = stormshelters_db.cursor()
    get_cities_query = """SELECT name FROM cities_new"""

    cursor.execute(get_cities_query)
    city_names = cursor.fetchall()

    # iterate through city names, load each url
    for city_name in city_names:
        # google custom search, get image url
        image_url = fetch_image_url(city_name)
        print(image_url)
        if image_url:
            # query and add url to sql
            real_name = city_name[0]
            print(real_name)
            cursor.execute(f"SELECT id FROM cities_new WHERE name = '{real_name}'")
            city_id = cursor.fetchall()
            print(city_id)
            load_image_query = f"""UPDATE cities_new SET image = '{image_url}' WHERE id = '{city_id}'"""
            cursor.execute(load_image_query)
            stormshelters_db.commit()
        else:
            print("failed to get image url")
    
    cursor.close()
    stormshelters_db.close()


def fetch_image_url(query):
    api_key = "AIzaSyAcJPY_z5AiJAF0bngy4Ek6M0E3pTTGcTk"
    cse_id = "b4dcf4643af1e4b07"    # custom search engine ID

    url = f'https://www.googleapis.com/customsearch/v1?key={api_key}&cx={cse_id}&q={query}&searchType=image'

    # GET request
    response = requests.get(url)

    # 200 is code for success
    if response.status_code == 200:
        images_data = response.json()

        if 'items' in images_data and len(images_data['items']) > 0:
            # gets image link of first image
            image_link = images_data['items'][0]['link']
            print("image link: ", image_link)
            return image_link
        else:
            print("no search results found")
    else:
        print("request failed with status code: ", response.status_code)


def load_medical():
       # AWS RPS DB info
    storm_host = "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com"
    storm_user = "admin"
    storm_password = "StormShelters2023"
    storm_database = "models"

    print("attempting to connect")

    # Database connection
    stormshelters_db = mysql.connector.connect(
        host = storm_host,
        user = storm_user,
        password = storm_password,
        database = storm_database
    )

    # read json data from a file
    with open("medical.json", "r") as json_file:
        med_data = json.load(json_file)

    cursor = stormshelters_db.cursor()
    # Define the SQL query to insert data
    insert_query = """
    INSERT INTO pharmacies_new (name, city, address, distance_m, categories, longitude, latitude)
    VALUES (%(name)s, %(city)s, %(address)s, %(distance_m)s, "healthcare", %(longitude)s, %(latitude)s)
    """
    for entry in med_data:
        extracted_data = {
            "name": entry["name"],
            "city": entry["city"],
            "address": entry["address"],
            "distance_m": entry["distance_m"],
            "categories ": "healthcare",
            "longitude":entry["longitude"],
            "latitude":entry["latitude"]
            
        }

        cursor.execute(insert_query, extracted_data)

    stormshelters_db.commit()
    print('Data inserted successfully') 


def load_food():
       # AWS RPS DB info
    storm_host = "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com"
    storm_user = "admin"
    storm_password = "StormShelters2023"
    storm_database = "models"

    print("attempting to connect")

    # Database connection
    stormshelters_db = mysql.connector.connect(
        host = storm_host,
        user = storm_user,
        password = storm_password,
        database = storm_database
    )

    # read json data from a file
    with open("food.json", "r") as json_file:
        food_data = json.load(json_file)

    cursor = stormshelters_db.cursor()
    # Define the SQL query to insert data
    insert_query = """
    INSERT INTO shelters (name, url, is_closed, city, rating, display_address, display_phone, image_url, latitude, longitude)
    VALUES (%(name)s, %(url)s, %(is_closed)s, %(city)s, %(rating)s, %(display_address)s, %(display_phone)s, %(image_url)s, %(latitude)s, %(longitude)s)
    """

    for entry in food_data.get("businesses"):
        extracted_data = {
            "name": entry["name"],
            "url": entry["url"],
            "is_closed": entry["is_closed"],
            "rating": entry["rating"],
            "city": entry["location"]["city"],
            "display_address": ', '.join(entry["location"]["display_address"]),
            "display_phone": entry["display_phone"],
            "image_url": entry["image_url"],
            "latitude": entry['coordinates']['latitude'],
            "longitude": entry['coordinates']['longitude']
        }
        cursor.execute(insert_query, extracted_data)

    stormshelters_db.commit()
    print('Data inserted successfully') 

def load_shelters():
       # AWS RPS DB info
    storm_host = "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com"
    storm_user = "admin"
    storm_password = "StormShelters2023"
    storm_database = "models"

    print("attempting to connect")

    # Database connection
    stormshelters_db = mysql.connector.connect(
        host = storm_host,
        user = storm_user,
        password = storm_password,
        database = storm_database
    )

    # read json data from a file
    with open("shelters.json", "r") as json_file:
        food_data = json.load(json_file)

    cursor = stormshelters_db.cursor()
    # Define the SQL query to insert data
    insert_query = """
    INSERT INTO shelters (name, url, is_closed, city, rating, display_address, display_phone, image_url, latitude, longitude)
    VALUES (%(name)s, %(url)s, %(is_closed)s, %(city)s, %(rating)s, %(display_address)s, %(display_phone)s, %(image_url)s, %(latitude)s, %(longitude)s)
    """

    for entry in food_data.get("businesses"):
        extracted_data = {
            "name": entry["name"],
            "url": entry["url"],
            "rating": entry["rating"],
            "is_closed": entry["is_closed"],
            "city": entry["location"]["city"],
            "display_address": ', '.join(entry["location"]["display_address"]),
            "display_phone": entry["display_phone"],
            "image_url": entry['image_url'],
            "latitude": entry['coordinates']['latitude'],
            "longitude": entry['coordinates']['longitude']
        }
        cursor.execute(insert_query, extracted_data)

    stormshelters_db.commit()
    print('Data inserted successfully') 


if __name__ == "__main__":
  main()

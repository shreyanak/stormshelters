# File that populates the database 
# with data collected from the
# JSON data files. 
import mysql.connector
import json


def main() :

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

    # Object we execute queries on
    cursor = stormshelters_db.cursor()
    shelter_attributes = {'id', 'name', 'image_url', 'rating', 'display_phone'}
    city_attriutes = {'name', 'pop', 'wind_mph', 'condition', 'percip_in'}
    food_attributes = {'id', 'name', 'image_url', 'rating', 'display_phone'}
    medical_attributes = {'name', 'city', 'address', 'distance'}

    # add_data('shelters.json', shelter_attributes)
    # add_data('medical.json', medical_attributes)
    add_data('cities.json', city_attriutes)
    # add_data('food.json', food_attributes)


    # JSON interface

        # print(i[1])
    # cursor.execute("SELECT * FROM models")s
    # print(cursor.execute("SHOW TABLES"))

def add_data(file, desired_attrib) :
    my_file = open(file)
    json_load = json.load(my_file)
    if (type(json_load) == list) :
        for category in json_load :
            for instance in category:
                for 
    try: 
        for category in json_load.values() : 
            for instance in category :
                for attrib in instance :
                    if (attrib in desired_attrib) :
                        print(attrib, " = ", instance[attrib])
    except TypeError :
        pass

if __name__ == "__main__":
    main()

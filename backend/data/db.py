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
    cursor.execute("USE models")
    shelter_attributes = {'name', 'image_url', 'rating', 'phone'}
    city_attriutes = {'name', 'pop', 'wind_mph', 'cond'}
    food_attributes = {'name', 'image_url', 'rating', 'phone'}
    medical_attributes = {'name', 'city', 'address', 'distance'}
    # todo: add a check so that we update/don't add duplicate data instead of flushing the data each time
    cursor.execute("delete from shelters where sql_id_shelter > 0")
    cursor.execute("delete from cities where sql_id_cities > 0")
    cursor.execute("delete from medical where sql_id_medical > 0")
    cursor.execute("delete from food where sql_id_food > 0")

    add_data(cursor, 'shelters.json', shelter_attributes, 'shelters')
    add_data(cursor, 'medical.json', medical_attributes, 'medical')
    add_data(cursor, 'cities.json', city_attriutes, 'cities')
    add_data(cursor, 'food.json', food_attributes, 'food')
    cursor.execute('COMMIT')
    cursor.close()


    # JSON interface

def add_data(cursor, file, desired_attrib, table) :
    my_file = open(file)
    json_load = json.load(my_file)
    # JSON files either contain DICT or LIST
    if type(json_load) == dict :
        try: 
            for category in json_load.values() : 
                for instance in category :
                    db_query(instance, desired_attrib, table, cursor)

        except TypeError :
            print(TypeError)
            pass
    else :
        for instance in json_load :
            db_query(instance, desired_attrib, table, cursor)

def db_query(instance, desired_attrib, table, cursor) :
    # debug

    attribs = ""
    values = ""
    delim = '"'
    ran = 0
    for attrib in instance :
        print (attrib)
        if (attrib in desired_attrib) :
            if ran :
                attribs += ", " + str(attrib)
                values += ", " + delim + str(instance[attrib]) + delim
            else :
                attribs += str(attrib)
                values += delim + str(instance[attrib]) + delim 
                ran = 1
    query = "INSERT INTO " + str(table) + " (" + attribs + ") values (" + values + ")"
    print(query)
    cursor.execute(query)

if __name__ == "__main__":
    main()

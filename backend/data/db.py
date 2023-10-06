# File that populates the database 
# with data collected from the
# JSON data files. 
import mysql.connector
import json

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

# JSON interface
f_sh = open('shelters.json')
shelters = json.load(f_sh)
sh_names = json.loads(json.dumps(shelters))
for i in sh_names :
    print(type(sh_names.get(i)))
# cursor.execute("SELECT * FROM models")s
# print(cursor.execute("SHOW TABLES"))
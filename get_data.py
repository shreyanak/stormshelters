import requests
import json

openfema = 

openfema_response = requests.get(openfema)

openfema_data = json.loads(openfema_response.content)

print (openfema_data)
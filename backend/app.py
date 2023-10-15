from flask import Flask, Response, session, request, jsonify
from flask_cors import CORS
from schema import cities_schema, pharmacy_schema, shelter_schema
from models import db, app, Pharmacy, Cities, Shelter

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return ""

# get model page of cities
@app.route('/cities',  methods=['GET'])
def get_cities():
    query = db.session.query(Cities)
    result = query.paginate(page=1, per_page=10, error_out=False) 

    schema_dump = cities_schema.dump(result, many=True)
    for city in schema_dump:
        split_strings_city(city)   
    
    total = result.count()     
    return jsonify({"cities" : schema_dump,
                    "meta": {
                        "count": total
                    }})

# get model page of pharmacies
@app.route('/pharmacies',  methods=['GET'])
def get_pharmacy():
    query = db.session.query(Pharmacy)
    result = query.paginate(page=1, per_page=30, error_out=False) 

    schema_dump = pharmacy_schema.dump(result, many=True)
    for pharmacy in schema_dump:
        split_strings_pharmacy(pharmacy)   
    
    total = result.count()     
    return jsonify({"pharmacies" : schema_dump,
                    "meta": {
                        "count": total
                    }})

# get model page of shelters
@app.route('/shelters',  methods=['GET'])
def get_shelters():
    # shelter
    query = db.session.query(Shelter)
    result = query.paginate(page=1, per_page=10, error_out=False) 
    schema_dump = shelter_schema.dump(result, many=True)

    for shelter in schema_dump:
        split_strings_shelter(shelter)  

    total = result.count()

    return jsonify({"shelters" : schema_dump,
                    "meta": {
                        "count": total
                    }})

# get instance of city
@app.route('/cities/<int:city_id>', methods=['GET'])
def get_single_city(city_id):
    try:
        city = db.session.query(Cities).filter_by(id=city_id).one()
        city_data = cities_schema.dump(city)

        return jsonify({"city": city_data})
    except IndexError:
        return jsonify({"error": "City not found"}, 404)

# get instance of shelter
@app.route('/shelters/<int:shelter_id>', methods=['GET'])
def get_single_shelter(shelter_id):
    try:
        shelter = db.session.query(Shelter).filter_by(id=shelter_id).one()
        shelter_data = shelter_schema.dump(shelter)

        return jsonify({"shelter": shelter_data})
    except IndexError:
        return jsonify({"error": "Shelter/Food not found"}, 404)

# get instance of pahrmacy
@app.route('/pharmacies/<int:pharm_id>', methods=['GET'])
def get_single_pharmacy(pharm_id):
    try:
        pharmacy = db.session.query(Pharmacy).filter_by(id=pharm_id).one()
        pharm_data = shelter_schema.dump(pharmacy)

        return jsonify({"pharmacy": pharm_data})
    except IndexError:
        return jsonify({"error": "Pharmacy not found"}, 404) 


def split_strings_city(city):
    city['shelters'] = list(filter(None,city['shelters'].split(';')))
    city['pharmacies'] = list(filter(None,city['pharmacies'].split(';')))

def split_strings_pharmacy(pharmacy):
    pharmacy['shelters'] = list(filter(None,pharmacy['shelters'].split(';')))
    pharmacy['cities'] = list(filter(None,pharmacy['cities'].split(';')))

def split_strings_shelter(shelter):
    shelter['pharmacies'] = list(filter(None,shelter['pharmacies'].split(';')))
    shelter['cities'] = list(filter(None,shelter['cities'].split(';')))




if __name__ == '__main__':
    app.run(port=8080)

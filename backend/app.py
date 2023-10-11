from flask import Flask, Response, session, request, jsonify
from schema import cities_schema, pharmacy_schema, shelter_schema
from models import db, app, Pharmacy, Cities, Shelter, Food


@app.route('/')
def home():
    return ""


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


@app.route('/shelters',  methods=['GET'])
def get_shelters():
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
    app.run(host="0.0.0.0", port=5000)

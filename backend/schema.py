#schema for json that is returned from RESTful API
from flask_marshmallow import Marshmallow

from models import Cities, Pharmacy, Shelter
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, fields

ma = Marshmallow()

class CitiesSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Cities

class ShelterSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Shelter
        
class PharmacySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Pharmacy

cities_schema = CitiesSchema()
shelter_schema = ShelterSchema()
pharmacy_schema = PharmacySchema()


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://admin:StormShelters2023@stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com:3306/models"

db = SQLAlchemy(app)

class Pharmacy(db.Model):
    __table_args__ = {'schema':'models'}
    __tablename__ = 'pharmacies_new'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    city = db.Column(db.String)
    address = db.Column(db.Text)
    distance_m = db.Column(db.Float)
    categories = db.Column(db.Text)
    longitude = db.Column(db.Float)
    latitide = db.Column(db.Float)

class Shelter(db.Model):
    __table_args__ = {'schema':'models'}
    __tablename__ = 'shelters_new'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    url = db.Column(db.Text)
    is_closed = db.Column(db.Boolean)
    city = db.Column(db.String)
    rating = db.Column(db.Float)
    display_address = db.Column(db.Text)
    display_phone = db.Column(db.String)
    image_url = db.Column(db.Text)
    longitide = db.Column(db.Float)
    latitude = db.Column(db.Float)

class City(db.Model):
    __table_args__ = {'schema':'models'}
    __tablename__ = 'cities_new'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    pop = db.Column(db.Float)
    temp_in_f = db.Column(db.Float)
    wind_mph = db.Column(db.Float)
    cond = db.Column(db.String)
    precip_in = db.Column(db.Float)


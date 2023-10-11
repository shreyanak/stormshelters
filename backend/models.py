from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://admin:StormShelters2023@stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com:3306/models"

db = SQLAlchemy(app)

class Pharmacy(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    city = db.Column(db.String)
    address = db.Column(db.Text)
    distance_m = db.Column(db.Float)
    category = db.Column(db.Text)

class Shelter:
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    url = db.Column(db.Text)
    is_closed = db.Column(db.Boolean)
    rating = db.Column(db.Float)
    display_address = db.Column(db.Text)
    display_phone = db.Column(db.String)
    image_url = db.Column(db.Text)

class Food:
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text)
    url = db.Column(db.Text)
    is_closed = db.Column(db.Boolean)
    rating = db.Column(db.Float)
    display_address = db.Column(db.Text)
    display_phone = db.Column(db.String)
    image_url = db.Column(db.Text)

class Cities:
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    pop = db.Column(db.Float)
    temp_in_f = db.Column(db.float)
    wind_mph = db.Column(db.float)
    cond = db.Column(db.float)
    precip_in = db.Column(db.float)


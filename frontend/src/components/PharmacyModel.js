import React from 'react';
import { Link } from 'react-router-dom';
import '../css/City.css';

const CityCard = ({ cityData }) => {
  function connectDB() {
    // Database connection, since Pharmiacies pulls from multiple JSON files
    const mysql = require('mysql');
    const con = mysql.createConnection({
      host:  "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com",
      user: "admin",
      password: "StormShelters2023",
      database: "models"
    });
    con.connect();
  }
  connectDB();
  const pharmacyData = con.query("SELECT * from pharmacies_new");
  console.log(pharmacyData);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {pop}</li>
          <li className="list-group-item">Temperature: {temp}</li>
          <li className="list-group-item">Wind: {wind_mph}</li>
          <li className="list-group-item">Conditions: {condition}</li>
          <li className="list-group-item">Precipitations: {precip_in}</li>
        </ul>
        <div className="button-container">
          <Link to={`/city/${name}`} className="button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CityCard;

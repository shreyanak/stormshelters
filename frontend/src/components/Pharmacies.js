import React from 'react';
import '../css/City.css';
import CityCard from './CityModel';
import cityData from '../data/city-data';

import { Link } from 'react-router-dom'





function Pharmacies() {
    // chunk the city data into groups of three for grid
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
    <div className="pharmacies-container">
      <div className="card-container">
        {chunkedCityData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((city, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                  <CityCard cityData={city} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;

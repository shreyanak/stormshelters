import React from 'react';
import { Link } from 'react-router-dom';
import '../css/City.css';

const CityCard = ({ cityData }) => {
  const { name, pop, temp, wind_mph, condition, precip_in } = cityData;

  return (
    <div className="card">
      <div className="card-body">
        <Link to={`/city/${name}`} >
  
        <img class='card-img-top' src='https://www.southernliving.com/thmb/Nm6DnVCFUKM7dQSsqkutPxrNpuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1167434230-1-a6613ae7e7f145a8aa62baa816f8d910.jpg'></img>
        <h2 className="card-title">{name}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {pop}</li>
          <li className="list-group-item">Temperature: {temp}</li>
          <li className="list-group-item">Wind: {wind_mph}</li>
          <li className="list-group-item">Conditions: {condition}</li>
          <li className="list-group-item">Precipitations: {precip_in}</li>
        </ul>
        </Link>
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
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/City.css';

const CityCard = ({ cityData }) => {
  const { name, pop, temp, wind_mph, condition, precip_in } = cityData;

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

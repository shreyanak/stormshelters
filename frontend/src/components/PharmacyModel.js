import React from 'react';
import { Link } from 'react-router-dom';
import '../css/City.css';

const PharmacyCard = ({ pharmacyData }) => {
  const { address, categories, city, distance_m, name } = pharmacyData;

  return (  
    <div className="card">
      <div className="card-body">
        {/* <img className="card-img-top" src={im} */}
        <h4 className="card-title">{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Address: {address}</li>
          <li className="list-group-item">City: {city}</li>
          <li className="list-group-item">Category: {categories}</li>
          <li className="list-group-item">Distance: {distance_m}</li>
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

export default PharmacyCard;

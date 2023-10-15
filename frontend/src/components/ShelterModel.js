import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';

const ShelterCard = ({ shelterData }) => {
  if (!shelterData || shelterData.length === 0) {
    return <div>No shelter data available</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{shelterData.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Address: {shelterData.location.display_address.join(", ")}</li>
          <li className="list-group-item">Phone: {shelterData.display_phone}</li>
          <li className="list-group-item">Rating: {shelterData.rating}</li>
        </ul>
        <div className="button-container">
          <Link to={`/shelter/${shelterData.name}`} className="button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;

import React from 'react';
import { useParams } from 'react-router-dom';
import shelterData from '../data/shelter-data';
import '../css/ShelterDetail.css';

const ShelterDetail = () => {
  const { shelterName } = useParams();
  const currentShelter = shelterData[0].businesses.find(shelter => shelter.alias === shelterName);

  if (!currentShelter) {
    return <div>No shelter found</div>;
  }

  return (
    <div className="shelter-details-container">
      <h1 className="shelter-name">{currentShelter.name}</h1>
      <div className="shelter-image-container">
        <img src={currentShelter.image_url} alt={currentShelter.name} className="shelter-image" />
      </div>
      <div className="shelter-info">
        <p className="info-item">Phone: {currentShelter.display_phone}</p>
        <p className="info-item">Rating: {currentShelter.rating}</p>
        <p className="info-item">Address: {currentShelter.location.display_address.join(', ')}</p>
      </div>
    </div>
  );
};

export default ShelterDetail;

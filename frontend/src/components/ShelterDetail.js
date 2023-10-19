import React from 'react';
import { useParams } from 'react-router-dom';
// import shelterData from '../data/shelter-data';
import '../css/ShelterDetail.css';

const ShelterDetail = () => {
  const { shelterName } = useParams();
//   const currentShelter = shelterData[0].businesses.find(shelter => shelter.alias === shelterName);
    var apiRequest = new XMLHttpRequest();

    var url = `http://localhost:8000/shelters/${shelterName}`;
    console.log(url);
    apiRequest.open('GET', url, false); 
    apiRequest.send(null);
    var currentShelter = (JSON.parse(apiRequest.responseText).shelter);


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
        <div className="map-container">
        </div>
      </div>
    </div>
  );
};

export default ShelterDetail;

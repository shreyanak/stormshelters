import React from 'react';
import { useParams } from 'react-router-dom';
import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
// import shelterData from '../data/shelter-data';
import '../css/CityDetail.css';

const ShelterDetail = () => {
    const { id } = useParams();

    var mainURL = `https://api.stormshelters.me/shelters/${id}`;
    var mainreq = new XMLHttpRequest();
    mainreq.open('GET', mainURL, false); 
    mainreq.send(null);
    var currentShelter = (JSON.parse(mainreq.responseText).shelter);
  
    // Second request
    var newcityreq = new XMLHttpRequest();
    var similarCityURL = `https://api.stormshelters.me/cities/${Math.floor(Math.random() * 23)}`;
    newcityreq.open('GET', similarCityURL, false); 
    newcityreq.send(null);
    var newCityData = (JSON.parse(newcityreq.responseText).city);
  
    // Third request
    var newpharmreq = new XMLHttpRequest();
    var similarPharmacyURL = `https://api.stormshelters.me/pharmacies/${Math.floor(Math.random() * 70)}`
    newpharmreq.open('GET', similarPharmacyURL, false); 
    newpharmreq.send(null);
    var newPharmData = (JSON.parse(newpharmreq.responseText).pharmacy);
  
    // Final request
    var newshelterreq = new XMLHttpRequest();
    var similarShelterURL = `https://api.stormshelters.me/shelters/${Math.floor(Math.random() * 12)}`
    newshelterreq.open('GET', similarShelterURL, false); 
    newshelterreq.send(null);
    var newShelterData = (JSON.parse(newshelterreq.responseText).shelter);


  if (!currentShelter) {
    return <div>No shelter found</div>;
  }

  return (
    <div className="city-detail-container">
      <h1 className="city-name">{currentShelter.name}</h1>
      <div className="city-image-container">
        <img src={currentShelter.image_url} alt={currentShelter.name} className="city-image" />
      </div>
      <div className="city-detail-card-container">
        <p className="city-detail-card">Phone: {currentShelter.display_phone}</p>
        <p className="city-detail-card">Rating: {currentShelter.rating}</p>
        <p className="city-detail-card">Address: {currentShelter.display_address}</p>
        <div className="map-container">
        </div>
      </div>
      <div>

      </div>
      <div class="more-instances">
        <h2>Related Instances</h2>
        <div className="shelters-container">
          <div className="shelter-card-container">
            <CityCard cityData = {newCityData}/> 
          </div>
          <div className="shelter-card-container">
          <PharmacyCard pharmacyData = {newPharmData}/> 
          </div>
          <div className="shelter-card-container">
          <ShelterCard shelterData = {newShelterData}/> 
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ShelterDetail;

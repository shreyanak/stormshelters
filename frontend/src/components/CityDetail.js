import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';
import '../css/Shelter.css';

import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import ReactDOM from 'react-dom';
import React from 'react';


function CityDetail() {
  const { id } = useParams();

  // JRS 10/20 - please leave this code the same.
  // If it needs to be modified, please contact me first.
  // Primary request
  var mainURL = `https://api.stormshelters.me/cities/${id}`;
  var mainreq = new XMLHttpRequest();
  mainreq.open('GET', mainURL, false); 
  mainreq.send(null);
  var cityData = (JSON.parse(mainreq.responseText).city);

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


  const { name, pop, temp_in_f, wind_mph, cond, precip_in } = cityData;

  return (
    <div className="city-detail-container">
      <h1 className="city-title">{name}</h1>
      <div className="image-container">
        <img 
          src="https://www.southernliving.com/thmb/Nm6DnVCFUKM7dQSsqkutPxrNpuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1167434230-1-a6613ae7e7f145a8aa62baa816f8d910.jpg"
          alt="City"
          className="city-image"
        />
      </div>
      <div className="city-detail-card-container">
        <div className="city-detail-card">
          <p>Population: {pop}</p>
        </div>
        <div className="city-detail-card">
          <p>Temperature: {temp_in_f}</p>
        </div>
        <div className="city-detail-card">
          <p>Wind: {wind_mph}</p>
        </div>
        <div className="city-detail-card">
          <p>Conditions: {cond}</p>
        </div>
        <div className="city-detail-card">
          <p>Precipitations: {precip_in}</p>
        </div>
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
}

export default CityDetail;

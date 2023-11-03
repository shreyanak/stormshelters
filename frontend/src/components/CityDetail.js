import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';
import '../css/Shelter.css';

import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import ReactDOM from 'react-dom';
import React from 'react';
import { useEffect, useState } from 'react';

import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const GOOGLE_API_KEY_MAP = 'AIzaSyAP0iwpFt7n8429SqZpI_N-OXxTC5ywfn8';

const cities_in_harris = ['baytown,tx', 'bellaire,tx', 'deer park,tx', 'cypress,tx', 'highlands,tx', 'houston,tx', 'katy,tx', 'huffman,tx', 'kingwood,tx', 'pasadena,tx', 'spring,tx', 'waller,tx', 'tomball,tx', 'humble,tx', 'webster,tx', 'aldine,tx', 'jersey village,tx', 'atascocita,tx', 'southside place,tx', 'hedwig village,tx', 'bunker hill village,tx', 'el lago,tx', 'sheldon,tx', 'barrett,tx', 'cloverleaf,tx', 'morgans point,tx', 'la porte,tx', 'galena park,tx']


function CityDetail() {
  const { id } = useParams();
  const [coords, setCoords] = useState(null);

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
  var similarPharmacyURL = `https://api.stormshelters.me/pharmacies/${Math.floor(Math.random() * 50)}`
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

  useEffect(() => {

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY_MAP}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const geocoder = new window.google.maps.Geocoder();
      // const address = `${cities_in_harris[id - 1]}`;
      const address = `baytown,tx`;

      console.log(address);

      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { location } = results[0].geometry;
          const newCoords = { lat: location.lat(), lng: location.lng() };
          setCoords(newCoords);
        }
      });
    };

    document.head.appendChild(script);
  }, []);

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
          <p>Temperature: {temp_in_f}°F</p>
        </div>
        <div className="city-detail-card">
          <p>Wind: {wind_mph}mph</p>
        </div>
        <div className="city-detail-card">
          <p>Conditions: {cond}</p>
        </div>
        <div className="city-detail-card">
          <p>Precipitation: {precip_in} inches</p>
        </div>
      </div>

      <div className="map-container">
        {coords && (
          <LoadScript googleMapsApiKey={GOOGLE_API_KEY_MAP}>
            <GoogleMap
              mapContainerStyle={{ width: '600px', height: '400px' }}
              zoom={15}
              center={coords}
            >
              <Marker
                position={coords}
              />
            </GoogleMap>
          </LoadScript>
        )}
      </div>

      <div className="city-container-container">
        <h1>Related Instances</h1>
        <div className="city-card-container">
          <CityCard cityData = {newCityData}/> 
          <PharmacyCard pharmacyData = {newPharmData}/> 
          <ShelterCard shelterData = {newShelterData}/> 
        </div>
      
      </div>
    </div>
  );
}

export default CityDetail;

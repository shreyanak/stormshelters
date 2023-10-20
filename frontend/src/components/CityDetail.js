import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';

function CityDetail() {
  // const [cityData, setCityData] = useState(null);
  // const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(id);


  // JRS - please leave this code the same.
  var apiRequest = new XMLHttpRequest();

  var url = `http://localhost:8000/cities/${id}`;
  console.log(url);
  apiRequest.open('GET', url, false); 
  apiRequest.send(null);
  var cityData = (JSON.parse(apiRequest.responseText).city);

  console.log(cityData);


  const { city_name, pop, 'temp in f': temp, wind_mph, condition, precip_in } = cityData;

  return (
    <div className="city-detail-container">
      <h1 className="city-title">{city_name}</h1>
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
          <p>Temperature: {temp}</p>
        </div>
        <div className="city-detail-card">
          <p>Wind: {wind_mph}</p>
        </div>
        <div className="city-detail-card">
          <p>Conditions: {condition}</p>
        </div>
        <div className="city-detail-card">
          <p>Precipitations: {precip_in}</p>
        </div>
      </div>
    </div>
  );
}

export default CityDetail;

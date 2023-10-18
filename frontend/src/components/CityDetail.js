import React from 'react';
import { useParams } from 'react-router-dom';
import cityData from '../data/city-data';
import '../css/CityDetail.css';

function CityDetail() {
  const { cityName } = useParams();
  const selectedCity = cityData.find((city) => city.name === cityName);

  if (!selectedCity) {
    return <div>City not found</div>;
  }

  const { name, pop, 'temp in f': temp, wind_mph, condition, precip_in } = selectedCity;

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

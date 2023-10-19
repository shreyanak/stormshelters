import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';

function CityDetail() {
  const { id } = useParams();
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.stormshelters.me/cities/${id}`);
        console.log(response)
        if (!response.ok) {
          throw new Error("City not found");
        }
  
        const data = await response.json();
        setCityData(data.city);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchData();
  }, []);



  const { name, pop, 'temp in f': temp, wind_mph, condition, precip_in } = cityData;

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

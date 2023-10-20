import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';

function PharmacyDetail() {
  const [pharmacyData, setPharmacyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.stormshelters.me/pharmacies/${name}`);
        console.log(response)
        if (!response.ok) {
          throw new Error("City not found");
        }
  
        const data = await response.json();
        setPharmacyData(data.city);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchData();
  }, []);
  console.log(pharmacyData);


  const { name, city, address, distance_m, categories, longitude, latitude } = pharmacyData;

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
          <p>City: {city}</p>
        </div>
        <div className="city-detail-card">
          <p>Address: {address}</p>
        </div>
        <div className="city-detail-card">
          <p>Distance: {distance_m}</p>
        </div>
        <div className="city-detail-card">
          <p>Category: {categories}</p>
        </div>
      </div>
    </div>
  );
}

export default PharmacyDetail;

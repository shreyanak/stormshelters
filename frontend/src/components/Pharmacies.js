import React from 'react';
import '../css/Pharmacy.css';
import PharmacyCard from './PharmacyModel';
// import { Link } from 'react-router-dom'

function Pharmacies() {
  var apiRequest = new XMLHttpRequest();
  apiRequest.open('GET', "https://api.stormshelters.me/pharmacies", false); 
  apiRequest.send(null);
  var pharmacyData = (JSON.parse(apiRequest.responseText)).pharmacies;

  // chunk the city data into groups of three for grid
  function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  const chunkedPharmacyData = chunkArray(pharmacyData, 3);

  return (
    <div className="pharmacies-container">
      <h1>Pharmacies</h1>
      <p>Total Instances: {pharmacyData.length}</p>
      <div className="card-container">
        {chunkedPharmacyData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((city, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                  <PharmacyCard pharmacyData={city} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pharmacies;



import React from 'react';
import '../css/Pharmacy.css';
import PharmacyCard from './PharmacyModel';
import { Link } from 'react-router-dom'

var nextPage = 1;

function nextPharm() {
  nextPage++;
  window.location.href = `http://localhost:3001/pharmacies?page=${nextPage}`;
}

function Pharmacies() {
  var apiRequest = new XMLHttpRequest();
  var query = window.location.search;
  var urlParam = new URLSearchParams(query);
  var page = urlParam.get('page');


  if (page > 0) {
    nextPage = page;
  }

  var url = `http://localhost:8000/pharmacies?page=${page}`;
  apiRequest.open('GET', url, false); 

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
      <div className="show-more">
        <div className="button-container">
            <Link onClick={nextPharm} className="button">Next</Link>
        </div>
      </div>

    </div>
  );
}

export default Pharmacies;



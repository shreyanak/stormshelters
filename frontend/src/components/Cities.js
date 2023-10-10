import React from 'react';
import '../css/City.css';
import CityCard from './CityModel';
import cityData from '../data/city-data';
import { Link } from 'react-router-dom'

function Cities() {
  // chunk the city data into groups of three for grid
  function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  const chunkedCityData = chunkArray(cityData, 3);

  return (
    <div className="cities-container">
      <h1>City Model</h1>
      <p>Total Instances: {cityData.length}</p>

      <div className="card-container">
        {chunkedCityData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((city, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                  <CityCard cityData={city} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;

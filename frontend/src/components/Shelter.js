import React from 'react';
import '../css/Shelter.css';
import ShelterCard from './ShelterModel';
import shelterData from '../data/shelter-data';
import { Link } from 'react-router-dom';

function Shelters() {
  // chunk the shelter data into groups of three for grid
  function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  const chunkedShelterData = chunkArray(shelterData[0].businesses, 3);

  return (
    <div className="shelters-container">
      <h1>Shelter Model</h1>
      <p>Total Instances: {shelterData[0].businesses.length}</p>

      <div className="card-container">
        {chunkedShelterData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((shelter, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                <ShelterCard shelterData={shelter} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shelters;

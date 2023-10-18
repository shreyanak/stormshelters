import React from 'react';
import '../css/Shelter.css';
// import shelterData from '../data/shelter-data';
import ShelterCard from './ShelterModel';

function Shelters() {
  var apiRequest = new XMLHttpRequest();
  apiRequest.open('GET', "https://api.stormshelters.me/shelters", false); 
  apiRequest.send(null);
  var shelterData = (JSON.parse(apiRequest.responseText)).shelters;
  console.log(shelterData);

  // chunk the shelter data into groups of three for grid
  function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  const chunkedShelterData = chunkArray(shelterData, 3);

  return (
    <div className="shelters-container">
      <h1>Shelter Model</h1>
      {/* <p>Total Instances: {shelterData.length}</p> */}

      <div className="shelter-card-container">
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

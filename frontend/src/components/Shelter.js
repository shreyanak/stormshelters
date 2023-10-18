import React from 'react';
import '../css/Shelter.css';
import ShelterCard from './ShelterModel';
import { Link } from 'react-router-dom'

var nextPage = 1;

function nextShelter() {
  nextPage++;
  window.location.href = `http://localhost:3001/shelters?page=${nextPage}`;
}

function Shelters() {

  var apiRequest = new XMLHttpRequest();
  var query = window.location.search;
  var urlParam = new URLSearchParams(query);
  var page = urlParam.get('page');


  if (page > 0) {
    nextPage = page;
  }

  var url = `http://localhost:8000/shelters?page=${page}`;
  apiRequest.open('GET', url, false); 


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

      <div className="show-more">
        <div className="button-container">
            <Link onClick={nextShelter} className="button">Next</Link>
        </div>
      </div>

    </div>
  );
}

export default Shelters;

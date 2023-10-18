import React from 'react';
import '../css/City.css';
import { Link } from 'react-router-dom';
import CityCard from './CityModel';

var nextPage = 1;

function nextCity() {
  nextPage++;
  window.location.href = `http://localhost:3001/cities?page=${nextPage}`;
}
function Cities() {
  var apiRequest = new XMLHttpRequest();
  var query = window.location.search;
  var urlParam = new URLSearchParams(query);
  var page = urlParam.get('page');


  if (page > 0) {
    nextPage = page;
  }

  var url = `http://localhost:8000/cities?page=${page}`;
  // console.log(url);
  apiRequest.open('GET', url, false); 
  apiRequest.send(null);
  var cityData = (JSON.parse(apiRequest.responseText)).cities;
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
            {chunk.map((pharmacy, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                  <CityCard cityData={pharmacy} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="show-more">
        <div className="button-container">
            <Link onClick={nextCity} className="button">Next</Link>
        </div>
      </div>

    </div>
  );
}


export default Cities;

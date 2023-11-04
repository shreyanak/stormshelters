import React, { useState, useEffect } from 'react';
import '../css/Shelter.css';
import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

var cardList;
var model, query, searchJSON;
function backendSearch(model, query){
  var mainURL = `https://api.stormshelters.me/search/${model}/${query}`;
  var mainreq = new XMLHttpRequest();
  mainreq.open('GET', mainURL, false); 
  mainreq.send(null);
  searchJSON = (JSON.parse(mainreq.responseText).model);
}
function Cities() {
  model = useParams({ model });
  query = useParams({ query });
  backendSearch(model, query);

  for (model in searchJSON) {
    // Model is the key in the JSON dict
    // searchJSON[model] is a list
    if (searchJSON[model].length > 0) {
      // now, entry is a dictionary that we want to hand to the card generator
      var index = 0;
      for (entry in searchJSON[model]) {
        cardList[index] = <SearchCard data ={ entry } />
        index++;
      }
    }
  }
  const chunkedSearchData = chunkArray(searchJSON, 1);
  

  // Step 5: Use React Router to handle navigation
  return (
    <div className="shelters-container">
      <h1>Cities</h1>
      <p>Total Instances: {searchJSON.length}</p>

      <div className="shelter-card-container">
        {chunkedSearchData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((id, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                cardList[id]
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="show-more">
        <div className="button-group">
        <button
            onClick={() => setPageNum((prev) => prev - 1)}
        
            disabled={pageNum === 1}
            className="shelter-button prev-button"
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (cityData.length > 0) {
                setPageNum((prev) => prev + 1);
              }
            }
          }
            disabled={pageNum === Math.ceil(numInstances.count / 9)}

            className="shelter-button next-button"
          >
            Next
            
          </button>

        </div>
        <h3 class="text-center">Page {pageNum} of {Math.ceil(numInstances.count / 9)}</h3>
      </div>
    </div>
  );
}

export default Cities;

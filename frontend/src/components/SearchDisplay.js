import React, { useState, useEffect } from 'react';
import '../css/Shelter.css';
import SearchCard from './SearchCard';
import { useParams } from 'react-router-dom';

// This will become a list of React components for each query result
var cardList = new Array();


function SearchDisplay() {
  var { model, query } = useParams();
  // When we direct to SearchDisplay, we include the query and model in the URL.
  var mainURL = `https://api.stormshelters.me/search/${model}/${query}`;
  console.log(mainURL);
  var mainreq = new XMLHttpRequest();
  mainreq.open('GET', mainURL, false); 
  mainreq.send(null);
  // Display an error message upon query failure.
  if (mainreq.status == 200) {
    if (model == 'city') model = 'cities';
    // If the model is 'all', results becomes a dictionary with all of the parsed out JSON data (dictionaries)
    // If the model is specific, results will just contain the data for the model (also a dictionary)
    var results = model == 'all' ? {"city": (JSON.parse(mainreq.responseText).cities), 
                                    "pharmacies": (JSON.parse(mainreq.responseText).pharmacies), 
                                    "shelters": (JSON.parse(mainreq.responseText).shelters)}
                                  : (JSON.parse(mainreq.responseText).data);
    if (model == 'all') {
      for (var modelSelect in results) {
          for (var value of results[modelSelect]) {
            // Create a new SearchCard based on the JSON data for an individual instance of a model
            cardList.push((<SearchCard model = {modelSelect} data = {value} />));
          }
      }
    } else {
      // The user queried a single model, so the computation is a lot simpler.
      for (var value of results) {
        cardList.push(<SearchCard model ={ model } data = { value } />);
      }
    }

    // Print the content of the SearchDisplay page
    return (
      <div className="shelters-container">
        <h1>Search Results</h1>
        <div className="shelter-card-container">
          {/* This prints out each ShelterCard stored in the cardList structure */}
          {cardList.map((card, index) => (
            <div key="index">{card}</div>
          ))}
        </div>
      </div>
    );
  } else {
    console.log("Internal error.");
    // Since the request was bad, display an error message.
    return (
      <div className="shelters-container">
        <h1>Internal error</h1>
      </div>
    );
  }


  
}

export default SearchDisplay;

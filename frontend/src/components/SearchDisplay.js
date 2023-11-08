// import React, { useState, useEffect } from 'react';
import '../css/Shelter.css';
import SearchCard from './SearchCard';
import { useParams } from 'react-router-dom';
import ModelDisplay from './ModelDisplay';

// This will become a list of React components for each query result
function SearchDisplay() {
  var modelDisplayList = new Array();
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
        console.log("push1");
        modelDisplayList.push(<ModelDisplay modelSelect = {modelSelect} results = {results} displayAll={true}/>);
      }
    } else {
      // The user queried a single model, so the computation is a lot simpler.
      // for (var value of results) {
        // modelResultList.push(<SearchCard model ={ model } data = { value } />);
        console.log("push2");

        modelDisplayList.push(<ModelDisplay modelSelect = {model} results = {results} displayAll={false}/>);
      // }
    }

    // Print the content of the SearchDisplay page
    return (
      <div className="shelters-container">
        <h1>Search Results</h1>
        <div className="card-container">
          {/* This prints out each ShelterCard stored in the cardList structure */}
          {
          model == "all" ? (
            modelDisplayList.map((card, index) => (
            <div key="index">{card}</div>)
          )) : model == "cities" ? (modelDisplayList[0]) : model == "pharmacies" ? (modelDisplayList[1]) : model == "shelters" ? (modelDisplayList[2]) : <h2>NO results!</h2> }
          {/* {modelDisplayList[2]} */}
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

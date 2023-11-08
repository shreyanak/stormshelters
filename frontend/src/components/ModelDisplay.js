import React from 'react';
import SearchCard from './SearchCard';

const ModelDisplay = ({ modelSelect, results, displayAll }) => {
    var modelResultList = new Array();

     if (displayAll) {
         // Create a new SearchCard based on the JSON data for an individual instance of a model
         for (var value of results[modelSelect]) {
            modelResultList.push((<SearchCard model = {modelSelect} data = {value} />));
            }
     } else {
        for (var value of results) {
            modelResultList.push(<SearchCard model ={ modelSelect } data = { value } />);  
        }
     }

    return (
        <div>
            <h1> Results from {modelSelect.charAt(0).toUpperCase() + modelSelect.slice(1)} </h1>
            
            {/* Either display the results found in the list of SearchCards, or display a message
            letting the user know that the query rendered no results. */}
            {modelResultList.length > 0 ? (
            modelResultList.map((card, index) => (
                <div key="index">{card}</div>
            ))
            ) : (
                <h3>No results found.</h3>
            )}
        </div>
    );
     
};

export default ModelDisplay;
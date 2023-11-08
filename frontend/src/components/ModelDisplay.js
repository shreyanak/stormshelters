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
            <h1> Results from {modelSelect} </h1>
            {modelResultList.map((card, index) => (
                <div key="index">{card}</div>
            ))}
        </div>
    );
     
};

export default ModelDisplay;
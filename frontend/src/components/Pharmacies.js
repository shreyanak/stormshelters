import React from 'react';
import '../css/Pharmacy.css';
import PharmacyCard from './PharmacyModel';
import { Link } from 'react-router-dom'
// import axios from 'axios'
console.log("hello?");

fetch("pharmacies/1")
.then(res => res.json())
.then(data => {
  console.log(data);

});
// const pharmacyData = await response.json();
const pharmacyData = {"a": 1, "b": 2, "c": 3};


// THIS SYNTAX IS AWFUL.
// axios.get('localhost:3001/pharmacies1').then(response => {
//    const ourResponse = response.data;
//    pharmacyData = ourResponse;
//    console.log("response " + response);
   
   
   
//   });
  console.log(pharmacyData);

function Pharmacies() {
  // chunk the city data into groups of three for grid
  function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  const chunkedPharmacyData = chunkArray(pharmacyData, 3);

  return (
    <div className="pharmacies-container">
      <div className="card-container">
        {chunkedPharmacyData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((city, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                  <PharmacyCard pharmacyData={city} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pharmacies;



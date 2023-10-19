import React, { useState, useEffect } from 'react';
import '../css/Pharmacy.css';
import PharmacyCard from './PharmacyModel';

function Pharmacies() {
  // Step 1: Define state variable to store city data
  const [pharmacyData, setPharmacyData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Step 2: Create an asynchronous function to fetch data
  const fetchData = async (page) => {
    try {
      const apiUrl = `https://api.stormshelters.me/pharmacies?page=${page}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setPharmacyData(data.pharmacies)
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Step 3: Fetch data when the component mounts or when the page parameter changes
  useEffect(() => {
    fetchData(pageNum);
  }, [pageNum]);

  // Step 4: Render data in the desired format
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedPharmacyData = chunkArray(pharmacyData, 3);

  // Step 5: Use React Router to handle navigation
  return (
    <div className="pharmacies-container">
      <h1>Pharmacies</h1>
      <p>Total Instances: {pharmacyData.length}</p>

      <div className="card-container">
        {chunkedPharmacyData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((pharmacies, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                <PharmacyCard pharmacyData={pharmacies} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="show-more">
        <div className="button-container">
          <button onClick={() => {
    if (pharmacyData.length > 0) {
      setPageNum((prev) => prev + 1);
    }
  }}
  disabled={pharmacyData.length === 0}>
            Next
          </button>
          <button onClick={() => setPageNum((prev) => prev - 1)} disabled={pageNum==1}>
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pharmacies;

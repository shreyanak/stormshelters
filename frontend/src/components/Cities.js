import React, { useState, useEffect } from 'react';
import '../css/City.css';
import CityCard from './CityModel';

function Cities() {
  // Step 1: Define state variable to store city data
  const [cityData, setCityData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Step 2: Create an asynchronous function to fetch data
  const fetchData = async (page) => {
    try {
      const apiUrl = `https://api.stormshelters.me/cities?page=${page}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setCityData(data.cities)
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

  const chunkedCityData = chunkArray(cityData, 3);

  // Step 5: Use React Router to handle navigation
  return (
    <div className="cities-container">
      <h1>Cities</h1>
      <p>Total Instances: {cityData.length}</p>

      <div className="card-container">
        {chunkedCityData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((city, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                <CityCard cityData={city} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="show-more">
        <div className="button-container">
          <button onClick={() => {
    if (cityData.length > 0) {
      setPageNum((prev) => prev + 1);
    }
  }}
  disabled={cityData.length === 0}>
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

export default Cities;

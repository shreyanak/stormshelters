import React, { useState, useEffect } from 'react';
import '../css/Shelter.css';
import CityCard from './CityModel';
import { useParams } from 'react-router-dom';

function Cities() {
    // Step 1: Define state variable to store shelter data
  const [cityData, setCityData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const { id } = useParams();

    // Step 2: Create an asynchronous function to fetch data
  const fetchData = async (page) => {
    try {
      const apiUrl = `https://api.stormshelters.me/cities?page=${page}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setCityData(data.cities);
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
  }, [pageNum, id]);


  // chunk the shelter data into groups of three for grid
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
    <div className="shelters-container">
      <h1>Cities</h1>
      <p>Total Instances: {cityData.length}</p>

      <div className="shelter-card-container">
        {chunkedCityData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((id, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                <CityCard cityData={ id } />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="show-more">
        <div className="button-group">
          <button
            onClick={() => {
              if (cityData.length > 0) {
                setPageNum((prev) => prev + 1);
              }
            }}
            disabled={cityData.length === 0}
            className="shelter-button next-button"
          >
            Next
          </button>
          <button
            onClick={() => setPageNum((prev) => prev - 1)}
            disabled={pageNum === 1}
            className="shelter-button prev-button"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cities;

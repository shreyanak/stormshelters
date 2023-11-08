import React, { useState, useEffect } from 'react';
import '../css/Shelter.css';
import CityCard from './CityModel';
import SortCity from './SortCity';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';

function Cities() {
    // Step 1: Define state variable to store shelter data
  const [cityData, setCityData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [numInstances, setMetaData] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState(''); // Default sorting option
  const [selectedSortOrder, setSelectedSortOrder] = useState(''); // Default sorting order


    // Step 2: Create an asynchronous function to fetch data
  const fetchData = async (page, sortOption) => {
  try {
    let apiUrl = `https://api.stormshelters.me/cities?page=${page}&per_page=${9}`;

    // Determine the sorting order based on the selected option
    if (sortOption === 'City Asc') {
      apiUrl += `&sort=city&order=asc`
    }
    else if (sortOption === 'City Desc'){
      apiUrl += `&sort=city&order=desc`
    }
    else if (sortOption === 'Population Asc') {
      apiUrl += `&sort=pop&order=asc`;
    }
    else if (sortOption === 'Population Desc'){
      apiUrl += `&sort=pop&order=desc`;
    }
    else if (sortOption === 'Temperature Asc'){
      apiUrl += `&sort=temp&order=asc`;
    }
    else if (sortOption === 'Temperature Desc') {
      apiUrl += `&sort=temp&order=desc`;
    }

    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      setCityData(data.cities);
      setMetaData(data.meta.count);
    } else {
      console.error('Error fetching data:', response.status);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchData(pageNum, selectedSortOption, selectedSortOrder);
}, [pageNum, selectedSortOption]);

const handleSortChange = (newSortOption) => {
  setSelectedSortOption(newSortOption);
  setPageNum(1);
};


  // chunk the shelter data into groups of three for grid
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedCityData = chunkArray(cityData, 1);
  const searchCity = <SearchBar model='city' />;
  

  // Step 5: Use React Router to handle navigation
  return (
    <div className="shelters-container">
      <h1>Cities</h1>
      <SortCity selectedOption={selectedSortOption} onSortOptionChange={handleSortChange} />
      <p>Total Instances: {cityData.length}</p>
      <SearchBar model='city' />

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
        <h3 class="text-center">Page {pageNum} of {Math.ceil(numInstances / 9)}</h3>
      </div>
    </div>
  );
}

export default Cities;

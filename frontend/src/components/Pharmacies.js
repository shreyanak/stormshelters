import React, { useState, useEffect } from 'react';
import '../css/Pharmacy.css';
import PharmacyCard from './PharmacyModel';
import SortPharmacy from './SortPharmacy';
import SearchBar from './SearchBar';

function Pharmacies() {
  // Step 1: Define state variable to store city data
  const [pharmacyData, setPharmacyData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [numInstances, setMetaData ] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState(''); // Default sorting option
  const [selectedSortOrder, setSelectedSortOrder] = useState(''); // Default sorting order
  // Step 2: Create an asynchronous function to fetch data
  const fetchData = async (page, sortOption) => {
    try {
      let apiUrl = `https://api.stormshelters.me/pharmacies?page=${page}`
      
      if (sortOption === 'Name Asc') {
        apiUrl += `&sort=name&order=asc`
      }
      else if (sortOption === 'Name Desc') {
        apiUrl += `&sort=name&order=desc`
      }
      else if (sortOption === 'City Asc'){
        apiUrl += `&sort=city&order=asc`
      }
      else if (sortOption === 'City Desc'){
        apiUrl += `&sort=city&order=desc`
      }
      else if (sortOption === 'Distance Asc'){
        apiUrl += `&sort=dist&order=asc`
      }
      else if (sortOption === 'Distance Desc'){
        apiUrl += `&sort=dist&order=desc`
      }

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setPharmacyData(data.pharmacies)
        setMetaData(data.meta)
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
      <SortPharmacy selectedOption={selectedSortOption} onSortOptionChange={handleSortChange} />
      <p>Total Instances: {pharmacyData.length}</p>
      <SearchBar model='pharmacies' />;


      <div className="card-container">
        {chunkedPharmacyData.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((id, colIndex) => (
              <div className="col-sm-4" key={colIndex}>
                <PharmacyCard pharmacyData={id} />
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
              if (pharmacyData.length > 0) {
                setPageNum((prev) => prev + 1);
              }
            }}
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

export default Pharmacies;

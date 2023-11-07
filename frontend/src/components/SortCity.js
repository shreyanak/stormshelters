import React, { useState } from 'react';

function SortCity({ onSortOptionChange }) {
  const [selectedOption, setSelectedOption] = useState(''); // Store the selected option
  const [selectedOrder, setSelectedOrder] = useState('asc'); // Default sorting order

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    // Determine the sorting order based on the selected option
    const order = event.target.value.includes('Desc') ? 'desc' : 'asc';
    setSelectedOrder(order);

    // Call the parent component's callback with the selected option and order
    onSortOptionChange(event.target.value, order);
  };

  return (
    <div>
      <label>Sort By: </label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="None">Select</option>
        <option value="City Asc">City (Ascending)</option>
        <option value="City Desc">City (Descending)</option>
        <option value="Population Asc">Population (Ascending)</option>
        <option value="Population Desc">Population (Descending)</option>
        <option value="Temperature Asc">Temperature (Ascending)</option>
        <option value="Temperature Desc">Temperature (Descending)</option>
        <option value="Wind Asc">Wind mph (Ascending)</option>
        <option value="Wind Desc">Wind mph (Descending)</option>
      </select>
    </div>
  );
}

export default SortCity;

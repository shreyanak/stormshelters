import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetail() {
  const { cityName } = useParams();
  
  return (
    <div>
      <h1>{cityName}</h1>
    </div>
  );
}

export default CityDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';





const SearchCard = ({ searchJSON }) => {
// .strip to remove unneeded characters
  return (
    // <Link style={{textDecoration: 'none'}} to ={`/cities/${id}`}>
    <div>
        {searchJSON.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
    // </Link>
  );
};

export default CityCard;

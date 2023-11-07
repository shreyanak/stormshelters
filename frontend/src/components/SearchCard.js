import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';





const SearchCard = ({ model, data }) => {
  // .strip to remove unneeded characters
    // const filter = data.filter(item => !('url' || 'name' || 'image' || 'temp_in_f' in item));
    return (
      <Link style={{textDecoration: 'none'}} to ={`/cities/${data.id}`}>
      <div>
        <h1>{model}</h1>
        <h2>{data.name}</h2>
        {Object.entries(data).map(([key, val], index) => (
          <div key={index}> 
            {key}: {val}

          </div>
        ))}
      </div>
      </Link>

    );
  };

export default SearchCard;

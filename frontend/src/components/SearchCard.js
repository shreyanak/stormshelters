import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';

// Given the specific models, only display the following




const SearchCard = ({ model, data }) => {
  // .strip to remove unneeded characters

    var image = data.image_url || data.image || data.url;
    return (
      <Link style={{textDecoration: 'none'}} to ={`/cities/${data.id}`}>
      <div className='shelter-card'>

        <div className="shelter-image-container">
          <img src={image} className="shelter-card-img-top" />
        </div>
        <div className="shelter-card-body">
          {/* <h1 className="shelter-card-title">{model}</h1> */}
          <h2 className='shelter-card-title'>{data.name}</h2>
        <ul className="list-group list-group-flush">
          {Object.entries(data).map(([key, val], index) => {
            if (key !== "url" && key !== "image_url" && key !== "image" && key !== "distance_m" && key !== "percip_in" && key != "is_closed") {
              key = key.split('_').join(' ');
              key = key.charAt(0).toUpperCase() + key.slice(1);
              
              return (
                <li className="list-group-item" key={index}>{key}: {val} </li>
              )
            } else {
              return null;
            }
          })}
        
        </ul>
      </div>
      </div>

      </Link>

    );
  };

export default SearchCard;
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';
import '../css/Search.css';

const SearchCard = ({ model, data, query }) => {
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
            if (key !== "url" && key !== "image_url" && key !== "image" && key !== "distance_m" && key !== "percip_in" && key !== "is_closed") {
              key = key.split('_').join(' ');
              key = key.charAt(0).toUpperCase() + key.slice(1);
              var highlightKey = '';
              var highlightVal = '';
              console.log(val);
              if (query && key.indexOf(query, 0) != -1) {
                // Yay, the key contains the query
                highlightKey = "highlight";
              }
              if (query && val.toString().indexOf(query, 0) != -1) {
                // Yay, the key contains the query
                highlightVal = "highlight";
              }
              return (
                <li className='list-group-item' key={index}>
                  <span className={highlightKey}>{key}</span>: <span className={highlightVal}>{val} </span>
                </li>
             
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

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';





const SearchCard = ({ model, data }) => {
  // .strip to remove unneeded characters
    // const filter = data.filter(item => !('url' || 'name' || 'image' || 'temp_in_f' in item));
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
          {Object.entries(data).map(([key, val], index) => (
             <li className="list-group-item" key={index}>{key}: {val} </li>
        ))}
        </ul>
      </div>
      </div>

      </Link>

    );
  };

export default SearchCard;

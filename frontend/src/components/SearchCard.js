import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Shelter.css';
import '../css/Search.css';


function highlight(str, query) {
  var idx = 0;
  var highlightCharElem = new Set();
  while (str[idx]) {
    // Check if the next N characters are the query (SLOW!)
    var found = false;
    var lowerstr = str.toLowerCase();
    var tempH = new Array();
    var tempN = new Array();
    console.log("length: " + query.length)
    for (var i = 0; i < query.length; i++) {
      if (query.indexOf(lowerstr[i + idx], 0) !== -1) {
        tempH.push(<span className='highlight'>{str[i + idx]}</span>);
        // if (!tempN.some(el => el.props.children === str[i + idx])) {
          console.log(tempN);
          console.log("add 1 " + tempN);

          tempN.push(<span key = {i + idx}>{str[i + idx]}</span>);
          
        // }
        // highlightCharElem.push(<span>{str[i + idx]}</span>);

      } else {
        // break;
        console.log("bad")
        // if (!tempN.some(el => el.props.children === str[i + idx])) {
          tempN.push(<span key = {i + idx}>{str[i + idx]}</span>);
          console.log("add 2 " + tempN);
          
        // }
        // highlightCharElem.push(<span>{str[i + idx]}</span>);
        // found = false;
        break;
      }
      // found = true;
    }
    if (tempH.length === query.length) {
      highlightCharElem.add(tempH);
      idx += query.length;
    } else {
      highlightCharElem.add(tempN);
      idx += tempN.length;

      // 
    }
    

    // if (query.indexOf(str[idx], 0) !== -1) {
    //   temp.push(<span className='highlight'>{str[idx]}</span>);
    // } else {
    //   tempN.push(<span>{str[idx]}</span>);
    // }
  }
  return highlightCharElem;
}
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
          <h2 className='shelter-card-title'>{highlight(data.name, query)}</h2>
        <ul className="list-group list-group-flush">
          {Object.entries(data).map(([key, val], index) => {
            if (key !== "url" && key !== "image_url" && key !== "image" && key !== "distance_m" && key !== "percip_in" && key !== "is_closed") {
              key = key.split('_').join(' ');
              key = key.charAt(0).toUpperCase() + key.slice(1);
              var highlightKey = highlight(key, query);
              var highlightVal = highlight(val.toString(), query);
              // var highlightKey = '';
              // var highlightVal = '';

              return (
                <li className='list-group-item' key={index}>
                  {highlightKey}: {highlightVal}
                  {/* <span className={highlightKey}>{key}</span>: <span className={highlightVal}>{val} </span> */}
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

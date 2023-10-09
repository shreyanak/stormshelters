import React, { useEffect, useState } from 'react';
import image from './img/cypress.jpg'
import cityJSON from './data/city-data';

function Cypress() {
  const [cypressData, setCypressData] = useState({});

  useEffect(() => {
    const cypressCity = cityJSON.find((city) => city.name === 'Cypress');
    setCypressData(cypressCity);
    // fetch('./static/cities_data.json')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const houstonCity = data.city.find((city) => city.name === 'Houston');
    //     setHoustonData(houstonCity);
    //   })
    //   .catch((error) => console.error('Error:', error));
  }, []);
  
  return (
    <div>
      <h1 className="text-center">Cypress</h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{ width: '800px', height: '450px' }}
          id="carouselExampleControls"
          className="carousel slide active"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={image}
                alt="First slide"
                width="800px"
                height="450px"
              />
÷
            </div>
            {/* <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./static/img/cypress.jpg"
                alt="Second slide"
                width="800px"
                height="450px"
              />
            </div>
            <div className="carousel-item active" style={{ borderRadius: '50px' }}>
              <img
                className="d-block w-100"
                src="./static/img/cypress.jpg"
                alt="Third slide"
                width="800px"
                height="450px"
              />
            </div> */}
          </div>
          {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a> */}
        </div>
      </div>

      <div className="instanceText" style={{ paddingLeft: '20px' }} id="instanceInformationList">
        <h3 className="text-left">About</h3>
        <p>Population: {cypressData.pop}</p>
        <p>Temperature: {cypressData.tmp}</p>
        <p>Wind: {cypressData.wind_mph}</p>
        <p>Conditions: {cypressData.condition}</p>
        <p>Precipitation: {cypressData.precip_in}</p>
        <p>{cypressData.about}</p>
      </div>
      <div
        id="mapEmbed"
        style={{ justifyContent: 'center', display: 'flex' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110610.25585379337!2d-95.77968769923528!3d29.963030537090365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d5b99bebb619%3A0xe28b28c8077c64c7!2sCypress%2C%20TX!5e0!3m2!1sen!2sus!4v1695785502440!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h3 className="text-left">Related</h3>
      <div className="row">
        <div className="col-sm-4 card">
          <img className="card-img-top" src="./static/img/storm1_1.jpg" alt="Houston October 2002 Rainstorms" />
          <div className="card-body">
            <h4 className="card-title">Severe Storms</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Start Date: October 2002</li>
              <li className="list-group-item">End Date: November 2002</li>
              <li className="list-group-item">Type: Severe Storm</li>
              <li className="list-group-item">Code: Disaster Declaration</li>
              <li className="list-group-item">Total FEMA Aid: $115,969,311.20</li>
            </ul>
            <a href="storm1.html" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        <div className="col-sm-4 card">
          <img className="card-img-top" src="./static/img/shelter2.jpg" alt="The Salvation Army Greater Houston Area Command" />
          <div className="card-body">
            <h4 className="card-title">The Salvation Army Greater Houston Area Command</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City: Houston</li>
              <li className="list-group-item">Type: Emergency</li>
              <li className="list-group-item">Beds: 450</li>
              <li className="list-group-item">Ages: All</li>
              <li className="list-group-item">On-site Medical Clinic? No</li>
            </ul>
            <a href="shelter2.html" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cypress;

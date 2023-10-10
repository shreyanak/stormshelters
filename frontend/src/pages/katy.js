import React, { useEffect, useState } from 'react';
import image from './img/katy.jpg'
import cityJSON from './data/city-data';

function Katy() {
  const [katyData, setKatyData] = useState({});

  useEffect(() => {
    const katyCity = cityJSON.find((city) => city.name === 'Katy');
    setKatyData(katyCity);
  }, []);

  return (
    <div>
      <h1 className="text-center">Katy</h1>

      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Bootstrap carousel */}
        <div style={{ width: '800px', height: '450px' }} id="carouselExampleControls" className="carousel slide active" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img className="d-block w-100" src={image} alt="First slide" width="800px" height="450px" />
            </div>
            {/* <div className="carousel-item">
              <img className="d-block w-100" src="./static/img/katy.jpg" alt="Second slide" width="800px" height="450px" />
            </div>
            <div className="carousel-item active" style={{ borderRadius: '50px' }}>
              <img className="d-block w-100" src="./static/img/katy.jpg" alt="Third slide" width="800px" height="450px" />
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
        <p>Population: {katyData.pop}</p>
        <p>Temperature: {katyData.tmp}</p>
        <p>Homeless Population: {katyData.wind_mph}</p>
        <p>Conditions: {katyData.condition}</p>
        <p>Precipitation: {katyData.precip_in}</p>
        <p>{katyData.about}</p>
      </div>
      <div id="mapEmbed" style={{ justifyContent: 'center', display: 'flex' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55399.76302740111!2d-95.89897096560028!3d29.792524201136327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dff9ae358adf%3A0x17966e0d7c2b1125!2sKaty%2C%20TX!5e0!3m2!1sen!2sus!4v1695785527939!5m2!1sen!2sus"
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
          <img className="card-img-top" src="./static/img/storm2_1.jpg" alt="Houston Hurricane Ivan" />
          <div className="card-body">
            <h4 className="card-title">Hurricane Ivan</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Start Date: September 2004</li>
              <li className="list-group-item">End Date: October 2004</li>
              <li className="list-group-item">Type: Hurricane</li>
              <li className="list-group-item">Code: Emergency Declaration</li>
              <li className="list-group-item">Total FEMA Aid: $115,969,311.20</li>
            </ul>
            <a href="storm2.html" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        <div className="col-sm-4 card">
          <img className="card-img-top" src="./static/img/shelter3.jpeg" alt="Cypress" />
          <div className="card-body">
            <h4 className="card-title">Cornerstone Community</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City: Houston</li>
              <li className="list-group-item">Type: Men's Shelter</li>
              <li className="list-group-item">Beds: 200</li>
              <li className="list-group-item">Ages: 18+</li>
              <li className="list-group-item">On-site Medical Clinic? Yes</li>
            </ul>
            <a href="shelter3.html" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katy;

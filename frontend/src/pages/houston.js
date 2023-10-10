import React, { useEffect, useState } from 'react';
import image from './img/houston.jpg'
import cityData from './data/city-data'

function Houston() {
  const [houstonData, setHoustonData] = useState({});


  useEffect(() => {
    const houstonCity = cityData.find((city) => city.name === 'Houston');
    setHoustonData(houstonCity);
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
      <h1 className="text-center">Houston</h1>
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
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>This is the first image.</h5>
                <p>Copy and paste.</p>
              </div> */}
            </div>
            {/* <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./static/img/houston.jpg"
                alt="Second slide"
                width="800px"
                height="450px"
              />
            </div>
            <div className="carousel-item active" style={{ borderRadius: '50px' }}>
              <img
                className="d-block w-100"
                src="./static/img/houston.jpg"
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
        <p>Population: {houstonData.pop}</p>
        <p>Temperature: {houstonData.tmp}</p>
        <p>Wind: {houstonData.wind_mph}</p>
        <p>Conditions: {houstonData.condition}</p>
        <p>Precipitation: {houstonData.precip_in}</p>
        <p>{houstonData.about}</p>
      </div>
      <div
        id="mapEmbed"
        style={{ justifyContent: 'center', display: 'flex' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.05179655633!2d-95.73094476016284!3d29.817364686924023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1695785373307!5m2!1sen!2sus"
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
          <img className="card-img-top" src="./static/img/shelter1.jpeg" alt="Women & Family Development Center" />
          <div className="card-body">
            <h4 className="card-title">Women & Family Development Center</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City: Houston</li>
              <li className="list-group-item">Type: Women's Shelter</li>
              <li className="list-group-item">Beds: 200</li>
              <li className="list-group-item">Ages: All</li>
              <li className="list-group-item">On-site Medical Clinic? No</li>
            </ul>
            <a href="shelter1.html" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Houston;

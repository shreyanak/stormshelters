import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  
  return (
    <div className="home-container">
      <div className="shelter-card-container">
        {/* Card for Cities */}
        <div className="shelter-card">
          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Cities</h3>
            <p>
              View the weather conditions of your city to see if a storm is in the forecast. Please work.
            </p>
          </div>
          <div className="button-container">
          </div>
        </div>

        {/* Card for Shelters */}
        <div className="shelter-card">

          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Shelters</h3>
            <p>
              View the areas to take refuge in the Houston area. Filter by address to find the most convenient location for you.
            </p>
          </div>
          <div className="button-container">
          </div>
        </div>

        {/* Card for Food and Pharmacies */}
        <div className="shelter-card">
          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Food and Pharmacies</h3>
            <p>
              View the highest-rated locations where you can stock up for the next storm or replenish your supplies while you recover. Also find where you can purchase essential medical supplies closest to you.
            </p>
          </div>
        </div>
      </div>
      
    <Carousel>
      <Carousel.Item>Test</Carousel.Item>
      <Carousel.Item>Test</Carousel.Item>

    </Carousel>

    </div>

  );
}

export default Home;

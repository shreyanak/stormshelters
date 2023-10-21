import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="bg">
        {/* container for splash */}
      </div>

      <div className="shelters-container">
        {/* Card for Cities */}
        <div className="shelter-card">
          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Cities</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec aliquam est. Nullam eu risus sed orci
              ultricies pharetra.
            </p>
          </div>
          <div className="button-container">
            <Link to="/cities">
              <button className="shelter-button">Learn More</button>
            </Link>
          </div>
        </div>

        {/* Card for Shelters */}
        <div className="shelter-card">
          <div className="shelter-image-container">
            {/* Insert image for Shelters */}
          </div>
          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Shelters</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec aliquam est. Nullam eu risus sed orci
              ultricies pharetra.
            </p>
          </div>
          <div className="button-container">
            <Link to="/shelter">
              <button className="shelter-button">Learn More</button>
            </Link>
          </div>
        </div>

        {/* Card for Food and Pharmacies */}
        <div className="shelter-card">
          <div className="shelter-card-body">
            <h3 className="shelter-card-title">Food and Pharmacies</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec aliquam est. Nullam eu risus sed orci
              ultricies pharetra.
            </p>
          </div>
          <div className="button-container">
            <Link to="/pharmacies">
              <button className="shelter-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

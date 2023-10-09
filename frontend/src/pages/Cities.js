import React from 'react';
import './Cities.css';
import houstonPic from './img/houston.jpg';
import katyPic from './img/katy.jpg';
import cypressPic from './img/cypress.jpg';

function Cities() {
  return (
    <div className="cities-container">
      <h1>City Model</h1>
      <p>Total Instances: 3</p>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card-container">
              <div className="card">
                <img className="card-img-top" src={houstonPic} alt="Houston" />
                <div className="card-body">
                  <h4 className="card-title">Houston</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: 2,302,878</li>
                    <li className="list-group-item">Size: 665</li>
                    <li className="list-group-item">Homeless Population: 3200</li>
                    <li className="list-group-item">Disasters: 26</li>
                    <li className="list-group-item">Number of Homeless Shelters: 28</li>
                  </ul>
                  <div className="button-container">
                    <a href="/houston" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={cypressPic} alt="Cypress" />
                <div className="card-body">
                  <h4 className="card-title">Cypress</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: 184,851</li>
                    <li className="list-group-item">Size: 53</li>
                    <li className="list-group-item">Homeless Population: 500</li>
                    <li className="list-group-item">Disasters: 26</li>
                    <li className="list-group-item">Number of Homeless Shelters: 28</li>
                  </ul>
                  <div className="button-container">
                    <a href="/cypress" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={katyPic} alt="Katy" />
                <div className="card-body">
                  <h4 className="card-title">Katy</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: 27,111</li>
                    <li className="list-group-item">Size: 14.6</li>
                    <li className="list-group-item">Homeless Population: 200</li>
                    <li className="list-group-item">Disasters: 26</li>
                    <li className="list-group-item">Number of Homeless Shelters: 6</li>
                  </ul>
                  <div className="button-container">
                    <a href="/katy" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;

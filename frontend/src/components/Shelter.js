import React from 'react';
import '../css/Shelter.css';

function Shelter() {
  return (
    <div className="shelter-container">
      <h1 className="text-center">Shelter & Emergency Relief Model</h1>
      <p>Total Instances: 3</p>
      <div className="container">
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
              <a href="shelter1.html" className="btn btn-primary">Learn more</a>
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
              <a href="shelter2.html" className="btn btn-primary">Learn more</a>
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
              <a href="shelter3.html" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shelter;

import React from 'react';
import './Disasters.css';

function Disasters() {
  return (
    <div className="disasters-container">
      <h1>Disasters</h1>
      <p>Total Instances: 3</p>

      <div className="container">
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
              <a href="storm1.html" className="btn btn-primary">Learn more</a>
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
              <a href="storm2.html" className="btn btn-primary">Learn more</a>
            </div>
          </div>

          <div className="col-sm-4 card">
            <img className="card-img-top" src="./static/img/storm3_1.jpg" alt="Houston Hurricane Rita" />
            <div className="card-body">
              <h4 className="card-title">Hurricane Rita</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Start Date: September 2005</li>
                <li className="list-group-item">End Date: October 2005</li>
                <li className="list-group-item">Type: Hurricane</li>
                <li className="list-group-item">Code: Emergency Declaration</li>
                <li className="list-group-item">Total FEMA Aid: $1,237,011,539.98</li>
              </ul>
              <a href="storm3.html" className="btn btn-primary">Learn more</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Disasters;

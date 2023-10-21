import { useParams } from 'react-router-dom';
import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import '../css/CityDetail.css';

function PharmacyDetail() {
  const { id } = useParams();
  var mainURL = `https://api.stormshelters.me/pharmacies/${id}`;
  var mainreq = new XMLHttpRequest();
  mainreq.open('GET', mainURL, false); 
  mainreq.send(null);
  var pharmacyData = (JSON.parse(mainreq.responseText).pharmacy);

  // Second request
  var newcityreq = new XMLHttpRequest();
  var similarCityURL = `https://api.stormshelters.me/cities/${Math.floor(Math.random() * 23)}`;
  newcityreq.open('GET', similarCityURL, false); 
  newcityreq.send(null);
  var newCityData = (JSON.parse(newcityreq.responseText).city);

  // Third request
  var newpharmreq = new XMLHttpRequest();
  var similarPharmacyURL = `https://api.stormshelters.me/pharmacies/${Math.floor(Math.random() * 70)}`
  newpharmreq.open('GET', similarPharmacyURL, false); 
  newpharmreq.send(null);
  var newPharmData = (JSON.parse(newpharmreq.responseText).pharmacy);

  // Final request
  var newshelterreq = new XMLHttpRequest();
  var similarShelterURL = `https://api.stormshelters.me/shelters/${Math.floor(Math.random() * 12)}`
  newshelterreq.open('GET', similarShelterURL, false); 
  newshelterreq.send(null);
  var newShelterData = (JSON.parse(newshelterreq.responseText).shelter);



  const { name, city, address, distance_m, categories, longitude, latitude } = pharmacyData;

  return (
    <div className="city-detail-container">
      <h1 className="city-title">{name}</h1>
      <div className="image-container">
        <img 
          src="https://www.southernliving.com/thmb/Nm6DnVCFUKM7dQSsqkutPxrNpuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1167434230-1-a6613ae7e7f145a8aa62baa816f8d910.jpg"
          alt="City"
          className="city-image"
        />
      </div>
      <div className="city-detail-card-container">
        <div className="city-detail-card">
          <p>City: {city}</p>
        </div>
        <div className="city-detail-card">
          <p>Address: {address}</p>
        </div>
        <div className="city-detail-card">
          <p>Distance: {distance_m}</p>
        </div>
        <div className="city-detail-card">
          <p>Category: {categories}</p>
        </div>
        
      </div>
      <div className="city-detail-card-container">
        <div className="city-detail-card">
          <p>City: {city}</p>
        </div>
        <div className="city-detail-card">
          <p>Address: {address}</p>
        </div>
        <div className="city-detail-card">
          <p>Distance: {distance_m}</p>
        </div>
        <div className="city-detail-card">
          <p>Category: {categories}</p>
        </div>
        
      </div>

 
    
    </div>

    
  );
}

export default PharmacyDetail;

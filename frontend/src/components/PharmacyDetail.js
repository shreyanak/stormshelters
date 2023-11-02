import { useParams } from 'react-router-dom';
import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';
import '../css/CityDetail.css';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const GOOGLE_API_KEY_MAP = 'AIzaSyAP0iwpFt7n8429SqZpI_N-OXxTC5ywfn8';

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
    <div className="pharmacy-detail-container">
      <h1 className="pharmacy-title">{name}</h1>
      <div className="image-container">
        <img 
          src="https://www.southernliving.com/thmb/Nm6DnVCFUKM7dQSsqkutPxrNpuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1167434230-1-a6613ae7e7f145a8aa62baa816f8d910.jpg"
          alt="Pharmacy"
          className="pharmacy-image"
        />
      </div>
      <div className="pharmacy-detail-card-container">
        <div className="pharmacy-detail-card">
          <p>City: {city}</p>
        </div>
        <div className="pharmacy-detail-card">
          <p>Address: {address}</p>
        </div>
        <div className="pharmacy-detail-card">
          <p>Distance: {distance_m}</p>
        </div>
        <div className="pharmacy-detail-card">
          <p>Category: {categories}</p>
        </div>
        
      </div>

      <div className="map-container">
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY_MAP}>
          <GoogleMap
            mapContainerStyle={{ width: '600px', height: '400px' }}
            zoom={15}
            center={{ lat: latitude, lng: longitude }}
          >
            <Marker
              position={{ lat: latitude, lng: longitude }}
            />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="pharmacy-container-container">
        <h1>Related Instances</h1>
        <div className="pharmacy-card-container">
          <CityCard cityData = {newCityData}/> 
          <PharmacyCard pharmacyData = {newPharmData}/> 
          <ShelterCard shelterData = {newShelterData}/> 
        </div>
      </div>
    </div>
  );
}

export default PharmacyDetail;

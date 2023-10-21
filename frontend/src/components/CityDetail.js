import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';
import CityCard from './CityModel';
import PharmacyCard from './PharmacyModel';
import ShelterCard from './ShelterModel';

function getStuff(url, type) {
  var apiRequest = new XMLHttpRequest();

  console.log(url);
  apiRequest.open('GET', url, false); 
  apiRequest.send(null);
  return  (type);
}
function CityDetail() {
  const { id } = useParams();

  // JRS 10/20 - please leave this code the same.
  // If it needs to be modified, please contact me first.
  var mainURL = `https://api.stormshelters.me/cities/${id}`;
  var cityData = getStuff(mainURL, 'city');

  var similarCityURL = `https://api.stormshelters.me/cities/${23}`;
  var similarCity = getStuff(similarCityURL);
  var similarPharmacyURL = `https://api.stormshelters.me/pharmacies/${5}`
  var similarPharmacy = getStuff(similarPharmacyURL, 'pharmacy');
  console.log(similarCity);
  // const test = PharmacyCard({similarPharmacy});

  var similarShelterURL = `https://api.stormshelters.me/shelters/${23}`
  var similarShelter = getStuff(similarShelterURL, 'shelter');


  const { name, pop, temp_in_f, wind_mph, cond, precip_in } = cityData;

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
          <p>Population: {pop}</p>
        </div>
        <div className="city-detail-card">
          <p>Temperature: {temp_in_f}</p>
        </div>
        <div className="city-detail-card">
          <p>Wind: {wind_mph}</p>
        </div>
        <div className="city-detail-card">
          <p>Conditions: {cond}</p>
        </div>
        <div className="city-detail-card">
          <p>Precipitations: {precip_in}</p>
        </div>
      </div>

      <div class="more-instances">
        <h2>Related Instances</h2>
       
      </div>
    </div>
  );
}

export default CityDetail;

import { useParams } from 'react-router-dom';
import '../css/CityDetail.css';

function PharmacyDetail() {
  const { id } = useParams();
  var apiRequest = new XMLHttpRequest();

  var url = `https://api.stormshelters.me/pharmacies/${ id }`;
  console.log(url);
  apiRequest.open('GET', url, false); 
  apiRequest.send(null);
  var pharmacyData = (JSON.parse(apiRequest.responseText).pharmacy);

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

      <div class="embed">
        <iframe 
          width="300" 
          height="170" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://www.google.com/maps/embed/v1/place
          ?&q=Eiffel+Tower,Paris+France"
        >
        </iframe>
      </div>
      <div class="similar-instances">
        <h2>Explore similar pages</h2>
        
      </div>


    </div>

    
  );
}

export default PharmacyDetail;

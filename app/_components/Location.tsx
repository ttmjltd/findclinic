import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  const [locationLink, setLocationLink] = useState('');
  const [location, setLocation] = useState({ lat: 40.748817, lng: -73.985428 }); // Varsayılan olarak New York, USA

  const handleInputChange = (e) => {
    setLocationLink(e.target.value);
  };

  const handleSubmit = () => {
    // Burada locationLink'i kullanarak konum belirlemesi yapabilirsiniz
    // Örneğin, linkten enlem ve boylam çıkarabilirsiniz (Bu örnek statik bir konum kullanır)
    const newLocation = { lat: 37.7749, lng: -122.4194 }; // Örneğin San Francisco, USA
    setLocation(newLocation);
  };

  return (
    <div>
      <h1>Location</h1>
      <p>Enter your clinic's location link </p>
      <input type="text" value={locationLink} onChange={handleInputChange} />
      <button type='submit' onClick={handleSubmit}>Submit</button>

      {/* Harita */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "800px" }}
          center={location}
          zoom={12}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Location;

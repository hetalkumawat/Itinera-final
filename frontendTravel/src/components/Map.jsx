import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ destination }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  // Default center if no destination is provided
  const defaultCenter = {
    lat: 40.748817, // Example: New York City
    lng: -73.985428,
  };

  // You can customize this to convert the destination into coordinates using a geocoding service

  return (
    <LoadScript googleMapsApiKey="AIzaSyB3Ltxb-CfKULmhIowl_XoN5gI9i-GlRmk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter} // For now, use default center or your logic to set destination
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

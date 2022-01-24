import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MAP_API_KEY as apiKey } from '../../../constants/EnvContant';
import { StyledMapConatiner } from './Location.styled';

export default function LocationMap() {
  const mapStyles = {
    height: '30vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const location = {
    lat: 41.3954,
    lng: 2.162,
  };

  return (
    <StyledMapConatiner>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} disableDefaultUI>
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </StyledMapConatiner>
  );
}

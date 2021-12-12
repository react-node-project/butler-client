import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, IconButton, Input, InputLabel, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MAP_API_KEY } from '../../constants/EnvContant';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const DEFAULT_ZOOM_SIZE = 15;

const MarkLocationModal = forwardRef(({ searchText, onClose, onChangeLocationText }, refs) => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  });

  const [{ lat, lng }, setLocation] = useState({ lat: 0, lng: 0 });
  const [makerLocation, setMarkerLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds({
      lat,
      lng,
    });

    if (map && bounds) {
      map.fitBounds(bounds);
      map.setZoom(DEFAULT_ZOOM_SIZE);
      const { lat, lng } = map.getCenter();

      setMarkerLocation({
        lat: lat(),
        lng: lng(),
      });
    }
  }, [lat, lng]);

  const handleLocation = () => {
    const { lat, lng } = map.getCenter();

    setMarkerLocation({ lat: lat(), lng: lng() });
  };

  const onLoad = useCallback(function callback(map) {
    const placesService = new window.google.maps.places.PlacesService(map);

    function findPlaces(places) {
      if (!places.length) return;

      setLocation({
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
      });
    }

    placesService.textSearch({ query: searchText }, findPlaces);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (!isLoaded) return null;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
      <Card sx={{ width: '40rem' }}>
        <CardContent>
          <Box sx={{ display: 'flex', width: '40rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>Mark your location</Typography>
              <Typography>We'll show your nearby shop.</Typography>
            </Box>
            <div>
              <IconButton aria-label="close-button" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </Box>
          <InputLabel>Drag the pin to your exact location</InputLabel>
          <Input disabled value={searchText} />
          <GoogleMap
            onDragEnd={handleLocation}
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker
              position={{
                lat: makerLocation.lat,
                lng: makerLocation.lng,
              }}
              label={{
                text: 'Move the pin to your location',
                fontsize: '15px',
                fontWeight: 'bolder',
                color: 'blue',
              }}
            />
          </GoogleMap>

          <Button>Mark Location</Button>
        </CardContent>
      </Card>
    </Box>
  );
});

export default MarkLocationModal;

import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton, Input, InputLabel, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { SendLocationProps } from '@store/service/location.api';
import { MAP_API_KEY } from '../../../constants/EnvContant';

import Styled from './markLocationModal.styled';
import './marker.css';

interface Props {
  searchText: string;
  onClose(): void;
  changeLocationText(changeText: string): void;
  sendLocation({ location: { lat, lng }, address }: SendLocationProps): void;
}

const containerStyle = {
  width: '100%',
  height: '100%',
};
const DEFAULT_ZOOM_SIZE = 18;

const MarkLocationModal = forwardRef(({ sendLocation, searchText, onClose, changeLocationText }: Props, refs) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  });

  const [{ lat, lng }, setLocation] = useState({ lat: 0, lng: 0 });
  const [makerLocation, setMarkerLocation] = useState({ lat: 0, lng: 0 });

  const searchGeocoder = async ({ lat, lng }: { lat: number; lng: number }) => {
    const geocoder = new window.google.maps.Geocoder();
    const { results } = await geocoder.geocode({
      location: {
        lat,
        lng,
      },
    });
    return results[0].formatted_address;
  };

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds({
      lat,
      lng,
    });

    if (map && bounds) {
      map.fitBounds(bounds);
      map.setZoom(DEFAULT_ZOOM_SIZE);
      const center = map.getCenter();

      const lat = center?.lat() ?? 0;
      const lng = center?.lng() ?? 0;

      searchGeocoder({ lat, lng }).then((address) => changeLocationText(address));

      setMarkerLocation({
        lat,
        lng,
      });
    }
  }, [lat, lng]);

  const handleLocation = () => {
    if (!map) return;
    const center = map.getCenter();
    const lat = center?.lat() ?? 0;
    const lng = center?.lng() ?? 0;
    searchGeocoder({ lat, lng }).then((address) => changeLocationText(address));

    setMarkerLocation({
      lat: center?.lat() ?? 0,
      lng: center?.lng() ?? 0,
    });
  };

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const placesService = new google.maps.places.PlacesService(map);

    function findPlaces(places: google.maps.places.PlaceResult[] | null) {
      if (!places || !places.length) return;

      setLocation({
        lat: places[0].geometry?.location?.lat() ?? 0,
        lng: places[0].geometry?.location?.lng() ?? 0,
      });
    }

    placesService.textSearch({ query: searchText }, findPlaces);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const sendAddressSearch = () => {
    onClose();
    sendLocation({
      address: searchText,
      location: { lat: makerLocation.lat, lng: makerLocation.lng },
    });
  };

  if (!isLoaded) return null;

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <Box className="title">
            <Typography sx={{ fontWeight: 'bold' }}>Mark your location</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>We'll show your nearby shop.</Typography>
          </Box>
          <Box className="close-button-wrapper">
            <IconButton aria-label="close-button" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Styled.Header>
        <Styled.Main>
          <InputLabel>Drag the pin to your exact location</InputLabel>
          <Input disabled value={searchText} />
          <GoogleMap
            onDragEnd={handleLocation}
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              streetViewControl: false,
              scrollwheel: false,
              fullscreenControl: false,
            }}
          >
            <Marker
              position={{
                lat: makerLocation.lat,
                lng: makerLocation.lng,
              }}
              label={{
                text: 'Move the pin to your location',
                fontWeight: 'bolder',
                color: '#ffff',
                className: 'butler-map-marker',
              }}
            />
          </GoogleMap>
        </Styled.Main>
        <Styled.Footer>
          <Button variant="contained" onClick={sendAddressSearch}>
            Mark Location
          </Button>
        </Styled.Footer>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export default MarkLocationModal;

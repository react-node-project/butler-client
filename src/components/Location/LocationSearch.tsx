import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlacesWidget } from 'react-google-autocomplete';

import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent, IconButton, Modal, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { MAP_API_KEY as apiKey } from '../../constants/EnvContant';
import { PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { SendLocationProps, useSendLocationMutation } from '../../store/service/location';
import { StyledLink } from '../../styles/element.styled';

import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import MarkLocationModal from './MarkLocationModal/MarkLocationModal';
import DisabledLocationModal from './InactiveLocationModal/InactiveLocationModal';

interface DefinedServerError {
  code: number;
  message: number;
}

const LocationSearch = () => {
  let navigate = useNavigate();
  let _location = { lat: 0, lng: 0 };
  const { country } = useSelector((state: RootState) => state.config);

  const [_sendLocation, sendLocationResult] = useSendLocationMutation({});
  const [searchText, setSearchText] = useState('');

  const [isShow, setIsShow] = useState({
    markLocationModal: false,
    disabledAddressModal: true,
  });

  const sendLocation = ({ address, location }: SendLocationProps) => {
    _location = { ...location };
    _sendLocation({ address, location });
  };
  const onPlaceSelected = (places: google.maps.places.PlaceResult) => {
    if (!places || !places.formatted_address) return;

    setSearchText(places.formatted_address);
    sendLocation({
      address: places.formatted_address,
      location: {
        lat: places.geometry?.location?.lat() || 0,
        lng: places.geometry?.location?.lng() || 0,
      },
    });
  };

  const { ref } = usePlacesWidget({
    apiKey,
    onPlaceSelected,
    libraries: ['places', 'geometry'],
    options: {
      componentRestrictions: {
        country,
      },
    },
  });

  const showMarkLocationModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }
    setIsShow({ disabledAddressModal: false, markLocationModal: true });
  };
  const handleClose = () => setIsShow({ disabledAddressModal: false, markLocationModal: false });

  const handleCurrentLocation = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { coords } = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const geocoder = new window.google.maps.Geocoder();
    const { results } = await geocoder.geocode({
      location: {
        lat: coords.latitude,
        lng: coords.longitude,
      },
    });

    setSearchText(results[0].formatted_address);
    setIsShow({ disabledAddressModal: false, markLocationModal: true });
  };

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const onChangeLocationText = (text: string) => setSearchText(text);
  const handleSendLocationResult = () => {
    const { isError, isSuccess, error } = sendLocationResult;

    if (isSuccess) {
      navigate(PATH_USER_SIGNIN);
      return;
    }

    if (isError) {
      if (!error) return;

      if ('data' in error) {
        const err = error as FetchBaseQueryError;
        const defineServerError = err.data as DefinedServerError;
        if (defineServerError.code === 2000) {
          setIsShow({ disabledAddressModal: true, markLocationModal: false });
          return;
        }
      }
    }
  };

  useEffect(() => {
    handleSendLocationResult();
  }, [sendLocationResult]);

  return (
    <>
      <Card
        sx={{ width: '100%', display: 'flex', justifyContent: 'flexStart', textAlign: 'start', marginBottom: '1rem' }}
      >
        <CardContent sx={{ width: '100%' }}>
          <p>Enter your address to find local restaurants</p>
          <div>
            <TextField
              sx={{ width: '350px' }}
              size={'small'}
              inputRef={ref}
              value={searchText}
              onChange={handleSearchText}
              variant="outlined"
              placeholder="Enter your full address"
            />
            <IconButton name="useCurrentLocation" title="useCurrentLocation" onClick={handleCurrentLocation}>
              <SendIcon fontSize="inherit" />
            </IconButton>

            <LoadingButton
              loading={sendLocationResult.isLoading}
              variant="contained"
              name="searchLocation"
              onClick={showMarkLocationModal}
            >
              Search
            </LoadingButton>
          </div>

          <div style={{ padding: '5px' }}>
            <StyledLink to={PATH_USER_SIGNIN}>Log in </StyledLink>
            for your recent address
          </div>
        </CardContent>
      </Card>
      <Modal
        open={isShow.markLocationModal}
        children={
          <MarkLocationModal
            sendLocation={sendLocation}
            searchText={searchText}
            onClose={handleClose}
            changeLocationText={onChangeLocationText}
          />
        }
        onClose={handleClose}
      />

      <Modal
        open={isShow.disabledAddressModal}
        children={<DisabledLocationModal location={_location} onClose={handleClose} />}
        onClose={handleClose}
      />
    </>
  );
};

export default LocationSearch;

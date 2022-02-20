import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlacesWidget } from 'react-google-autocomplete';

import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, OutlinedInput, IconButton, Modal, InputAdornment, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { MAP_API_KEY as apiKey } from '../../constants/EnvContant';
import { PATH_RESTAURANTS, PATH_USER_LOGIN } from '../../constants/PathConstants';
import { SendLocationProps, useSendLocationMutation } from '@store/service/location.api';
import { StyledLink } from '../../styles/element.styled';

import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import MarkLocationModal from './MarkLocationModal/MarkLocationModal';
import DisabledLocationModal from './InactiveLocationModal/InactiveLocationModal';
import { StyledBox } from './location.styled';

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
    disabledAddressModal: false,
  });

  const sendLocation = async ({ address, location }: SendLocationProps) => {
    _location = { ...location };
    try {
      await _sendLocation({ address, location }).unwrap();
      navigate(`${PATH_RESTAURANTS}?latitude=${location.lat}&longitude=${location.lng}&address=${address}`);
    } catch (error) {
      const err = error as FetchBaseQueryError;

      if ('data' in err) {
        const defineServerError = err.data as DefinedServerError;
        if (defineServerError.code === 2000) {
          setIsShow({ disabledAddressModal: true, markLocationModal: false });
          return;
        }
      }
    }
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

  return (
    <>
      <StyledBox>
        <Typography pb={1} gutterBottom variant="h6">
          Enter address to find local restuarants
        </Typography>
        <Stack direction="row" spacing={1}>
          <OutlinedInput
            size={'small'}
            inputRef={ref}
            value={searchText}
            onChange={handleSearchText}
            placeholder="Enter your address"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className="current"
                  name="useCurrentLocation"
                  title="useCurrentLocation"
                  onClick={handleCurrentLocation}
                >
                  <SendIcon fontSize="inherit" />
                </IconButton>
              </InputAdornment>
            }
          />

          <LoadingButton
            loading={sendLocationResult.isLoading}
            variant="contained"
            name="searchLocation"
            onClick={showMarkLocationModal}
          >
            Search
          </LoadingButton>
        </Stack>
        <div>
          <StyledLink to={PATH_USER_LOGIN}>
            <Button mt={2} className="login">
              Login
            </Button>
          </StyledLink>
        </div>
      </StyledBox>
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

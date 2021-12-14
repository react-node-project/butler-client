import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlacesWidget } from 'react-google-autocomplete';

import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent, IconButton, Modal, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { MAP_API_KEY as apiKey } from '../../constants/EnvContant';
import { PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { useSendAddressMutation } from '../../store/service/address';
import { StyledLink } from '../../styles/element.styled';

import MarkLocationModal from './MarkLocationModal';
import DisabledAddressModal from './DisabledAddressModal';

const AddressSearch = () => {
  let navigate = useNavigate();
  const [sendAddress, sendAddressResult] = useSendAddressMutation({});

  const [searchText, setSearchText] = useState('');
  const [isShow, setIsShow] = useState({
    markLocationModal: false,
    disabledAddressModal: false,
  });
  const onPlaceSelected = (placed) => {
    setSearchText(placed.formatted_address);

    sendAddress({
      address: placed.formatted_address,
      location: {
        lat: placed.geometry.location.lat(),
        lng: placed.geometry.location.lng(),
      },
    });
  };

  const { ref } = usePlacesWidget({ apiKey, onPlaceSelected });

  const showMarkLocationModal = async (e) => {
    e.preventDefault();
    if (!searchText) {
      return;
    }
    setIsShow({ disabledAddressModal: false, markLocationModal: true });
  };
  const handleClose = (e) => {
    setIsShow({ disabledAddressModal: false, markLocationModal: false });
  };

  const handleSearchText = (e) => setSearchText(e.target.value);
  const onChangedLocationText = (text) => setSearchText(text);
  const handleSendAddressResult = () => {
    const { isError, isSuccess, error } = sendAddressResult;

    if (isSuccess) {
      navigate(PATH_USER_SIGNIN);
      return;
    }

    if (isError) {
      if (error.data.code === 2000) {
        setIsShow({ disabledAddressModal: true, markLocationModal: false });
        return;
      }
    }
  };

  useEffect(() => {
    handleSendAddressResult();
  }, [sendAddressResult]);

  return (
    <>
      <Card sx={{ width: '400px', display: 'flex', justifyContent: 'center' }}>
        <CardContent>
          <p>Enter your address to find local restaurants</p>
          <div>
            <TextField
              size={'small'}
              inputRef={ref}
              value={searchText}
              onChange={handleSearchText}
              variant="outlined"
              placeholder="Enter your full address"
            />
            <IconButton name="useCurrentLocation" title="useCurrentLocation">
              <SendIcon fontSize="inherit" />
            </IconButton>

            <LoadingButton
              loading={sendAddressResult.isLoading}
              variant="contained"
              name="searchLocation"
              onClick={showMarkLocationModal}
            >
              Search
            </LoadingButton>
          </div>

          <div>
            <StyledLink to={PATH_USER_SIGNIN}>Log in </StyledLink>
            for your recent address
          </div>
        </CardContent>
      </Card>
      <Modal
        open={isShow.markLocationModal}
        children={
          <MarkLocationModal
            searchText={searchText}
            onClose={handleClose}
            onChangeLocationText={onChangedLocationText}
          />
        }
        onClose={handleClose}
      />

      <Modal open={isShow.disabledAddressModal} children={<DisabledAddressModal />} onClose={handleClose} />
    </>
  );
};

export default AddressSearch;

import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, Card, CardContent, IconButton, Modal, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { PATH_USER_SIGNIN } from '../../constants/PathConstants';
import { usePlacesWidget } from 'react-google-autocomplete';
import MarkLocationModal from './MarkLocationModal';
import { MAP_API_KEY } from '../../constants/EnvContant';

const AddressSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [isShow, setIsShow] = useState({
    markLocationModal: false,
    disabledAddressModal: false,
  });

  useEffect(() => {
    // console.log(isLoaded);
  }, []);

  const { ref } = usePlacesWidget({
    apiKey: MAP_API_KEY,
    onPlaceSelected: (place) => console.log(place),
  });

  const showMarkLocationModal = async (e) => {
    e.preventDefault();
    if (!searchText) {
      return;
    }

    setIsShow((prevState) => ({ disabledAddressModal: false, markLocationModal: true }));
  };
  const handleClose = (e) => {
    setIsShow((prevState) => ({ disabledAddressModal: prevState.disabledAddressModal, markLocationModal: false }));
  };

  const handleSearchText = (e) => setSearchText(e.target.value);
  const onChangedLocationText = (text) => setSearchText(text);

  return (
    <>
      <Card sx={{ width: '400px' }}>
        <CardContent sx={{ width: '500px' }}>
          <p>Enter your address to find local restaurants</p>
          <TextField
            inputRef={ref}
            value={searchText}
            onChange={handleSearchText}
            variant="outlined"
            placeholder="Enter your full address"
          />
          <IconButton name="useCurrentLocation" title="useCurrentLocation">
            <SendIcon fontSize="inherit" />
          </IconButton>
          <Button variant="contained" name="searchLocation" onClick={showMarkLocationModal}>
            Search
          </Button>
          <div>
            <Link to={PATH_USER_SIGNIN}>Log in</Link> for your recent addresse
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
    </>
  );
};

export default AddressSearch;

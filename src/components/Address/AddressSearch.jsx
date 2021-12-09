import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, Card, CardContent, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { PATH_USER_SIGNIN } from '../../constants/PathConstants';

const AddressSearch = () => {
  return (
    <Card sx={{ width: '440px' }}>
      <CardContent>
        <p>Enter your address to find local restaurants</p>
        <TextField variant="outlined" placeholder="Enter your full address" />
        <IconButton name="useCurrentLocation" title="useCurrentLocation">
          <SendIcon fontSize="inherit" />
        </IconButton>
        <Button variant="contained" name="searchLocation">
          Search
        </Button>
        <div>
          <Link to={PATH_USER_SIGNIN}>Log in</Link> for your recent addresse
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressSearch;

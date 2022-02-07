import { addressType } from '@store/features/paymentsSlice';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Box, Typography } from '@mui/material';

export type AddressItemProps = {
  address: addressType | null;
};

const AddressItem = (props: AddressItemProps) => {
  const { address } = props;

  if (!address)
    return (
      <>
        <AddIcon /> Add a new address
      </>
    );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'rgb(187, 187, 187)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ marginRight: '5px' }}>
          <LocationOnIcon />
        </Box>
        <Box>
          <Typography>{address.streetAddress}</Typography>
          <Typography>{address.city + address.postcode}</Typography>
          <Typography>{address.phoneNumber}</Typography>
        </Box>
      </Box>
      <Button>change</Button>
    </Box>
  );
};

export default AddressItem;

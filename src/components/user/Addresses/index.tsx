import React from 'react';
import { theme } from '../../../styles/theme';
import { StyledGrid } from '../../../styles/sharedElement.styled';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useDeleteAddressMutation, useGetAddressQuery } from '@store/service/addess.api';
import { AddressInfo } from '../../../type/address.type';
import { StyledUserGrid } from '@components/user/user.styled';

type Props = {};

const Address = ({ city, id, message, phoneNumber, streetAddress, postcode, apartment }: AddressInfo) => {
  const { refetch } = useGetAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();

  const onDeleteAddress = async () => {
    deleteAddress(id).unwrap().then(refetch).catch();
  };

  return (
    <>
      <StyledUserGrid item>
        <div className="content-row">
          <Typography>{streetAddress}</Typography>
          <Typography>{apartment}</Typography>
          <Typography>
            {city} {postcode}
          </Typography>
          <Typography>{phoneNumber}</Typography>
          {message && <Typography>{message}</Typography>}
        </div>
        <div className="button-row">
          <Button onClick={onDeleteAddress}>Delete</Button>
        </div>
      </StyledUserGrid>
    </>
  );
};

const EmptyBox = () => <Box sx={{ m: 5 }}>Oh no! There are no Addresses Here :-( </Box>;

const Addresses = (props: Props) => {
  const { data } = useGetAddressQuery();

  return (
    <StyledGrid
      height="auto"
      sx={{ m: 2, p: 2 }}
      style={{ backgroundColor: theme.palette.primary.contrastText, width: '60%' }}
    >
      <Box className="header" sx={{ m: 1, p: 1 }}>
        <Typography textAlign="start" fontSize="1.5rem">
          Addresses
        </Typography>
      </Box>
      <Divider />
      <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'center', width: '100%', pt: 2 }}>
        {!data || data.addresses.length < 1 ? <EmptyBox /> : null}
        {data?.addresses.map((value, index) => (
          <Address {...value} key={index} />
        ))}
      </Grid>
    </StyledGrid>
  );
};

export default Addresses;

import { Box, Button } from '@mui/material';
import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import PaypalButton from './PaypalButton';

export type OrderButtonProps = {};

const OrderButton = (props: OrderButtonProps) => {
  const address = useSelector((state: RootState) => state.payments.address);
  const method = useSelector((state: RootState) => state.payments.method);

  const onClickOrder = () => {
    // setIsLoading(true);
    // alert(method);
  };

  return (
    <Box>
      {method === 'paypal' ? (
        <PaypalButton amount="0.1" currency="GBP" onClick={onClickOrder} />
      ) : (
        <Button variant="contained" fullWidth disabled={!address}>
          Place delivery order
        </Button>
      )}
    </Box>
  );
};

export default OrderButton;

import { Button } from '@mui/material';
import React from 'react';

export type OrderButtonProps = {};

const OrderButton = (props: OrderButtonProps) => {
  return (
    <Button variant="contained" fullWidth disabled>
      Place delivery order
    </Button>
  );
};

export default OrderButton;

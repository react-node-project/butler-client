import { Box, Button } from '@mui/material';
import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import PaypalButton from './PaypalButton';

export type OrderButtonProps = {};

const OrderButton = (props: OrderButtonProps) => {
  const address = useSelector((state: RootState) => state.payments.address);
  // const method = useSelector((state: RootState) => state.payments.method);

  const onClickOrder = () => {
    console.log('aaa');
    // setIsLoading(true);
    // alert(method);
  };

  return (
    <Box>
      <Button variant="contained" fullWidth disabled={!address}>
        Place delivery order
        {/* TODO: 버튼 커스텀 가능하면 수정 */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, opacity: 0 }}>
          <PaypalButton amount="10.0" currency="GBP" onClick={onClickOrder} />
        </div>
      </Button>
    </Box>
  );
};

export default OrderButton;

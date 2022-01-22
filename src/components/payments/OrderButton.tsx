import { Button } from '@mui/material';
import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import PaypalButton from './PaypalButton';

export type OrderButtonProps = {};

const OrderButton = (props: OrderButtonProps) => {
  const address = useSelector((state: RootState) => state.payments.address);
  // const method = useSelector((state: RootState) => state.payments.method);

  const onClickOrder = () => {
    // alert(method);
  };

  return (
    <Button variant="contained" fullWidth disabled={!address} onClick={onClickOrder}>
      Place delivery order
      {/* TODO: 버튼 커스텀 가능하면 수정 */}
      <div style={{ width: 0, height: 0, opacity: 0 }}>
        <PaypalButton amount="10.0" onClick={onClickOrder} currency="GBP" />
      </div>
    </Button>
  );
};

export default OrderButton;

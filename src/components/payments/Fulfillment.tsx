import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { StyledBorderBox } from './Common.styled';
import { StyledTitle } from './Fulfillment.styled';

export type FulfillmentProps = {};

const Fulfillment = (props: FulfillmentProps) => {
  const fulfillment = useSelector((state: RootState) => state.payments.fulfillment);

  return (
    <div>
      <StyledTitle>Fulfillment details</StyledTitle>
      <StyledBorderBox>
        <DeliveryDiningIcon sx={{ marginRight: '5px' }} />
        Deliver in {fulfillment} min
      </StyledBorderBox>
    </div>
  );
};

export default Fulfillment;

import React from 'react';
import { Address, Cutlery, Fulfillment, OrderButton, Payment, Title } from '@components/payments';
import { Grid } from '@mui/material';
import { StyledGrid } from './PaymentsPage.styled';

export type PaymentsPageProps = {};

const PaymentsPage = (props: PaymentsPageProps) => {
  return (
    <StyledGrid container spacing={2}>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={7.5}>
        <Fulfillment />
        <Address />
        <Payment />
        <Cutlery />
        <OrderButton />
      </Grid>
      {/* //TODO: basket area */}
      <Grid item xs={4.5}>
        basket
      </Grid>
    </StyledGrid>
  );
};

export default PaymentsPage;

import RestaurantsContents from '@components/restaurants';
import LeftNavBar from '@components/restaurants/LeftNavBar';
import React from 'react';
import { Grid } from '@mui/material';
import { StyledLayout } from './restaurants.styled';

export type RestaurantsPageProps = {};

const RestaurantsPage = (props: RestaurantsPageProps) => {
  return (
    <StyledLayout container wrap="nowrap">
      <Grid item>
        <LeftNavBar />
      </Grid>
      <Grid item flex="3" sx={{ minWidth: 0 }}>
        <RestaurantsContents />
      </Grid>
    </StyledLayout>
  );
};

export default RestaurantsPage;

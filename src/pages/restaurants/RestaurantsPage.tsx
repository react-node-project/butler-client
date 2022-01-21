import RestaurantsContents from '@components/restaurants';
import LeftNavBar from '@components/restaurants/LeftNavBar';
import React from 'react';
import { Grid } from '@mui/material';
import { StyledLayout } from './RestaurantsPage.styled';
import { useLocation } from 'react-router-dom';
import { getQueryParams } from './../../util/utills';

export type RestaurantsPageProps = {};

const RestaurantsPage = (props: RestaurantsPageProps) => {
  const location = useLocation();
  const filter = getQueryParams(location.search, 'filter') ?? 'delivery';

  return (
    <StyledLayout container wrap="nowrap">
      <Grid item>
        <LeftNavBar filter={filter} />
      </Grid>
      <Grid item flex="3" sx={{ minWidth: 0 }}>
        <RestaurantsContents filter={filter} />
      </Grid>
    </StyledLayout>
  );
};

export default RestaurantsPage;

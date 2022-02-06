import RestaurantsContents from '@components/restaurants';
import LeftNavBar from '@components/restaurants/LeftNavBar';
import React from 'react';
import { Grid } from '@mui/material';
import { StyledLayout } from './RestaurantsPage.styled';
import { useLocation } from 'react-router-dom';
import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import NotFoundPage from './../../config/route/NotFoundPage';

export type RestaurantsPageProps = {};

const RestaurantsPage = (props: RestaurantsPageProps) => {
  const location = useLocation();
  const URLSearch = new URLSearchParams(location.search);
  const filter = (URLSearch.get('filter') ?? 'delivery') as LeftNavModalProps['filter'];
  const latitude = URLSearch.get('latitude') as string;
  const longitude = URLSearch.get('longitude') as string;

  if (!latitude || !longitude) {
    return <NotFoundPage />;
  }

  return (
    <StyledLayout container wrap="nowrap">
      <Grid item>
        <LeftNavBar filter={filter} latitude={latitude} longitude={longitude} />
      </Grid>
      <Grid item flex="3" sx={{ minWidth: 0 }}>
        <RestaurantsContents filter={filter} />
      </Grid>
    </StyledLayout>
  );
};

export default RestaurantsPage;

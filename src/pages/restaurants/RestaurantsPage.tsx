import RestaurantsContents from '@components/restaurants/RestaurantsContents';
import LeftNavBar from '@components/restaurants/LeftNavBar';
import React from 'react';
import { Grid } from '@mui/material';
import { StyledLayout } from './RestaurantsPage.styled';
import { useLocation } from 'react-router-dom';
import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import NotFoundPage from './../../config/route/NotFoundPage';

export type RestaurantsPageProps = {};

export type locationType = {
  latitude?: string;
  longitude?: string;
  cityName?: string;
};

const RestaurantsPage = (props: RestaurantsPageProps) => {
  const _location = useLocation();
  const URLSearch = new URLSearchParams(_location.search);
  const filter = (URLSearch.get('filter') ?? 'delivery') as LeftNavModalProps['filter'];
  const location: locationType = {
    latitude: URLSearch.get('latitude') ?? undefined,
    longitude: URLSearch.get('longitude') ?? undefined,
    cityName: URLSearch.get('address') ?? undefined,
  };

  if (!location.latitude || !location.longitude) {
    return <NotFoundPage />;
  }

  return (
    <StyledLayout container wrap="nowrap">
      <Grid item>
        <LeftNavBar
          filter={filter}
          latitude={location.latitude}
          longitude={location.longitude}
          cityName={location.cityName}
        />
      </Grid>
      <Grid item flex="3" sx={{ minWidth: 0 }}>
        <RestaurantsContents filter={filter} cityName={location.cityName} />
      </Grid>
    </StyledLayout>
  );
};

export default RestaurantsPage;

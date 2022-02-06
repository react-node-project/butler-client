import RestaurantsContents from '@components/restaurants';
import LeftNavBar from '@components/restaurants/LeftNavBar';
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { StyledLayout } from './RestaurantsPage.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';

export type RestaurantsPageProps = {};

const RestaurantsPage = (props: RestaurantsPageProps) => {
  const location = useLocation();
  const URLSearch = new URLSearchParams(location.search);
  const filter = (URLSearch.get('filter') ?? 'delivery') as LeftNavModalProps['filter'];
  const latitude = URLSearch.get('latitude') as string;
  const longitude = URLSearch.get('longitude') as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (!latitude || !longitude) {
      navigate('/');
    }
  }, [latitude, longitude]);

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

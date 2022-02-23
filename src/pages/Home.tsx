import React from 'react';
import ThemeMenu from '../components/Landing/ThemeMenu';
import { Container, Grid, Paper } from '@mui/material';
import LocationSearch from '@components/location/LocationSearch';
import Footer from '../components/footer';
import Categories from '@components/Landing/Categories';

export default function Home() {
  return (
    <div>
      <Container>
        <Grid m={2} container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <LocationSearch />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Categories />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ThemeMenu />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

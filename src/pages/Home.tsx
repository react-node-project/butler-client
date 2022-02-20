import React from 'react';
import ThemeMenu from '../components/Landing/ThemeMenu';
import { Container, Grid, Paper } from '@mui/material';
import LocationSearch from '@components/location/LocationSearch';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Container>
        <Grid m={2} container spacing={1}>
          <Paper sx={{ px: 5, py: 5 }}>
            <LocationSearch />
            <ThemeMenu />
            <Footer />
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

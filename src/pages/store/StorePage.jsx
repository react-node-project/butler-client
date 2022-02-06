import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { StyledGrid } from '../../styles/element.styled';
import RestaurantDetail from './../../components/restaurantDetails/index'; //
import Cart from '../../components/restaurantDetails/Cart/index';

export default function StorePage() {
  return (
    <>
      {/* <Box sx={{ margin: 0, background: '#eee' }}>
        <Container>
          <Grid m={2} container spacing={1}>
            <StyledGrid item xs={12} md={8}>
              <RestaurantDetail />
            </StyledGrid>
            <StyledGrid item xs={12} md={4}>
              <Cart />
            </StyledGrid>
          </Grid>
        </Container>
      </Box> */}
      {/* TODO : Layout Refactoring  */}
      <RestaurantDetail />
    </>
  );
}

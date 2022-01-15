import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { StyledGrid } from '../../styles/element.styled';
import RestaurantDetail from './../../components/restaurantDetails/index'; //
import Basket from './../../components/restaurantDetails/Basket/index';

export default function StorePage() {
  return (
    <>
      <Container>
        <RestaurantDetail /> 
      </Container>
      <Box sx={{ margin: 0, background: '#eee' }}>
        <Container>
          <Grid m={2} container spacing={1}>
            <StyledGrid item xs={12} md={8}>
              <p>All Menu</p>
            </StyledGrid>
            <StyledGrid item xs={12} md={4}>
              <Basket />
            </StyledGrid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

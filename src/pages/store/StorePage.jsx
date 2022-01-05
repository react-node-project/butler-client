import React from 'react';
import ShopDetail from '../../components/ShopDetails/index';
import Basket from './../../components/ShopDetails/Basket/index';
import { Container, Box, Grid } from '@mui/material';
import { StyledGrid } from '../../styles/element.styled';

export default function StorePage() {
  return (
    <>
      <Container>
        <ShopDetail />
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

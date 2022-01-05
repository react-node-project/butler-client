import React from 'react';
import { StyledPaper } from '../../styles/element.styled';
import ShopDetail from '../../components/ShopDetails/index';

export default function StorePage() {
  return <>
  <Grid container spacing={2}>
  <Grid item sx={12} sm={8} md={8}>
  <StyledPaper>
        <ShopDetail />
    </StyledPaper>
    </Grid>
    <Grid item sx={12} sm={8} md={4}><h3>Shopping Basket</h3></Grid>
    </Grid>
    </>
}

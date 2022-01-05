import React from 'react';
import ShopDetail from '../../components/ShopDetails/index';
import { Container,Box,Grid} from '@mui/material';
import {StyledGrid} from "../../styles/element.styled";

export default function StorePage() {
  return (
    <>
<Container>
<ShopDetail />
</Container>
<Box sx={{margin:0,background:"#eee"}}>
  <Grid m={2} container spacing={1}>
  {/* <StyledDiv flex={2} width={"70%"}> */}
  <StyledGrid item sx={12} md={8}> 
  <p>All Menu</p>
  </StyledGrid>
  {/* </StyledDiv> */}
  {/* <StyledDiv flex={1} width={"30%"}> */}
  <StyledGrid item sx={12} md={4}> 
  <p>Basket</p>
  </StyledGrid>
  {/* </StyledDiv> */}
  </Grid>
</Box>

    </>
  );
}

// responsive => StyledDiv => 100%

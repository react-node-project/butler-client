// import { Button } from '@mui/material';
import React from 'react';
// import { StyledContainer } from '../styles/element.styled';
import ThemeMenu from './../components/Landing/ThemeMenu';
import { Paper,Container,Grid } from '@mui/material';
import LocationSearch from '@components/location/LocationSearch';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Container>
      {/* <StyledContainer maxWidth="xs"> */}
      <Grid m={2} container spacing={1}>
        <Paper sx={{ px: 5, py: 5 }}>
          <LocationSearch />
          <ThemeMenu />
          <Footer />
        </Paper>
        </Grid>
      {/* </StyledContainer> */}
      </Container>
    </div>
  );
}


{/* <Container>
<Box sx={{ margin: 0, background: '#eee' }}>

    <StyledGrid item xs={12} md={4}>
      <p>Order History</p>
    </StyledGrid>
    <StyledGrid item xs={12} md={8}>
        <Box style={{border:"1px solid salmon"}}>I'm a box</Box>
    </StyledGrid>
  </Grid>
</Box>
</Container> */}
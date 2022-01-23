import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { StyledGrid } from '../../styles/element.styled';

export default function HistoryPage() {
  return (
    <Container>
      <Box sx={{ margin: 0, background: '#eee' }}>
        <Grid m={2} container spacing={1}>
          <StyledGrid item xs={12} md={4}>
            <p>Order History</p>
          </StyledGrid>
          <StyledGrid item xs={12} md={8}>
              <Box style={{border:"1px solid salmon"}}>I'm a box</Box>
          </StyledGrid>
        </Grid>
      </Box>
    </Container>
  );
}

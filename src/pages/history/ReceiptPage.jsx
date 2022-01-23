import React from 'react';
import { Container, Box, Grid, Card, Avatar, Button, Typography } from '@mui/material';
import { StyledGrid } from '../../styles/sharedElement.styled';

export default function ReceiptPage() {
  return (
    <Container>
      <Box>
        <Grid container spacing={1}>
          <StyledGrid pt={2} item xs={12} md={12} Height={'5vh'}>
            <Typography variant="subtitle1">Your meal from</Typography>
            <h2>My Receipt</h2>
          </StyledGrid>

          {/* order history list */}
          <StyledGrid item xs={12} md={12} height={'80vh'}>
            <Box></Box>
          </StyledGrid>
        </Grid>
      </Box>
    </Container>
  );
}

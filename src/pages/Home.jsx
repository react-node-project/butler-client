// import { Button } from '@mui/material';
import React from 'react';
import { StyledContainer } from '../styles/element.styled';
import ThemeMenu from './../components/Landing/ThemeMenu';
import { Paper } from '@mui/material';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <StyledContainer maxWidth="xs">
        <Paper sx={{ px: 5, py: 8 }}>
          <ThemeMenu />
          <Footer />
        </Paper>
      </StyledContainer>
    </div>
  );
}

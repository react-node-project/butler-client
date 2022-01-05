// import { Button } from '@mui/material';
import React from 'react';
import { StyledContainer,StyledPaper } from '../styles/element.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/features/appSlice';
import ThemeMenu from './../components/Landing/ThemeMenu';
import { Paper } from '@mui/material';
import LocationSearch from '@components/Location/LocationSearch';
import Footer from '../components/Footer';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const onClickButton = () => {
    dispatch(setIsLoading());
  };

  return (
    <div>
      <StyledContainer maxWidth="xs">
        <StyledPaper>
          <LocationSearch />
          <ThemeMenu />
          <Footer />
        </StyledPaper>
      </StyledContainer>
    </div>
  );
}

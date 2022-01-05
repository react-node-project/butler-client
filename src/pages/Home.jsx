// import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/features/appSlice';
import { StyledContainer } from './../styles/sharedElement.styled';
import { Container } from '@mui/material';
import ThemeMenu from './../components/Landing/ThemeMenu';
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
      <Container align="center">
        <StyledContainer>
          <LocationSearch />
          <ThemeMenu />
          <Footer />
        </StyledContainer>
      </Container>
    </div>
  );
}

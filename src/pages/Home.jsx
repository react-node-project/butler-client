// import { Button } from '@mui/material';
import React from 'react';
import { StyledContainer } from '../styles/element.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/features/appSlice';
import ThemeMenu from './../components/Landing/ThemeMenu';
import { Paper } from '@mui/material';
import Footer from '../components/footer';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const onClickButton = () => {
    dispatch(setIsLoading());
  };

  return (
    <div>
      <StyledContainer maxWidth="xs">
        <Paper sx={{ px: 5, py: 8 }}>
          {/* <div>isLoading: {`${isLoading}`}</div>
      <Button onClick={() => onClickButton()} variant="outlined">
      </Button> */}
          <ThemeMenu />
          {/* <Footer /> */}
        </Paper>
      </StyledContainer>
    </div>
  );
}

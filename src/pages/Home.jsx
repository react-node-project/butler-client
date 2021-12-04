import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/features/appSlice';
import Search from '../components/Landing/Search';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const onClickButton = () => {
    dispatch(setIsLoading());
  };

  return (
    <div>
      {/* <div>isLoading: {`${isLoading}`}</div>
      <Button onClick={() => onClickButton()} variant="outlined">
      </Button> */}
      <Search />
    </div>
  );
}

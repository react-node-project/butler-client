import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/features/appSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const onClickButton = () => {
    dispatch(setIsLoading());
  };

  return (
    <div>
      hello world
      <div>isLoading: {`${isLoading}`}</div>
      <Button onClick={() => onClickButton()} variant="outlined">
        눌러보세요.
      </Button>
    </div>
  );
}

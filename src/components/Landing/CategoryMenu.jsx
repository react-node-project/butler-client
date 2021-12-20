// import { THEMEMENU } from './data';
// import { StyledDiv } from './landing.styled';
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
function CategoryMenu() {
  // const [category, setCategory] = useState(null);
  // useEffect(() => {}, []);

  return (
    <>
      <Typography data-testid="category" align="left" variant="h4">
        Popular cuisines
      </Typography>
      <Typography data-testid="category" align="left" variant="subtitle1">
        Browse popular take out cuisines from restaurants in your area and order delivery online.
      </Typography>
    </>
  );
}

export default CategoryMenu;

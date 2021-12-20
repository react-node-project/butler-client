import React from 'react';
import CategorySlider from './CategorySlider';
import { StyledLayout } from './index.styled';
import RestaurantsList from './RestaurantsList';
// import RestaurantsSlider from './RestaurantsSlider';

export type RestaurantsProps = {};

const Restaurants = (props: RestaurantsProps) => {
  // 주소 확인 필요

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      <CategorySlider />
      {/* <RestaurantsSlider /> */}
      <RestaurantsList />
    </StyledLayout>
  );
};

export default Restaurants;

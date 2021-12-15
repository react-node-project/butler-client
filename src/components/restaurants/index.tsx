import { useGetPokemonByNameQuery } from '@store/restaurants/restaurantsSliceRtk';
import React from 'react';
import CategorySlider from './CategorySlider';
import { StyledLayout } from './index.styled';
import RestaurantsSlider from './RestaurantsSlider';

export type RestaurantsProps = {};

const Restaurants = (props: RestaurantsProps) => {
  // 주소 확인 필요

  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      <CategorySlider />
      <RestaurantsSlider />
    </StyledLayout>
  );
};

export default Restaurants;

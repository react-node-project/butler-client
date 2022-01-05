import { RootState } from '@store/index';
import { useGetRestaurantsQuery } from '@store/service/restaurants';
import React from 'react';
import { useSelector } from 'react-redux';
import CategorySlider from './CategorySlider';
import { StyledLayout } from './index.styled';
import RestaurantsList from './RestaurantsList';

export type RestaurantsProps = {};

const Restaurants = (props: RestaurantsProps) => {
  const filter = useSelector((state: RootState) => state.restaurants.filter);
  const { data, error, isLoading } = useGetRestaurantsQuery(filter);

  if (error) {
    console.log('error', error);
    return null;
  }
  if (!data || isLoading) return null;
  const { categories, restaurants } = data;

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      <CategorySlider categories={categories} />
      <RestaurantsList restaurants={restaurants} />
    </StyledLayout>
  );
};

export default Restaurants;

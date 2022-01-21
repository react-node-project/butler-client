import { useGetRestaurantsQuery } from '@store/service/restaurants';
import React from 'react';
import CategorySlider from './CategorySlider';
import CategorySliderSkeleton from './CategorySliderSkeleton';
import { StyledLayout } from './index.styled';
import { LeftNavModalProps } from './LeftNavModal';
import RestaurantsList from './RestaurantsList';
import RestaurantsListSkeleton from './RestaurantsListSkeleton';

export type RestaurantsProps = {
  filter: LeftNavModalProps['filter'];
};

const Restaurants = (props: RestaurantsProps) => {
  const { filter } = props;
  const { data, error, isLoading } = useGetRestaurantsQuery(filter);

  if (error) {
    console.log('error', error);
    return null;
  }

  if (!data || isLoading)
    return (
      <StyledLayout sx={{ flexGrow: 1 }}>
        <CategorySliderSkeleton count={6} />
        <RestaurantsListSkeleton count={6} />
      </StyledLayout>
    );

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      <CategorySlider categories={data.categories} />
      <RestaurantsList restaurants={data.restaurants} />
    </StyledLayout>
  );
};

export default Restaurants;

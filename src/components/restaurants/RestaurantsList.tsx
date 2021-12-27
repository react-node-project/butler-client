import { useGetRestaurantsQuery } from '@store/service/restaurants';
import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantsCard from './RestaurantsCard';
import { StyledLayout } from './RestaurantsList.styled';
import { RootState } from '@store/index';

export type RestaurantsListProps = {};

const RestaurantsList = (props: RestaurantsListProps) => {
  const filter = useSelector((state: RootState) => state.restaurants.filter);
  const { data: restaurants, error, isLoading } = useGetRestaurantsQuery(filter);

  if (error) {
    console.log('error', error);
    return null;
  }
  if (!restaurants || isLoading) return null;
  return (
    <StyledLayout>
      {restaurants.map((item) => (
        <RestaurantsCard
          key={item.title}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          review={item.review}
          distanceText={item.distanceText}
        />
      ))}
    </StyledLayout>
  );
};

export default RestaurantsList;

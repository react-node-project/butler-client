import { GetRestaurantsProps } from '@store/service/restaurants';
import React from 'react';
import RestaurantsCard from './RestaurantsCard';
import { StyledLayout } from './RestaurantsList.styled';

export type RestaurantsListProps = {
  restaurants: GetRestaurantsProps['restaurants'];
};

const RestaurantsList = (props: RestaurantsListProps) => {
  const { restaurants } = props;

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

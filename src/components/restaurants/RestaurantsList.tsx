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
          key={item.store_no}
          storeNumber={item.store_no}
          imageUrl={item.store_image_url}
          title={item.store_name}
          descriptions={item.descriptions}
          review={item.review}
          distanceText={item.address}
        />
      ))}
    </StyledLayout>
  );
};

export default RestaurantsList;

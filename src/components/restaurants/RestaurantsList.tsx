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
          key={item.storeNo}
          storeNumber={item.storeNo}
          imageUrl={item.store_image}
          title={item.storeName}
          notify={item.notify}
          reviewCount={item.reviewCount}
          distanceText={item.address}
          districtCode={item.districtCode}
        />
      ))}
    </StyledLayout>
  );
};

export default RestaurantsList;

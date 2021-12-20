import React from 'react';
import RestaurantsCard from './RestaurantsCard';
import { StyledLayout } from './RestaurantsList.styled';

export type RestaurantsListProps = {};

const RestaurantsList = (props: RestaurantsListProps) => {
  return (
    <StyledLayout>
      <RestaurantsCard
        imageUrl={
          'https://rs-menus-api.roocdn.com/images/ffa2b1cc-8d1b-43b1-9402-14961f3a9a79/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v='
        }
        title={'The Lush Pizza Co.'}
        description={' · Italian · Pizza · Drinks · Milkshakes'}
        review={{
          reviewText: '4.3 Very Good',
          reviewCount: 67,
        }}
        distanceText={'0.3 km away · Free delivery'}
      />
      <RestaurantsCard
        imageUrl={
          'https://rs-menus-api.roocdn.com/images/ffa2b1cc-8d1b-43b1-9402-14961f3a9a79/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v='
        }
        title={'The Lush Pizza Co.'}
        description={' · Italian · Pizza · Drinks · Milkshakes'}
        review={{
          reviewText: '4.3 Very Good',
          reviewCount: 67,
        }}
        distanceText={'0.3 km away · Free delivery'}
      />
      <RestaurantsCard
        imageUrl={
          'https://rs-menus-api.roocdn.com/images/ffa2b1cc-8d1b-43b1-9402-14961f3a9a79/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v='
        }
        title={'The Lush Pizza Co.'}
        description={' · Italian · Pizza · Drinks · Milkshakes'}
        review={{
          reviewText: '4.3 Very Good',
          reviewCount: 67,
        }}
        distanceText={'0.3 km away · Free delivery'}
      />
    </StyledLayout>
  );
};

export default RestaurantsList;

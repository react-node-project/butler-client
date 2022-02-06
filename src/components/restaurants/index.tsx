import { useGetRestaurantsQuery } from '@store/service/restaurants';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getQueryParams } from './../../util/utills';
import BreadcrumbsBox from './Breadcrumbs';
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
  const location = useLocation();
  const { filter } = props;
  const collection = getQueryParams(location.search, 'collection');
  const { data: restaurants, error, isLoading } = useGetRestaurantsQuery({ filter, collection });

  if (error) {
    console.log('error', error);
    return null;
  }

  if (!restaurants || isLoading)
    return (
      <StyledLayout sx={{ flexGrow: 1 }}>
        <CategorySliderSkeleton count={6} />
        <RestaurantsListSkeleton count={6} />
      </StyledLayout>
    );

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      {collection ? <BreadcrumbsBox title={collection} /> : <CategorySlider />}
      <RestaurantsList restaurants={restaurants} />
    </StyledLayout>
  );
};

export default Restaurants;

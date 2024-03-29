import { StyledTitle } from '@components/slider/CardSlider.styled';
import { useGetRestaurantsQuery } from '@store/service/restaurants';
import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton';
import CollectionSlider, { COLLECTION_TYPES } from './CollectionSlider';
import CollectionSliderSkeleton from './CollectionSliderSkeleton';
import { StyledLayout } from './RestaurantsContents.styled';
import { LeftNavModalProps } from './LeftNavModal';
import RestaurantsList from './RestaurantsList';
import RestaurantsListSkeleton from './RestaurantsListSkeleton';

export type RestaurantsProps = {
  filter: LeftNavModalProps['filter'];
  cityName?: string;
};

const RestaurantsContents = (props: RestaurantsProps) => {
  const { filter, cityName } = props;
  const title = `Delivering to ${cityName}`;
  const location = useLocation();
  const collection = new URLSearchParams(location.search).get('collection') as COLLECTION_TYPES[number]['name'];
  const { data: restaurants, error, isLoading } = useGetRestaurantsQuery({ filter, collection });

  if (error) {
    console.log('error', error);
    return null;
  }

  if (!restaurants || isLoading)
    return (
      <StyledLayout sx={{ flexGrow: 1 }}>
        <CollectionSliderSkeleton count={6} />
        <RestaurantsListSkeleton count={6} />
      </StyledLayout>
    );

  return (
    <StyledLayout sx={{ flexGrow: 1 }}>
      {collection ? (
        <BackButton title={collection} />
      ) : (
        <>
          <StyledTitle variant="h3">{title}</StyledTitle>
          <CollectionSlider />
        </>
      )}
      <RestaurantsList restaurants={restaurants} />
    </StyledLayout>
  );
};

export default RestaurantsContents;

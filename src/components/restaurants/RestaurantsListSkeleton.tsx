import React from 'react';
import { StyledLayout } from './RestaurantsList.styled';
import { StyledLayout as StyledLayoutCard, StyledText } from './RestaurantsCard.styled';
import { Skeleton } from '@mui/material';

export type RestaurantsListSkeletonProps = {
  count: number;
};

const RestaurantsListSkeleton = (props: RestaurantsListSkeletonProps) => {
  const { count } = props;
  return (
    <StyledLayout>
      {new Array(count).fill(0).map((item, index) => (
        <StyledLayoutCard key={index}>
          <Skeleton variant="rectangular" height={118} />
          <StyledText>
            <Skeleton />
            <Skeleton width="60%" />
          </StyledText>
        </StyledLayoutCard>
      ))}
    </StyledLayout>
  );
};

export default RestaurantsListSkeleton;

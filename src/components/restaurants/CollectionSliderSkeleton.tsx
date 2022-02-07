import CardSlider from '@components/slider/CardSlider';
import { Skeleton } from '@mui/material';
import React, { useRef } from 'react';
import { StyledCardItem, StyledList } from './CollectionSlider.styled';

export type CollectionSliderSkeletonProps = {
  count: number;
};

const CollectionSliderSkeleton = (props: CollectionSliderSkeletonProps) => {
  const { count } = props;
  const sliderRef = useRef<HTMLUListElement>(null);
  return (
    <CardSlider list={[]} cardWidth={167} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {new Array(count).fill(0).map((item, index) => (
          <StyledCardItem className="card_item" key={index}>
            <Skeleton variant="rectangular" />
          </StyledCardItem>
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default CollectionSliderSkeleton;

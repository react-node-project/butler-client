import CardSlider from '@components/slider/CardSlider';
import { Skeleton } from '@mui/material';
import { RootState } from '@store/index';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { StyledCardItem, StyledList } from './CategorySlider.styled';

export type CategorySliderSkeletonProps = {
  count: number;
};

const CategorySliderSkeleton = (props: CategorySliderSkeletonProps) => {
  const { count } = props;
  const filter = useSelector((state: RootState) => state.restaurants.filter);
  const sliderRef = useRef<HTMLUListElement>(null);
  return (
    <CardSlider title={filter} list={[]} cardWidth={167} sliderRef={sliderRef}>
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

export default CategorySliderSkeleton;

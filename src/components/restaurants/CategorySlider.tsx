import React, { useRef } from 'react';
import { StyledCardItem, StyledList } from './CategorySlider.styled';
import { Box } from '@mui/system';
import CardSlider from '@components/slider/CardSlider';
import { useGetCategoriesQuery } from '@store/service/restaurants';

export type CategorySliderProps = {};

const CategorySlider = (props: CategorySliderProps) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery(null);
  const sliderRef = useRef<HTMLUListElement>(null);

  if (error) {
    console.log('error', error);
    return null;
  }
  if (!categories || isLoading) return null;
  const { title, list } = categories;
  return (
    <CardSlider title={title} list={list} cardWidth={167} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {list.map((item) => (
          <StyledCardItem key={item} className="card_item">
            <Box component="button">
              <span>{item}</span>
            </Box>
          </StyledCardItem>
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default CategorySlider;

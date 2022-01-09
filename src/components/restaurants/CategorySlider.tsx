import React, { useRef } from 'react';
import { StyledCardItem, StyledList } from './CategorySlider.styled';
import { Box } from '@mui/system';
import CardSlider from '@components/slider/CardSlider';
import { GetRestaurantsProps } from '@store/service/restaurants';

export type CategorySliderProps = {
  categories: GetRestaurantsProps['categories'];
};

const CategorySlider = (props: CategorySliderProps) => {
  const { categories } = props;
  const { title, list } = categories;
  const sliderRef = useRef<HTMLUListElement>(null);
  return (
    <CardSlider title={title} list={list} cardWidth={167} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {list.map((item) => (
          <StyledCardItem
            key={item}
            className="card_item"
            backgroundImage="url(https://co-restaurants.roocdn.com/images/d014c72287beb4cdebe325c025fe54d085c8c062/shortcut/offers.png?width=334&height=176&fit=crop&bg-color=fb5058&auto=webp&format=png)"
          >
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

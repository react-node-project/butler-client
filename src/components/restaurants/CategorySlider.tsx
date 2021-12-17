import React, { useRef } from 'react';
import { useRestaurantsCategory } from '@hooks/useRestaurantsCategory';
import { StyledList } from './CategorySlider.styled';
import { Box } from '@mui/system';
import CardSlider from '@components/slider/CardSlider';

export type CategorySliderProps = {};

const CategorySlider: React.FC<CategorySliderProps> = (props) => {
  const { title, list } = useRestaurantsCategory();
  const sliderRef = useRef<HTMLUListElement>(null);
  return (
    <CardSlider title={title} list={list} cardWidth={167} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {list.map((item) => (
          <Box className={'card_item'} key={item}>
            <Box component="button">
              <span>{item}</span>
            </Box>
          </Box>
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default CategorySlider;

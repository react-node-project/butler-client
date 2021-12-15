import React, { useRef } from 'react';
import CardSlider from '@components/slider/CardSlider';
import { StyledList } from './RestaurantsSlider.styled';
import RestaurantsCard from './RestaurantsCard';
import { useRestaurantsEvent } from '@hooks/restaurants/useRestaurants';

export type RestaurantsSliderProps = {};

const RestaurantsSlider = (props: RestaurantsSliderProps) => {
  const { title, list } = useRestaurantsEvent();
  const sliderRef = useRef<HTMLUListElement>(null);

  return (
    <CardSlider title={title} list={list} cardWidth={262} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {list.map((item) => (
          <RestaurantsCard key={item.title} {...item} />
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default RestaurantsSlider;

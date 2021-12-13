import React, { useRef } from 'react';
import CardSlider from '@components/slider/CardSlider';
import { useRestaurantsEvent } from '@hooks/useRestaurantsEvent';
import { StyledList } from './RestaurantsSlider.styled';
import CardItem from './CardItem';

export type RestaurantsSliderProps = {};

const RestaurantsSlider: React.FC<RestaurantsSliderProps> = (props) => {
  const { title, list } = useRestaurantsEvent();
  const sliderRef = useRef<HTMLUListElement>(null);

  return (
    <CardSlider title={title} list={list} cardWidth={262} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {list.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default RestaurantsSlider;

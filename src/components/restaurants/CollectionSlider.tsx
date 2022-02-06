import React, { useRef } from 'react';
import { StyledCardItem, StyledList } from './CollectionSlider.styled';
import { Box } from '@mui/system';
import CardSlider from '@components/slider/CardSlider';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQueryParams } from '../../util/utills';

export type CollectionSliderProps = {};

export type COLLECTION_TYPES = {
  name: 'grocery' | 'pizza' | 'burgers' | 'chinese' | 'desert' | 'asian' | 'indian' | 'healthy';
  url: string;
}[];

const COLLECTION: COLLECTION_TYPES = [
  {
    name: 'grocery',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/grocery.png?width=334&height=176&fit=crop&bg-color=007e8a&auto=webp&format=png',
  },
  {
    name: 'pizza',
    url: 'https://co-restaurants.roocdn.com/images/d014c72287beb4cdebe325c025fe54d085c8c062/shortcut/pizza.png?width=334&height=176&fit=crop&bg-color=fb5058&auto=webp&format=png',
  },
  {
    name: 'burgers',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/burgers-2.png?width=334&height=176&fit=crop&bg-color=440063&auto=webp&format=png',
  },
  {
    name: 'chinese',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/dumplings.png?width=176&height=176&fit=crop&bg-color=fabe00&auto=webp&format=png',
  },
  {
    name: 'desert',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/dessert.png?width=334&height=176&fit=crop&bg-color=fb5058&auto=webp&format=png',
  },
  {
    name: 'asian',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/noodles.png?width=176&height=176&fit=crop&bg-color=007e8a&auto=webp&format=png',
  },
  {
    name: 'indian',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/curry.png?width=176&height=176&fit=crop&bg-color=007e8a&auto=webp&format=png',
  },
  {
    name: 'healthy',
    url: 'https://co-restaurants.roocdn.com/images/a5eb46e1f2ddbb48acc18c32506067e8bc1ba6f7/shortcut/organic.png?width=176&height=176&fit=crop&bg-color=00ccbc&auto=webp&format=png',
  },
];

const CollectionSlider = (props: CollectionSliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const URLSearch = new URLSearchParams(location.search);

  const onClickCard = (name: string) => (e: React.MouseEvent) => {
    const collection = getQueryParams(location.search, 'collection');
    if (collection) {
      URLSearch.set('collection', name);
      const newParam = URLSearch.toString();

      navigate(`${location.pathname}?${newParam}`);
      return;
    }
    navigate(`${location.pathname}${location.search}&collection=${name}`);
  };

  return (
    <CardSlider title={'Delivering to Liverpool City Centre'} list={COLLECTION} cardWidth={167} sliderRef={sliderRef}>
      <StyledList component="ul" ref={sliderRef} className="slide_list">
        {COLLECTION.map((item) => (
          <StyledCardItem
            key={item.name}
            className="card_item"
            backgroundImage={item.url}
            onClick={onClickCard(item.name)}
          >
            <Box component="button">
              <span>{item.name}</span>
            </Box>
          </StyledCardItem>
        ))}
      </StyledList>
    </CardSlider>
  );
};

export default CollectionSlider;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleveringCityList: {
    title: '타이틀 영역 입니다.',
    list: [
      'offers',
      'offers2',
      'offers3',
      'offers4',
      'offers5',
      'offers6',
      'offers7',
      'offers8',
      'offers9',
      'offers10',
    ],
  },
  saleList: {
    title: 'Up to 20% off',
    list: [
      {
        imageUrl:
          'https://rs-menus-api.roocdn.com/images/ffa2b1cc-8d1b-43b1-9402-14961f3a9a79/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=',
        title: 'The Lush Pizza Co.',
        description: ' · Italian · Pizza · Drinks · Milkshakes',
        review: {
          reviewText: '4.3 Very Good',
          reviewCount: 67,
        },
        distanceText: '0.3 km away · Free delivery',
        eventText: 'Spend $30, get 15% off',
      },
      {
        imageUrl:
          'https://f.roocdn.com/images/menus/236836/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1635396588',
        title: 'Subway',
        description: 'Sandwiches · Wraps · Breakfast · Healthy',
        distanceText: '0.7 km away · Free delivery',
        eventText: 'Spend $25, get 20% off',
      },
    ],
  },
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.deleveringCityList = action.payload;
    },
  },
});

export const { setCategoryList } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

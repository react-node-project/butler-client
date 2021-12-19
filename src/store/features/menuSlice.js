import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuList: {
    restaurantName: 'Greasy Monkey',
    list: [
      {
        category: "Greasy/'s Burger",
        menuList: [
          {
            title: 'Double Delxus',
            imgUrl:
              'https://rs-menus-api.roocdn.com/images/d8aef7c8-7a14-4ba9-aa7c-2659dd261f7b/image.jpeg?width=122.5&height=122.5&auto=webp&format=jpg&fit=crop',
            description:
              'Double beef, double cheese, bacon, gm relish, onion, pickles, greasy’s sauce. Served with chips. (Gf if you add the bun).',
            price: '$26.00',
          },
          {
            title: 'Greasy',
            imgUrl:
              'https://rs-menus-api.roocdn.com/images/d8aef7c8-7a14-4ba9-aa7c-2659dd261f7b/image.jpeg?width=122.5&height=122.5&auto=webp&format=jpg&fit=crop',
            description:
              'Beef patty, lettuce, cheese, onion, pickles, gm relish, greasy’s sauce. Served with chips. (Gf if you add the bun).',
            price: '$21.00',
          },
        ],
      },
    ],
  },
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menuSlice.reducer;

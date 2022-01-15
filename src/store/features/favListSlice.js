import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // mockdata
  favList: [
  {
    shop_id: 34,
    shop_name: 'PasTastic - Chippenham Road',
    imageUrl: 'https://rs-menus-api.roocdn.com/images/46bbf3fc-1853-4c2b-a505-62edc5d4dcb0/image.jpeg?width=343',
    description: 'Italian·Vegetarian·Pasta',
    delivery_distance: '25-30 min',
  },
  {
    shop_id: 14,
    shop_name: 'Burger King - Kentish Town',
    imageUrl:
      'https://rs-menus-api.roocdn.com/images/e11e2ed3-3450-48b6-8f7c-a02ee512f67f/image.jpeg?width=531&height=299&auto=webp&format=jpg&fit=crop',
    description: 'American·Burgers·Vegan Friendly',
    delivery_distance: '10-20 min',
  },
  ],
};

const favListSlice = createSlice({
  name: 'favList',
  initialState,
  reducers: {
    // addToFavList
    addToFavList(state, action) {
      const selectedShop = {
        ...action.payload,
      };
      const itemIndex = state.favList.findIndex((item) => item.id === action.payload.id);
      if (itemIndex < 0) {
        state.favList.push(selectedShop);
      }
    //   console.log('updated favList', state.favList);
    },
    // removeFromFavList
    removeFromFavList(state, action) {
      const updatedFavList = state.favList.filter((item) => item.id !== action.payload.id);
      state.favList = updatedFavList;
    },
  },
});

export const { addToFavList, removeFromFavList } = FavListSlicer.actions;

export default FavListSlicer.reducer;

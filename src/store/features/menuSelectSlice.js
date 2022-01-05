import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMenuOption: [],
  totalPrice: 0,
};

export const menuSelectSlice = createSlice({
  name: 'selectedMenuOption',
  initialState,
  reducers: {
    addMenuOption: (state, action) => {
      state.selectedMenuOption = [...state.selectedMenuOption, action.payload];
    },
    removeMenuOption: (state, action) => {
      state.selectedMenuOption = state.selectedMenuOption.filter((el) => el !== action.payload);
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
  },
});

export const { addMenuOption, removeMenuOption, setTotalPrice } = menuSelectSlice.actions;

export default menuSelectSlice.reducer;

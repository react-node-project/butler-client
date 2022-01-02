import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMenuOption: [],
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
  },
});

export default menuSelectSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {},
  },
});

export const { setUser } = basketSlice.actions;

export default basketSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {};
const initialState: InitialState = {};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
});

export const {} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

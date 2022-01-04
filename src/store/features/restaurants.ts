import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  filter: 'delivery' | 'pick-up' | 'table-service';
};
const initialState: InitialState = {
  filter: 'delivery',
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

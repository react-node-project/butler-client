import { LeftNavModalProps } from '@components/restaurants/LeftNavModal';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  filter: LeftNavModalProps['filter'];
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

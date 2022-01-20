import { createSlice } from '@reduxjs/toolkit';

export type addressType = {
  apartment?: string;
  streetAdress: string;
  city: string;
  postcode: string;
  phoneNumber: string;
  message: string;
};

type InitialState = {
  title: string;
  fulfillment?: string;
  address: addressType[];
  cutlery: boolean;
};
const initialState: InitialState = {
  title: 'Review your order from Zizzi - Royal Leamigton Spa',
  fulfillment: '25 - 40',
  address: [],
  cutlery: true,
};

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    toggleCutlery: (state) => {
      state.cutlery = !state.cutlery;
    },
  },
});

export const { setTitle, setAddress, toggleCutlery } = paymentsSlice.actions;

export default paymentsSlice.reducer;

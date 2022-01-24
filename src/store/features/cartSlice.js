import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item to cart
    // action object => multiple parameter
    addToCart: (state, action) => {
      const itemName = Object.keys(action.payload)[0];
      const itemIngredients = Object.values(action.payload)[0];
      const itemIndex = state.cartItems.findIndex((item) => item.name === itemName);

      state.cartItems = [...state.cartItems, { id: nanoid(4), name: itemName, ingredients: itemIngredients, qty: 1 }];
    },
    removeFromCart: (state, action) => {
      state.selectedMenuOption = state.selectedMenuOption.filter((el) => el !== action.payload);
    },
    // decrement qty
    decrementItemQty(state, action) {},
  },
});

export const { addToCart, removeFromCart, decrementItemQty } = cartSlice.actions; // individual reducer

export default cartSlice.reducer;

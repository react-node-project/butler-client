import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO: deconstruct payload
    addToCart: (state, action) => {
      // refactoring
      const itemName = action.payload.foodName;
      const itemIngredients = action.payload.ingredients[0];
      const itemPrice = action.payload.price;

      state.cartItems = [
        ...state.cartItems,
        { id: nanoid(4), name: itemName, ingredients: itemIngredients, qty: 1, price: itemPrice },
      ];

      state.cartTotalAmount = state.cartTotalAmount + itemPrice;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },

    incrementItemQty(state, action) {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty++;
        }
      });
    },

    decrementItemQty(state, action) {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          if (item.qty > 1) {
            item.qty--;
          } else {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
          }
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, incrementItemQty, decrementItemQty } = cartSlice.actions; // individual reducer

export default cartSlice.reducer;

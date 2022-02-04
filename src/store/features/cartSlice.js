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
    // TODO: deconstruct payload, refactoring is needed
    addToCart: (state, action) => {
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
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      state.cartTotalAmount -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].qty;
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },

    incrementItemQty(state, action) {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty++;
          state.cartTotalAmount += item.price;
        }
      });
    },

    decrementItemQty(state, action) {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          if (item.qty > 1) {
            item.qty--;
            state.cartTotalAmount -= item.price;
          } else {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartTotalAmount -= item.price;
          }
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, incrementItemQty, decrementItemQty } = cartSlice.actions; // individual reducer

export default cartSlice.reducer;

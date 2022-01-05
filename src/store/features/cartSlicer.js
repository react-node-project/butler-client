import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item to cart
    //action.payload = product
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // increment qty
      if (0 <= itemIndex) {
        state.cartTotalQty += 1;
        // state.cartItems[itemIndex].cartTotalQty += 1;
      } else {
        const addedProduct = { ...action.payload, cartTotalQty: 1 };
        state.cartItems.push(addedProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions; // individual reducers

export default cartSlice.reducer;

// (item) => item.id === action.payload.id //이슈?

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload : item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload : id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.cart = [];
    },
    increaseQuantity(state, action) {
      //payload:id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseQuantity(state, action) {
      //payload:id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  deleteItem,
  clearItems,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

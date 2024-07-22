import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export default orderSlice.reducer;

export const { createOrder } = orderSlice.actions;

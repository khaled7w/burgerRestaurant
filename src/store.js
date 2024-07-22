import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/Home/userSlice';
import cartSlice from './features/Cart/cartSlice';
import orderSlice from './features/Order/orderSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    orders: orderSlice,
  },
});

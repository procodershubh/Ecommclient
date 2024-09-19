// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust path as necessary

export const cart = configureStore({
  reducer: {
    cart: cartReducer,
  },
});




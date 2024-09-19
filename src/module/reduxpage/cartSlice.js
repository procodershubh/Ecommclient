import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
  }


  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item._id === action.payload._id);
            if (existingItem) {
              existingItem.quantity = action.payload.quantity; // Update quantity
            } else {
              state.items.push(action.payload);
            }
          },
          removeItem: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload);
          },
          updateQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const item = state.items.find(item => item._id === _id);
            if (item) {
              item.quantity = quantity;
            }
          },
        },
      });
  
  export const { addItem, removeItem, updateQuantity} = cartSlice.actions
  
  export default cartSlice.reducer
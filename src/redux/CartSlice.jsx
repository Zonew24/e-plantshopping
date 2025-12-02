/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Danh sách sản phẩm trong giỏ
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(item => item.name !== action.payload.name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        const diff = amount - item.quantity;
        state.totalQuantity += diff;
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
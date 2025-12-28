import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      state.totalQuantity++;

      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
        state.totalPrice += item.price;
      } else {
        existing.quantity++;
        state.totalPrice += item.price;
      }
    },
    increaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    decreaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity--;
      state.totalQuantity--;
      state.totalPrice -= item.price;
      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    removeItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;

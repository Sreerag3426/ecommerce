import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer as default
export default cartSlice.reducer;

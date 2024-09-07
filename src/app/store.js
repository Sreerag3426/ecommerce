import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;

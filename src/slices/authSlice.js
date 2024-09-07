import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;
export default authSlice.reducer;

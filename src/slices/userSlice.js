import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    mobileNumber: "",
  },
  reducers: {
    setUserDetails(state, action) {
      const { username, email, mobileNumber } = action.payload;
      state.username = username || state.username;
      state.email = email || state.email;
      state.mobileNumber = mobileNumber || state.mobileNumber;
    },
    updateUsername(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updateMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
  },
});

export const {
  setUserDetails,
  updateUsername,
  updateEmail,
  updateMobileNumber,
} = userSlice.actions;
export default userSlice.reducer;

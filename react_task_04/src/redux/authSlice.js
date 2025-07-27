import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authkey",
  initialState: { isLoggedIn: false, user: null },
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});
export const {  logIn, logout,setUser, } = authSlice.actions;
export default authSlice.reducer;

// Slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAgeVerified: false,
    isAuthenticated:false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAgeVerified = false;
      state.isAuthenticated = false;
    },
    setAgeVerified: (state, action) => {
      state.isAgeVerified = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, logout, setAgeVerified , setAuthenticated} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAgeVerified = (state) => state.auth.isAgeVerified;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import likePostReducer from './Slices/likePostSlice'; 

const store = configureStore({
  reducer: {
    likePost: likePostReducer,
    // Add other reducers if you have them
  },
});

export default store;

// Redux/slices/likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {},
  reducers: {
    toggleLike: (state, action) => {
      const { postId } = action.payload;
      state[postId] = !state[postId];
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;

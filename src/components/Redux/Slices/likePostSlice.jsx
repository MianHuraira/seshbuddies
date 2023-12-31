// slices/likePostSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likePostSlice = createSlice({
  name: 'likePost',
  initialState: {},
  reducers: {
    toggleLike: (state, action) => {
      const postId = action.payload;
      state[postId] = state[postId] === 'like_btn' ? 'greenLeaf' : 'like_btn';
    },
  },
});

export const { toggleLike } = likePostSlice.actions;
export const selectLikes = (state) => state.likePost;

export default likePostSlice.reducer;

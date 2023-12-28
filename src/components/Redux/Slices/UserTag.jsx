import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { selectUser } from "./AuthSlice";

// Async thunk for fetching users
export const fetchUsers = () => async (dispatch, getState) => {
  try {
    const { token } = selectUser(getState());
    dispatch(fetchUsersPending());

    const response = await axios.get(global.BASEURL + "/users/usertags", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });
    dispatch(fetchUsersFulfilled(response.data.users));
  } catch (error) {
    console.error("Error fetching users:", error);
    dispatch(fetchUsersRejected(error.message));
  }
};

// Action creators
const fetchUsersPending = () => ({ type: "user/fetchUsers/pending" });

const fetchUsersFulfilled = (mentionUser) => ({
  type: "user/fetchUsers/fulfilled",
  payload: mentionUser,
});
const fetchUsersRejected = (error) => ({
  type: "user/fetchUsers/rejected",
  error,
});

// Initial state
const initialState = {
  mentionUser: [],
  isLoading: false,
  error: null,
};

// Slice
const userTag = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersFulfilled, (state, action) => {
      state.mentionUser = action.payload || [];
    });
  },
});
console.log();
// Selectors.js (ya jo bhi aapne isko naam diya hai)
export const selectMentionUser = (state) => state.userTag.mentionUser;

export default userTag.reducer;

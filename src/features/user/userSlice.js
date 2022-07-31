import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setAuthenticatedUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

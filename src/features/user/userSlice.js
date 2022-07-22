import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => (state.user = null),
  },
});

export const { setAuthenticatedUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

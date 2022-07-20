import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalStateChange: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { modalStateChange } = modalSlice.actions;
export default modalSlice.reducer;

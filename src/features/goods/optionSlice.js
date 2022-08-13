import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  size: null,
  color: null,
  quantity: 1,
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setGoodsOption: (state, action) => {
      state.size = action.payload.size;
      state.color = action.payload.color;
      if (action.payload.type === 'minus') {
        state.quantity = state.quantity > 1 ? state.quantity-- : state.quantity;
      } else {
        state.quantity++;
      }
    },
  },
});

export const { setGoodsOption } = optionSlice.actions;
export default optionSlice.reducer;

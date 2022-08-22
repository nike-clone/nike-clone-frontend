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
        state.quantity = state.quantity > 1 ? (state.quantity -= 1) : state.quantity;
      } else if (action.payload.type === 'plus') {
        state.quantity = state.quantity + 1;
      }
    },
  },
});

export const { setGoodsOption } = optionSlice.actions;
export default optionSlice.reducer;

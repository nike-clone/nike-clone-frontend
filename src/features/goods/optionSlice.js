import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  size: null,
  color: null,
  quantity: 1,
  type: null,
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setGoodsOption: (state, action) => {
      if (action.payload.type === 'm' && state.quantity === 1) return;
      state.size = action.payload.size;
      state.color = action.payload.color;
      if (action.payload.type === 'm') state.quantity = state.quantity - 1;
      else if (action.payload.type === 'p') state.quantity = state.quantity + 1;
    },
    resetGoodsOption: (state) => {
      state.size = null;
      state.color = null;
      state.quantity = 1;
      state.type = null;
    },
  },
});

export const { setGoodsOption, resetGoodsOption } = optionSlice.actions;
export default optionSlice.reducer;

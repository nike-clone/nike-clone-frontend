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
      state.size = action.payload.size;
      state.color = action.payload.color;
      if (action.payload.type === 'm') state.quantity = state.quantity - 1;
      else if (action.payload.type === 'p') state.quantity = state.quantity + 1;
    },
  },
});

export const { setGoodsOption } = optionSlice.actions;
export default optionSlice.reducer;

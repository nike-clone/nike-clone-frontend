import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import userReducer from 'features/user/userSlice';
import optionReducer from 'features/goods/optionSlice';
const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    option: optionReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export default store;

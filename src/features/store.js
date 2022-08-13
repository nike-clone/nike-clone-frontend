import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import userReducer from 'features/user/userSlice';
import optionReducer from 'features/goods/optionSlice';
export default configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    option: optionReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

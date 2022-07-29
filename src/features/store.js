import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import userReducer from 'features/user/userSlice';
export default configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

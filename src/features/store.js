import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
export default configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

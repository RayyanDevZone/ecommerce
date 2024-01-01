// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if you have them
  },
});

export default store;

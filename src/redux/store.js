import { configureStore } from '@reduxjs/toolkit';
import authReducer from './counter/authSlics'; // Adjust the import path if necessary

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


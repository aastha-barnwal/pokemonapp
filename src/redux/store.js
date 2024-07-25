import { configureStore } from '@reduxjs/toolkit';
import authReducer from './counter/authSlics'; // Adjust the import path if necessary

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })


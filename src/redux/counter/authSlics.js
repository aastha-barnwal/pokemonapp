// import { createSlice } from '@reduxjs/toolkit'



// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null, // Current logged-in user
//     registeredUsers: [], // List of registered users
//   },
//   reducers: {
//     register: (state, action) => {
//       const { username, password } = action.payload;
//       const existingUser = state.registeredUsers.find(user => user.username === username);
    
//       if (existingUser) {
//         // console.error('User already registered');
//         return; // Prevent duplicate registration
//       }
    
//       state.registeredUsers.push(action.payload);
//       console.log('User registered:', action.payload);
//     },
    
//     login: (state, action) => {
//       const { username, password } = action.payload;
      
    
//       // Find the user with matching username and password
//       const user = state.registeredUsers.find(user =>
//         user.username === username && user.password === password
//       );
    
//       console.log('Found user:', user);
    
//       if (user) {
//         state.user = user; // Set the logged-in user
//         console.log('Login successful:', user);
//       } else {
//         // if username or password wrong
//         console.error('Login failed: Invalid username or password');
//       }
//     },
    
//     logout: (state)=>{
//       state.user=null;
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { register, login, logout } = authSlice.actions

// export default authSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredUsers: [],
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.registeredUsers.find(user => 
        user.username === username && user.password === password
      );
      if (user) {
        state.user = user;
        state.error = null; // Clear any previous error
      } else {
        state.error = 'Invalid username or password';
      }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;

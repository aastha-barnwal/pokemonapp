import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredUsers: [],
  user: null,
  error: null,
};

export const authSlics = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { username } = action.payload;
      const existingUser = state.registeredUsers.find(user => user.username === username);
      if (existingUser) {
        state.error = 'User already registered';
      } else {
        state.registeredUsers.push(action.payload);
        state.error = null; // Clear any previous error
      }
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

export const { register, login, logout } = authSlics.actions;
export default authSlics.reducer;

import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Current logged-in user
    registeredUsers: [], // List of registered users
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      const existingUser = state.registeredUsers.find(user => user.username === username);
    
      if (existingUser) {
        console.error('User already registered');
        return; // Prevent duplicate registration
      }
    
      state.registeredUsers.push(action.payload);
      console.log('User registered:', action.payload);
    },
    
    login: (state, action) => {
      const { username, password } = action.payload;
      console.log('Attempting login with:', { username, password });
    
      // Find the user with matching username and password
      const user = state.registeredUsers.find(user =>
        user.username === username && user.password === password
      );
    
      console.log('Found user:', user);
    
      if (user) {
        state.user = user; // Set the logged-in user
        console.log('Login successful:', user);
      } else {
        // Optional: Handle login failure (e.g., return an error message or set a flag)
        console.error('Login failed: Invalid username or password');
      }
    },
    
    logout: (state)=>{
      state.user=null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { register, login, logout } = authSlice.actions

export default authSlice.reducer
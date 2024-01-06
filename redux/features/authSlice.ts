// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: number;
  username: string;
  email: string;
}




// features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api, LoginResponse } from '../services/api';

interface AuthState {
  token: string
  isAuthenticated: boolean;
  user: User | null;
}

const initialState = {
  isAuthenticated: false,

} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isAuthenticated = true;
      }
    );
    // Handle other cases such as pending, rejected, etc.
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

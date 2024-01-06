// services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

interface User {
  id: number;
  username: string;
  email: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

// services/api.ts'de
export interface LoginResponse {
  user: User;
  token: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    verify: builder.mutation({
      query: () => ({
        url: '/verify/',
        method: "POST",
      })
    }),
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    
    }),
    // ... diğer endpoint tanımlamaları ...
  }),
});

export const { useLoginUserMutation, useVerifyMutation } = api;

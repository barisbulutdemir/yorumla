// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api'; // api dosyasının yolu doğru olmalı
import authReducer from './features/authSlice'; // authSlice dosyasının yolu doğru olmalı

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// store'un tipini çıkartmak için
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

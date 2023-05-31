import { configureStore } from '@reduxjs/toolkit';

import api from './api/apiSlice';
import books from './books/booksSlice';
import user from './user/userSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user,
    books,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

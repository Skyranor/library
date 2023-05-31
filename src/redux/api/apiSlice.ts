import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Book, Category, LoginFields } from '../../types';
import { BookDTO, BookDetailsDTO, CategoryDTO } from '../../types/DTO/Book';
import { UserAPI } from '../../types/DTO/User';
import { RootState } from '../store';

const API_URL = import.meta.env.VITE_API_URL;

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const jwt = (getState() as RootState).user.jwt;
      if (jwt) {
        headers.set('authorization', `Bearer ${jwt}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserAPI, LoginFields>({
      query: (credentials) => ({
        url: '/api/auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),

    getBooks: builder.query<BookDTO[], void>({
      query: () => '/api/books',
      transformResponse: (response: Book[]) => response,
    }),

    getBook: builder.query<BookDetailsDTO, string>({
      query: (id) => `/api/books/${id}`,
    }),

    getCategories: builder.query<CategoryDTO[], void>({
      query: () => '/api/categories',
      transformResponse: (response: Category[]) => [
        {
          name: 'Все книги',
          id: Date.now(),
          booksCount: response.reduce((acc, cur) => acc + cur.booksCount, 0),
          path: 'all',
        },
        ...response,
      ],
    }),
  }),
});

export default apiSlice;

export const {
  useLoginMutation,
  useGetBooksQuery,
  useGetCategoriesQuery,
  useGetBookQuery,
  usePrefetch,
} = apiSlice;

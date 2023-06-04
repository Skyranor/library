import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Book, Booking, Category, LoginFields } from '../../types';
import { BookDTO, BookDetailsDTO, CategoryDTO } from '../../types/DTO/Book';
import { UserAPI, UserDTO } from '../../types/DTO/User';
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
  tagTypes: ['User', 'Book', 'Books'],
  endpoints: (builder) => ({
    login: builder.mutation<UserAPI, LoginFields>({
      query: (credentials) => ({
        url: '/api/auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserData: builder.query<UserDTO, void>({
      query: () => '/api/users/me',
      providesTags: ['User'],
    }),

    getBooks: builder.query<BookDTO[], void>({
      query: () => '/api/books',
      transformResponse: (response: Book[]) => response,
      providesTags: ['Books'],
    }),

    getBook: builder.query<BookDetailsDTO, string>({
      query: (id) => `/api/books/${id}`,
      providesTags: ['Book'],
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

    booking: builder.mutation<any, Booking>({
      query: (bookingData) => ({
        url: '/api/bookings',
        method: 'POST',
        body: bookingData,
      }),
      invalidatesTags: ['Books', 'Book', 'User'],
    }),

    removeBooking: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/bookings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books', 'Book', 'User'],
    }),
  }),
});
export default apiSlice;

export const {
  usePrefetch,
  useLoginMutation,
  useGetUserDataQuery,
  useGetBooksQuery,
  useGetCategoriesQuery,
  useGetBookQuery,
  useBookingMutation,
  useRemoveBookingMutation,
} = apiSlice;

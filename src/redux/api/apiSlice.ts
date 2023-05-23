import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export default apiSlice;

export const { useLoginMutation } = apiSlice;

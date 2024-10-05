// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const isProd = import.meta.env.PROD

// Define a service using a base URL and expected endpoints
export const ashtekiApi = createApi({
  reducerPath: 'ashtekiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: isProd ? 'https://ashteki.com/api' : '/api',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const state = getState();
      const token = state.auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  // refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'account/login',
        method: 'POST',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          'username': credentials.username,
          'password': credentials.password,
          'grant_type': 'password',
          // 'scope': 'token:longterm'
        })
      })
    }),
    getMyDecks: builder.query({
      query: () => 'decks',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMyDecksQuery, useLoginMutation } = ashtekiApi
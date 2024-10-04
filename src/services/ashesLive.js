// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ashesLiveApi = createApi({
  reducerPath: 'ashesLiveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/live',
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
  endpoints: (builder) => ({
    getPubDecks: builder.query({
      query: () => 'decks'
    }),
    getMyDecks: builder.query({
      query: () => 'decks/mine',
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: 'token',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          'username': credentials.username,
          'password': credentials.password,
          'grant_type': 'password',
          'scope': 'token:longterm'
        })
      })
    }),

    addDeck: builder.mutation({
      query: deck => ({
        url: '/decks',
        method: 'POST',
        body: deck
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPubDecksQuery, useGetMyDecksQuery, useLoginMutation, useAddDeckMutation } = ashesLiveApi
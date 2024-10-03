// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ashesLiveApi = createApi({
  reducerPath: 'ashesLiveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/live',
  }),
  endpoints: (builder) => ({
    getPubDecks: builder.query({
      query: () => 'decks'
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
export const { useGetPubDecksQuery, useLoginMutation, useAddDeckMutation } = ashesLiveApi
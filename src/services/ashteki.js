// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ashtekiApi = createApi({
  reducerPath: 'ashtekiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
    // baseUrl: 'https://ashteki.com/api/',
  }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: () => `cards`,
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
export const { useGetAllCardsQuery, useAddDeckMutation } = ashtekiApi
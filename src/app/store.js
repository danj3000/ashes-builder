import { configureStore } from '@reduxjs/toolkit'
import cardFilterReducer from '../features/cardFilterSlice'

export const store = configureStore({
    reducer: {
        cardFilter: cardFilterReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'
import cardFilterReducer from '../features/cardFilterSlice'
import viewerReducer from '../features/viewerSlice'

export const store = configureStore({
    reducer: {
        cardFilter: cardFilterReducer,
        viewer: viewerReducer
    }
})
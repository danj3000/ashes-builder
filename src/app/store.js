import { configureStore } from '@reduxjs/toolkit'
import cardFilterReducer from '../features/cardFilterSlice'
import viewerReducer from '../features/viewerSlice'
import authReducer from '../features/authSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { ashtekiApi } from '../services/ashteki'
import { ashesLiveApi } from '../services/ashesLive'


//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
};

export const store = configureStore({
    reducer: {
        cardFilter: cardFilterReducer,
        viewer: viewerReducer,
        auth: authReducer,

        [ashtekiApi.reducerPath]: ashtekiApi.reducer,
        [ashesLiveApi.reducerPath]: ashesLiveApi.reducer,
    },
    preloadedState: reHydrateStore(),
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            ashtekiApi.middleware,
            ashesLiveApi.middleware,
            localStorageMiddleware
        ]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
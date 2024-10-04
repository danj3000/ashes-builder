// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action
        ) => {
            state.user = action.payload.user
            state.token = action.payload.access_token
        },
        logout: (state, action) => {
            state.user = undefined;
            state.token = undefined;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions


export default authSlice.reducer
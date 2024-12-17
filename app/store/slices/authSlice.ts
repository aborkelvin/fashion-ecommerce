import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { error } from 'console';
import { persistor } from '../store';


// TODO: Remove the loading and error fields from the state and the loginStart and loginFailure reducers.
interface AuthState {
    user: null | { name: string; email: string, username: string };
    token: null | string;
    isAuthenticated: boolean;
    loading: boolean;
    error: null | string;
}

const initialState:AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /* loginStart(state) {
            state.loading = true;
            state.error = null;
        }, */
        loginSuccess(state, action) {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        /* loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }, */
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            persistor.purge(); // Clear persisted state
        },
    },
});

export const { /* loginStart, */ loginSuccess, /* loginFailure, */ logout } = authSlice.actions;
export default authSlice.reducer;

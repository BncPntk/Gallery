import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false, showUpload: false, showRedreshBtn: false }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.clear();
        },
        toggleUpload(state) {
            state.showUpload = !state.showUpload;
        },
        toggleRefresh(state) {
            state.showRedreshBtn = !state.showRedreshBtn;
        }
    }
});

const store = configureStore({
    reducer: { auth: authSlice.reducer }
});

export const authActions = authSlice.actions;

export default store;
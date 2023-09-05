import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:'app',
    initialState:{ isMenuOpen:true,
    watchPage:false },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setMenu: (state) => {
            state.isMenuOpen = true;
        },
        setWatchPageTrue: (state) => {
            state.watchPage = true
        },
        setWatchPageFalse:(state) => {
            state.watchPage = false
            
        },
    }
})

export const {toggleMenu, closeMenu, setMenu, setWatchPageFalse, setWatchPageTrue} = appSlice.actions;
export default appSlice.reducer;
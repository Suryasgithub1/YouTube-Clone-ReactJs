import { configureStore } from '@reduxjs/toolkit'
import storeSlice from "./storeSlice"
import LoginSlice from "./loginSlice"

const store = configureStore({
    reducer:{
        app : storeSlice,
        login: LoginSlice
    }
})

export default store;
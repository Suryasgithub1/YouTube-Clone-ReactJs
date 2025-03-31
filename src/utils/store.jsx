import { configureStore } from '@reduxjs/toolkit'
import storeSlice from "./storeSlice"

const store = configureStore({
    reducer:{
        app : storeSlice,
    }

})

export default store;
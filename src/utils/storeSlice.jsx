import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice (
    {
        name: "sliderBar",
        initialState :{
            isOpen : "true"
        }, 
        reducers : {
            toggleSidebar : (state) => {
                state.isOpen = !state.isOpen;
            }
        }
    }
)

export default storeSlice.reducer;

export const {toggleSidebar} = storeSlice.actions;
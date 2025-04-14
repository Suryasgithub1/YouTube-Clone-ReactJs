import { createSlice} from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "LoginBtn",
        initialState :{
            isOpen : false
        }, 
        reducers : {
            toggleLoginBtn : (state) => {
                state.isOpen = !state.isOpen;
            }
        }
})

export default LoginSlice.reducer;

export const {toggleLoginBtn} = LoginSlice.actions;


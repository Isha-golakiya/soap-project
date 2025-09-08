import { createSlice } from "@reduxjs/toolkit";

const registerSlice = new createSlice({
    name:'register',
    initialState:{
        registermodal:false,
    },
    reducers:{
        showregistermodal:(state)=>{
            state.registermodal=true
        },
        hideregistermodal:(state)=>{
            state.registermodal=false
        }
    }
})
export const{showregistermodal,hideregistermodal}=registerSlice.actions;
export default registerSlice.reducer;
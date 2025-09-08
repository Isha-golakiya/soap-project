import {createSlice} from '@reduxjs/toolkit';
const loginSlice = new createSlice({
    name:'login',
    initialState:{
        loginmodal:false
    },
    reducers:{
        showloginmodal:(state)=>{
            state.loginmodal=true;
        },
        hideloginmodal:(state)=>{
            state.loginmodal=false;
        }
    }
})
export const{showloginmodal,hideloginmodal}=loginSlice.actions;
export default loginSlice.reducer;

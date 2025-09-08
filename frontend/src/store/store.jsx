import {configureStore} from '@reduxjs/toolkit'
import loginReducer from './slice/login_slice'
import registerReducer from './slice/register_slice'
import userReducer from './slice/user_slice'; 
import cartReducer from  './slice/count_slice'
const store = configureStore({
    reducer:{
        login:loginReducer,
        register:registerReducer,
        cart: cartReducer,
        user: userReducer
    }
})
export default store;
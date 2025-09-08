import {toast, ToastContainer} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { clearToast } from './slice/toast_slice';


const ToastProvider = ({children}) => {

    const toastState = useSelector((state) => state.toast)
    
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(toastState)
        if(toastState.message && toastState.type){
            toast[toastState.type](toastState.message, {
                position:'top-center',
                autoClose:1000,
                hideProgressBar:false,
                draggable:true,
                pauseonhover:true,
                closeonclick:true,
                progress:undefined,                
                onClose:() => {
                    dispatch(clearToast()); 
                }              
            })
        }
    },[toastState, dispatch])
 



    return (
        <>
        {children}
        <ToastContainer/>
        </>

    )
}

export default ToastProvider;

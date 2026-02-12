import { createContext, useContext, useState } from "react";
import Snackbars from "../Components/SnackBar";


const ToastContext = createContext([])

export const ToastProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    function showHideToast(msg){
        setOpen(true);
        setTimeout(() => {
        setOpen(false);
        }, 2000);
        setMessage(msg)
    }

    return (
        <ToastContext.Provider value={{showHideToast}}>
            <Snackbars open = {open} message = {message}/>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext)
}
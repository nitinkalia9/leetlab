import React from "react";
import { useAuthStore } from "../store/useAuthStore";


const LogoutButton = ({children})=>{
    const {logout} = useAuthStore()

    const onLogout = async()=>{
        await logout();
        
    }



    return (
        <button  height='10' backgroundColor='solid' className="btn btn-primary" onClick={onLogout}> 
            {children}
        </button>
    )
}

export default LogoutButton;
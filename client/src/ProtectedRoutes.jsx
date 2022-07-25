import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/Login"}) => {
    const [loggedUser, setLoggedUser]=useState(null)
    const navigation = useNavigate();

    useEffect(() =>{
        setLoggedUser(localStorage.getItem("user") || null)

        if (loggedUser) {
            navigation()
        }else{
            <Navigate to={redirectPath} replace />;
        }

        window.addEventListener("storage", handleStorage)
    },[])

    const handleStorage=(e)=>{
        setLoggedUser(localStorage.getItem("user") || null)
    }

    return children ? children : <Outlet />; 
};

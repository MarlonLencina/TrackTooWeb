import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/authContext";


export const NoRequireAuth = () => {
    const {user} = useAuth();
    const location = useLocation()
    
    return (
        !user ? <Outlet/> : <Navigate to={'/dashboard'} state={{ from: location }} replace />
    )

  }
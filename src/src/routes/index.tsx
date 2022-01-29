import React from "react"
import { BrowserRouter, Routes as ReactDOMRoutes, Route } from "react-router-dom";
import { AuthContextProvider, useAuth } from "../hooks/authContext";
import { NotificationContextProvider } from "../hooks/notificationContext";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Profile } from "../pages/Profile";
import { ResetPassword } from "../pages/ResetPassword";
import { SendForgotPassword } from "../pages/SendForgotPassword";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignIn";
import { NoRequireAuth } from "./noRequireAuth";
import { RequireAuth } from "./requireAuth";


export const Routes = () => {

    return (
        <BrowserRouter>
        
          <AuthContextProvider>
            <NotificationContextProvider>

        <ReactDOMRoutes>
            <Route element={<RequireAuth/>}>
                <Route  path={'/dashboard'} element={<Dashboard/>} />
                <Route  path={'/profile'} element={<Profile/>} />
            </Route>
            <Route element={<NoRequireAuth/>} >
                <Route path={'/'} element={<Home/>} />
                <Route path={'/forgotPassword'} element={<SendForgotPassword/>} />
                <Route path={'/reset/:token'} element={<ResetPassword/>} />
                <Route path={'/signin'} element={<SignIn/>} />
                <Route path={'/signup'} element={<SignUp/>} />
                <Route path={'*'} element={<PageNotFound/>} />
            </Route>
        </ReactDOMRoutes>

        </NotificationContextProvider>
        </AuthContextProvider>

        </BrowserRouter>
    )
    
}

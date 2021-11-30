import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import LoadingPage from "../pages/auth/loadingPage";
import { authMe } from "../redux/action/authLogin";

export default function ProtectAuth({children}) {
    const auth = useSelector((state)=>state.auth.isAuth)
    let dispatch = useDispatch()

    async function authmeHandle() {
        await dispatch(authMe())
    }
    React.useEffect(()=>{
        authmeHandle()
    },[])

    if(auth) return children

    if (!localStorage.getItem("token")) {
        return <Navigate to="/dashboard"/>
    }else{
        return <LoadingPage/>
    }
}
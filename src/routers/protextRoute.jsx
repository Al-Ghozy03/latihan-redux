import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function PrivateRoute({children}) {
    const auth = useSelector((state)=>state.auth.isAuth)
    return auth? children:<Navigate to="/login"></Navigate>
}
import { Navigate } from "react-router"

export default function PrivateRoute({children}) {
    const auth = false
    return auth? children:<Navigate to="/login"></Navigate>
}
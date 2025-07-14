import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"

export default function ProtectedRoute({ children }){
    const {isLoggedIn}= useAuth()
    return(
        isLoggedIn? children : <Navigate to="/" />  
    )
}
import { UserAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectorRuta({children}){
    const {authUser} = UserAuth();

    if(authUser == null){
        return <Navigate to={"/"}/>
    }

    return children
}
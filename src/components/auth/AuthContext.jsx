import { onAuthStateChanged, signOut } from "firebase/auth";
import React , {useEffect, useState, createContext, useContext} from "react";
import { auth } from "../../firebase"

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState({});

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

        return()=>{
            listen();
        }
    },[])

    const userSignOut = () => {
        signOut(auth).then(()=>{
            console.log("Sign out succesfully")
        }).catch(error => console.log(error))
    }

    return(
        <AuthContext.Provider value={{authUser, userSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
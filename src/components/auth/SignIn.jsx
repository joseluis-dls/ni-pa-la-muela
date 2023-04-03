import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import {auth} from "../../firebase"
import "../../styles/signIn.css"
import { useNavigate  } from "react-router-dom";

const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials)=>{
            console.log(userCredentials)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="sign-in_container">
            <div className="imgLogin"></div>
            <div className="formSignIn">
                <form onSubmit={signIn}>
                <h1>Login</h1>
                <div className="i_userName">
                <input 
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" 
                    value={email}/>
                </div>
                
                <div className="i_pass">
                <input 
                    value={password} 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"/>
                </div>
                <div className="textLogin">
                <p>¿No tienes una cuenta? <span><a href="/register">REGISTRATE</a></span></p>
                </div>
                
                    <button type="submit">Acceder</button>
                </form>
            </div>

            
        </div>
    )
}

export default SignIn;
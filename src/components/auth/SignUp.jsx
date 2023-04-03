import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import {auth} from "../../firebase"
import "../../styles/signIn.css"
import { useNavigate  } from "react-router-dom";

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredentials)=>{
            console.log(userCredentials)
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="sign-in_container">
            
            <div className="formSignIn">
            <form onSubmit={signUp}>
                <h1>Crea una cuenta</h1>
                <div className="i_userName">
                <input 
                    type="email" 
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
                <p>¿Ya tienes una cuenta? <span><a href="/login">INICIA SESION</a></span></p>
                </div>
                    <button type="submit">Registrate</button>
            </form>
            </div>
            <div className="imgRegister"></div>
        </div>
    )
}

export default SignUp;
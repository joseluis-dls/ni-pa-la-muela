import React from "react"
import "../styles/headerIndex.css"
import logo from "../img/logo.png"
import { UserAuth } from "./auth/AuthContext"

const HeaderIndex = () => {
    const {authUser,userSignOut} = UserAuth()
    return(
        <React.Fragment>
            <header class="header">
        <div class="logo">
            <img src={logo} alt ="Logo del blog"/>
        </div>
        <nav>
            <u1 class = "nav-links">
                 <li><a href="/restaurants">Restaurantes</a></li> 
                 <li><a href="/aboutus">Contactos</a></li>   
                 {console.log(authUser)}
                 {authUser != null ? <li className="userHead">Bienvenido {authUser.email}</li> : [] }
                 {authUser != null ? <button className="button_closeSesion" onClick={userSignOut}>Cerrar Sesión</button>: <a className="loginRedirect" href="/login">Iniciar Sesion</a>}         
            </u1>
        </nav>
       
    </header>

    <div class="banner">
        <h1>¿De qué tienes antojo, chaparro?</h1>
        <div class="buttonMenu">
            <a href="/restaurants"><button>Ver menu de restaurantes</button></a>
        </div>
    </div>
        </React.Fragment>
    )
}

export default HeaderIndex;
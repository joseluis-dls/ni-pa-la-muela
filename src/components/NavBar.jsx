import React from "react";
import { UserAuth } from "./auth/AuthContext";
import logo from "../img/logo.png"
import "../styles/Navbar.css"

const NavBar = () => {
    const {authUser,userSignOut} = UserAuth()
    return(
        <React.Fragment>
    <header class="header">
        <div class="logo"><a href="/">
            <img src={logo} alt ="Logo del blog"/></a>
        </div>
        <nav>
            <u1 class = "nav-links">
                 <li><a href="/restaurants">Restaurantes</a></li> 
                 <li><a href="/aboutus">Contacto</a></li>
                 {console.log(authUser)}
                 {authUser != null ? <li className="userHead">Bienvenido {authUser.email}</li> : [] }
                 {authUser != null ? <button className="button_closeSesion" onClick={userSignOut}>Cerrar Sesión</button>: <a className="loginRedirect" href="/login">Iniciar Sesion</a>}   
                 <li><a href="/aboutus">About Us</a></li>      
            </u1>
        </nav>
       
    </header>

    </React.Fragment>

    )
}
    
// const NavBar = () => {
//     return(
//         <React.Fragment>
//                 <div className="navbarOutIndex">
//                     <div className="logoNavbar">
//                         <a href="/">
//                             Ni pa la muela
//                         </a>
//                     </div>
//                     <div className="optionsNavbar">
//                         <ul>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="/aboutus">Contactos</a></li>
//                         </ul>
//                     </div>
//                 </div>
//         </React.Fragment>
//     )
// }

export default NavBar
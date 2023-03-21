import React from "react"
import "../styles/headerIndex.css"
import logo from "../img/logo.png"
const HeaderIndex = () => {
    return(
        <React.Fragment>
            <header class="header">
        <div class="logo">
            <img src={logo} alt ="Logo del blog"/>
        </div>
        <nav>
            <u1 class = "nav-links">
                 <li><a href="/restaurants">Restaurantes</a></li>
                 <li><a href="#">Sobre nosotros</a></li>  
                 <li><a href="/aboutus">Contactos</a></li>             
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
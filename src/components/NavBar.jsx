import React from "react";
import "../styles/Navbar.css"
const NavBar = () => {
    return(
        <React.Fragment>
                <div className="navbarOutIndex">
                    <div className="logoNavbar">
                        <a href="/">
                            Ni pa la muela
                        </a>
                    </div>
                    <div className="optionsNavbar">
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="/aboutus">Contactos</a></li>
                        </ul>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default NavBar
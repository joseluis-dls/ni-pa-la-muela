import React from "react"
import "../styles/Footer.css"
import gb from "../img/github-icon.png"
import ig from "../img/ig-icon.png"
import fb from "../img/facebook-icon.png"
import linkedin from "../img/lk-icon.png"

const Footer = () => {
    return(
        <footer>
            <div className="textFooter">
                <div className="imgLogoFooter"></div>
                <h1>Si vas a comer, come rico.</h1>
                <p>Ni Pa La Muela © 2023</p>
            </div>
            <div className="rsFooter">
                <ul>
                    <a href=""><li><img src={gb} alt="" /></li></a>
                    <a href=""><li><img src={ig} alt="" /></li></a>
                    <a href=""><li><img src={fb} alt="" /></li></a>
                    <a href=""><li><img src={linkedin} alt="" /></li></a>
                </ul>

            </div>
        </footer>
    )
}

export default Footer
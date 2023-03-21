import React from "react";
import "../styles/contactCard.css"
import ld from "../img/lk-icon.png"
import gb from "../img/gb-icon.png"
import instagram from "../img/ig-icon.png"

const ContactCard = (props) => {
    const {github, ig, linkedin, name} = props;
    return(
       <React.Fragment>
            <div className="contactCard">
                <div className="contactIcon"></div>
                <div className="infoCard">
                    <h2>{name}</h2>
                    <ul>
                        <li><a href={github}><img src={gb} alt="" /></a></li>
                        <li><a href={linkedin}><img src={ld} alt="" /></a></li>
                        <li><a href={ig}><img src={instagram} alt="" /></a></li>
                    </ul>
                </div>
            </div>
       </React.Fragment> 
    )
}

export default ContactCard
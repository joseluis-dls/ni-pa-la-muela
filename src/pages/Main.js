import React from "react"
import "../styles/Main.css"
import Tarjetero from "../components/Tarjetero"
import HeaderIndex from "../components/HeaderIndex"
import Footer from "../components/Footer"
import { UserAuth } from "../components/auth/AuthContext"

const Main = () => {

    return(
        <React.Fragment>
                <HeaderIndex/>
            
                <Tarjetero/>

                <Footer/>

        </React.Fragment> 
    )
}

export default Main
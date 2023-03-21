import React from "react"
import "../styles/tarjetaRestauranteIzq.css"
import cinco from "../img/stars/cinco-estrellas.jpg"
import cuatro from "../img/stars/cuatro-estrellas.png"
import tres from "../img/stars/tres-estrellas.png"
import dos from "../img/stars/dos-estrellas.png"
import uno from "../img/stars/una-estrella.png"

const PlatilloImgIzq = (props) => {
    const {descriptionSaucer,
        photoOfSaucer,
        priceOfSaucer,
        titleSaucer,
        calificationSaucer} = props
    
    function renderSwitch(calificationSaucer){
        if (calificationSaucer == 5){
            return cinco
        }else if(calificationSaucer == 4){
            return cuatro
        }else if(calificationSaucer == 3){
            return tres
        }else if(calificationSaucer == 2){
            return dos
        }else{
            return uno
        }
    }

    console.log(calificationSaucer)
    return(
        <React.Fragment>
            <div class="platillos">
                <div class="imgPlatillo">
                    <img src={photoOfSaucer} alt="" srcset=""/>
                </div>
                <div class="textoPlatillo">
                    <h1 class="tituloPlatillo">{titleSaucer}</h1>
                    <p>{descriptionSaucer}</p>
                    <h2>Precio: ${priceOfSaucer}</h2>
                    <div class="estrellas"><h3>Calificacion: </h3><img src={renderSwitch(calificationSaucer)} alt=""/></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PlatilloImgIzq
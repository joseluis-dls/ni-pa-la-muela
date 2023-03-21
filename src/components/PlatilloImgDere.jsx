import React from "react";
import "../styles/PlatilloImgDere.css"
const PlatilloImgIzq = () => {
    return(
        <React.Fragment>
            <div class="platillosAlaIzquierda">   
                <div class="textoPlatilloIzq">
                    <h1 class="tituloPlatilloIzq">Rollos De Sushi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est facilis repellat impedit, voluptate, laborum quibusdam veritatis culpa eaque odit aperiam, corrupti incidunt quo dolorum cum pariatur molestias. Culpa, veniam. Minus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ducimus, tempore dolore suscipit eius consectetur iste placeat ratione minima, architecto reiciendis ex nulla, voluptas quisquam eum nemo culpa omnis? Quisquam?</p>
                    <h2>Precio: $80</h2>
                    <div class="estrellasIzq"><h3>Calificacion: </h3><img src="./img/estrellas.png" alt=""/></div>
                </div>
                <div class="imgPlatillo">
                    <img src="https://cdn7.kiwilimon.com/brightcove/6503/6503.jpg" alt="" srcset=""/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PlatilloImgIzq
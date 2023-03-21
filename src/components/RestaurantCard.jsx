import React from "react";
import "../styles/RestaurantCard.css"

const RestaurantCard = (props) => {

    const {nameRestaurant, 
        photoOfRestaurant,
        linkResenas,
        shortDescriptionRestaurant} = props;

    return(
        <div className = "tarjetaRestaurante">
            <div className = "leftSection">
            <img src={photoOfRestaurant} alt=""/>
        </div>
        <div className = "rightSection">
            <h2>{nameRestaurant}</h2>
            <p>{shortDescriptionRestaurant}</p>
            <a href={linkResenas}><button>Ir a la reseña</button></a>
            
        </div>     
    </div>
    )
}

export default RestaurantCard
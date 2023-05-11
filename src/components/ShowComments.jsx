import React, {useState,useEffect} from "react";
import "../styles/showComments.css"

const ShowComments = (props) => {
    const  {user, comments, restaurant} = props


    return(
        <React.Fragment>
            <div className="comment">
                <h1>{user} ha comentado: </h1>
                <p>{comments}</p>
                <h2>Restaurante: {restaurant}</h2>
            </div>
        </React.Fragment>
    )
}

export default ShowComments;
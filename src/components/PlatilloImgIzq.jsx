import React from "react"
import "../styles/tarjetaRestauranteIzq.css"
import cinco from "../img/stars/cinco-estrellas.jpg"
import cuatro from "../img/stars/cuatro-estrellas.png"
import tres from "../img/stars/tres-estrellas.png"
import dos from "../img/stars/dos-estrellas.png"
import uno from "../img/stars/una-estrella.png"
import { UserAuth } from "./auth/AuthContext"
import { useState, useEffect } from 'react';
import {db} from "../firebase"
const PlatilloImgIzq = (props) => {
    const [comment, setComment] = useState("");
    const {authUser} = UserAuth()
    const [comments, setComments] = useState("");

    const {descriptionSaucer,
        photoOfSaucer,
        priceOfSaucer,
        titleSaucer,
        calificationSaucer,
        _id} = props

        // const handleCommentSubmit = async (e) => {
        //     e.preventDefault();
    
        //     if (comment.trim() === "")return;
    
        //     await db.collection("comments").add({
        //         reviewId : _id,
        //         content: comment,
        //         user: authUser.email,
        //         userId: authUser.uid,
        //         createdAt: new Date(),
        //     })
        //     setComment("");
        // }

        // useEffect(()=>{
        //     const unsubscribe = db.collection("comments").where("reviewId", "==", _id).orderBy("createdAt", "desc").onSnapshot((snapshot)=>{
        //         setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        //     })

        //     return () => {
        //         unsubscribe();
        //     }

        // },[_id]);

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
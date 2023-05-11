import React, {useState} from "react";
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import { UserAuth } from "../components/auth/AuthContext"

const Comments =() =>{
    const [textComment, setComment] = useState("")
    const {authUser} = UserAuth()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(collection(db, "comments"), {
            comments: textComment, user: authUser.email, restaurant: "zoo"
        })
        .then(()=>{
            console.log('Document successfully written!');
            window.location.hash = '#';
            window.location.reload()
        })
        .catch((e) =>{
            console.error('Error writing document: ', e);
        })
        setComment("")
    }

    return(
        <React.Fragment>
 
            <div className="commentsDiv" >
                <h1>Opiniones</h1>
                <h2>Hola {authUser != null ? <span>{authUser.email} </span>:[]}opina sobre </h2>
                <div className="commentsFor">
                    <form onSubmit={handleSubmit}>
                        <textarea value={textComment}  onChange={(event) => setComment(event.target.value)} name="" id="" cols="30" rows="10"  ></textarea>
                        {console.log(textComment)}
                        <button type="submit">Comentar</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Comments;
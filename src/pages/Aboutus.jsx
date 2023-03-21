import React, {useState, useEffect} from "react";
import "../styles/Aboutus.css"
import ContactCard from "../components/ContactCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

const Aboutus = () => {
    const URL = "http://localhost:4000/api/contacts";

    const [contacts, setContacts] = useState();

    const fetchApi = async()=> {
        const response  = await fetch(URL);
        const responseJSON = await response.json();

        setContacts(responseJSON)
    }

    useEffect(()=>{
        fetchApi();
    },[])

    let areThereContacts = !contacts

    console.log(contacts)
    return(
        <React.Fragment>
            <NavBar/>

            <h1 className="h1Contacts">Contactos:</h1>

            <div className="contactsDiv">
                {
                    areThereContacts !== true ?
                        contacts.map(i =>
                            <ContactCard
                                key = {i._id}
                                {...i}
                            />
                        ):<h2>Esperando los datos de contactos...</h2>
                }
                
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Aboutus
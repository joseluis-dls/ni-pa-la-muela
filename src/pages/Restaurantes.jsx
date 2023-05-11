import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import "../styles/Restaurantes.css"

const Restaurantes = () => {

    const url = "http://localhost:4000/api/restaurants"
    
    const [restaurants, setRestaurants] = useState();

    const fetchApi = async () => {
        const response = await fetch(url);
        
        const responseJSON = await response.json();
       
        setRestaurants(responseJSON)

    }

    useEffect(()=>{
        fetchApi();
    },[])

    let areThereRestaurants = !restaurants;


    return(
        <React.Fragment>
            <NavBar/>
            <h1 className="h1Restaurante">Restaurantes</h1>
            <div className="cPadre">
                {
                    areThereRestaurants !== true ? console.log(restaurants):[]
                }
                {
                    areThereRestaurants !== true ?
                    restaurants.map(i => 
                            <RestaurantCard
                                key={i._id}
                                {...i}
                            />
                        ): <h1>NO HAY DATOS</h1>
                }

            </div>

            <div className="espacioVacio"></div>

            <Footer/>
        </React.Fragment>
    )
}

export default Restaurantes;
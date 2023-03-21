import React, {useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import PlatilloImgIzq from "../../components/PlatilloImgIzq";
import PlatilloImgDere from "../../components/PlatilloImgDere";
import Footer from "../../components/Footer"
import "../../styles/zo.css"
const Zo = () => {
    const url = "http://localhost:4000/api/restaurants"
    const urlReviews = "http://localhost:4000/api/reviews"
    const [restaurants, setRestaurants] = useState();
    const [reviews, setReviews] = useState();

    const fetchApi = async () => {
        const response = await fetch(url);
        const responseReview = await fetch(urlReviews);
        const responseJSON = await response.json();
        const responseReviewJSON = await responseReview.json();
        setRestaurants(responseJSON)
        setReviews(responseReviewJSON)
    }

    useEffect(()=>{
        fetchApi();
    },[])

    let areThereRestaurants = !restaurants;
    let areThereReviews = !reviews;

    let filterDataZo = areThereRestaurants === false ? restaurants.filter((i)=>{
        return i.nameRestaurant.toLowerCase() === "zo sushi & pizza"
    }): [];

    let filterReviewZo = areThereReviews === false ? reviews.filter((i) => {
        return i.restaurant === "zoo"
    }): [];

    console.log(filterDataZo, filterReviewZo)

    return(
        <React.Fragment>
            <NavBar/>
            <div className="divBlog">

                <div className="topPartPage">
                    {
                            areThereRestaurants === false?
                            <h1>{filterDataZo[0].nameRestaurant}</h1>:
                            <h2>No llega nada perquin</h2>
                    }
                    {
                            areThereRestaurants === false?
                            <p>{filterDataZo[0].shortDescriptionRestaurant}</p>:
                            <p>Esperando...</p>
                    }


                    <div className="imagen"><img src={
                        areThereRestaurants === false?
                        filterDataZo[0].photoOfRestaurant:
                        0
                    } alt=""/></div>
                </div>

                <div className="resena">
                    {
                        areThereReviews !== true ?
                        filterReviewZo.map(i=>
                            <PlatilloImgIzq	
                                key = {i._id}
                                {...i}
                            />
                        ):<h1>No hay datos</h1>

                    }
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Zo
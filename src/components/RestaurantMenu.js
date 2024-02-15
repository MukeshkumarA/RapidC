import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // used to read the dynamic url params
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [ restaurantData, setRestaurantData ] = useState({});


    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setRestaurantData(json.data?.cards[0]?.card?.card?.info);
    }

    return ( 
        <div>
            <h1>RestaurantId:{id}</h1>
            <h2>{restaurantData?.name}</h2>
            <img src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} alt={restaurantData?.name}/>
            <h3>{restaurantData.locality}</h3>
            <h3>{restaurantData.areaName}</h3>
            <h3>{restaurantData.avgRating} stars</h3>
            <h3>{restaurantData.costForTwoMessage}</h3>
        </div>
    );
}

export default RestaurantMenu;


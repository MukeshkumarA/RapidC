import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // used to read the dynamic url params
import { IMG_CDN_URL } from "../utils/constant";
import RestaurantItems from "./RestaurantItems";
import MenuShimmer from "./MenuShimmer";
import { FontAwesomeIcon, faStar } from "./FontAwesome";
import { RESTAURANT_MENU } from "../utils/constant";


const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    // const [itemsConfig, setItemsConfig] = useState({});
    const [isVisible, setIsVisible] = useState(1);
    const [categoryVisible, setCategoryVisible] = useState(-1);


    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_MENU + restaurantId);
        const json = await data.json();
        setRestaurantData(json.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return (!restaurantData) ? <MenuShimmer /> : (
        <div className="flex flex-col items-center relative mt-[5%]">
            <div className="flex justify-around w-full mb-5">
                {/* <h1>RestaurantId:{restaurantId}</h1> */}
                <div className="mb-5 max-w-[50%]">
                    <h2 className="text-2xl font-semibold mb-3">{restaurantData?.name}</h2>
                    {/* <h2>{restaurantData?.areaName}</h2> */}
                    <h2 className="text-sm">{restaurantData?.cuisines?.join(', ')}</h2>
                    <h3 className="text-sm">{restaurantData?.locality}</h3>
                    <h3 className="text-sm">{restaurantData?.city}</h3>
                    {/* <h3>{restaurantData}</h3> */}
                </div>
                <div className="border max-h-20 p-3 border-gray rounded-lg text-center">
                    <h3 className="text-sm">{restaurantData?.avgRating} <FontAwesomeIcon className="text-yellow-500" icon={faStar} /></h3>
                    <hr className="my-2"></hr>
                    <h3 className="text-sm">{restaurantData?.totalRatingsString}</h3>
                </div>
            </div>

            <div className="w-[80%] px-[5%]">
                {restaurantMenu?.map((item, index) => {
                    return (
                        (item.card.card.categories || item.card.card.itemCards) ? (
                            <div key={index} className='mb-3'>
                                <RestaurantItems restaurantData={restaurantData} restaurantItems={item.card} menuIndex={index} isVisible={index == isVisible} setIsVisible={setIsVisible} />
                                <br />
                                <hr className="h-3 bg-green-100" />
                            </div>
                        ) : null
                    );
                })}
            </div>
        </div>
    );

}

export default RestaurantMenu;


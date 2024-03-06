import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // used to read the dynamic url params
import { IMG_CDN_URL } from "../config";
import RestaurantItems from "./RestaurantItems";
import ShimmerComponent from "./Shimmer";
import { FontAwesomeIcon,faStar } from "./FontAwesome";


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
        // const data = await fetch (`https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9715987%26lng%3D77.5945627%26restaurantId%3D${id}`);
        // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data.json();
        console.log(json.data);
        setRestaurantData(json.data?.cards[0]?.card?.card?.info);
        console.log("restaurant data " , json.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    // <div>
    {/* <div>
                <h1>RestaurantId:{id}</h1>
                <h2>{restaurantData?.name}</h2>
                <img src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} alt={restaurantData?.name}/>
                <h3>{restaurantData.locality}</h3>
                <h3>{restaurantData.areaName}</h3>
                <h3>{restaurantData.avgRating} stars</h3>
                <h3>{restaurantData.costForTwoMessage}</h3>
            </div> */}

    //     <div className='p-5'>
    //         {/* <h1>Restaurants</h1> */}
    //         <ul>
    //         {
    //             restaurantMenu?.map((item, index) => {
    //             if (item.card.card.title) {
    //                 // return <MenuItems ItemCards={item?.card?.card?.itemCards || item?.card?.card?.categories} key={index} categoryLength={item?.card?.card?.itemCards?.length || item?.card?.card?.categories?.length} title={item?.card?.card?.title} nestingLevel={0}/>
    //                 // {item?.card?.card?.itemCards.map(item => {
    //                 //     return (
    //                 //         <h1>{item.name}</h1>
    //                 //     );
    //                 // })}
    //                 <h1>{item.card.card.title}</h1>
    //             }
    //             })
    //         }
    //         </ul>
    //     </div>
    // </div>


    return (!restaurantData) ? <ShimmerComponent /> : (
        <div className="flex flex-col items-center relative mt-[5%]">
            <div className="flex justify-around w-full mb-5">
                {/* <h1>RestaurantId:{restaurantId}</h1> */}
                <div className="mb-5">
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
                                <RestaurantItems restaurantData={restaurantData}  restaurantItems={item.card} menuIndex={index} isVisible={index == isVisible} setIsVisible={setIsVisible} />
                                <br />
                                <hr className="h-3 bg-green-100"/>
                            </div>
                        ) : null
                    );
                })}
            </div>
        </div>
    );

}

export default RestaurantMenu;


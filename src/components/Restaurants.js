import { RestaurantList } from "../data/restaurantsData";
import ShimmerComponent from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  areaName,
}) => {
  return (
    <div className="w-[280px] mr-[50px] mb-10 text-left">
      <img
        className="w-full h-[160px] object-cover rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div>
        <h1 className="font-bold text-semiTransparent-blue">{name}</h1>
        <h1 className="font-bold text-semiTransparent-blue">
          {avgRating} stars
        </h1>
        <h2>
          {cuisines?.length > 3
            ? cuisines?.sort().slice(0, 3).join(", ") + "..."
            : cuisines?.join(", ")}
        </h2>
        <h2>{areaName}</h2>
      </div>
    </div>
  );
};

export const RestaurantGrid = () => {

  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    console.log("useeffect");
    getAllRestaurants();
  },[]);

  async function getAllRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  const getRestaurants = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filteredRestaurants = allRestaurants.filter( restaurant => {
        return restaurant?.info?.name.toLowerCase().includes(value.toLowerCase());
    })
    if(value == "")
      setFilteredRestaurants(allRestaurants);
    else
      setFilteredRestaurants(filteredRestaurants);
  };


  return (!filteredRestaurants)? <ShimmerComponent /> :
  (
    <div>
      <div className="text-center">
        <input
          className="border-2  border-black w-[20%]"
          type="text"
          placeholder="Search restaurant.."
          value={searchText}
          onChange={getRestaurants}
        />
        {/* <button onClick={getRestaurants}>search</button> */}
      </div>

       {(filteredRestaurants.length > 0 && allRestaurants)?
       <div className="flex justify-center m-[50px] flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
      :
      <div className="flex justify-center text-red-500">
         <h2>No restaurants found...</h2>
        </div>
      }

    </div>
  );
};



// import { RestaurantList } from "../data/restaurantsData";
import ShimmerComponent from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon,faStar   } from "./FontAwesome";
import Footer from './Footer';
import { RESTAURANT_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  areaName,
}) => {
  return (
    <div className="font-sans w-[280px] mr-[50px] mb-10 text-left hover:scale-95 transition-transform">
      <img
        className="w-full h-[160px] object-cover rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="ml-1">
        <h1 className="font-semibold text-semiTransparent-blue">{name}</h1>
        <h1 className="font-semibold text-semiTransparent-blue">
          {avgRating} <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
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
    const data = await fetch(RESTAURANT_URL);
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
      <SearchComponent searchText={searchText} searchFunction={getRestaurants} />

       {(filteredRestaurants.length > 0 && allRestaurants)?
       <div className="flex  justify-center flex-wrap my-[5%] px-[2%]">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard {...restaurant.info}  />
            </Link>
          );
        })}
      </div>
      :
      <div className="flex justify-center  text-red-500 m-16 p-5">
         <h2 className="text-xl">No restaurants found...</h2>
        </div>
      }

      <Footer />
    </div>
  );
};



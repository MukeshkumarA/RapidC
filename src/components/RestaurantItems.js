import React, { useState } from "react";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../utils/cartSlice";
import { FontAwesomeIcon, faStar, faAngleUp, faAngleDown } from "./FontAwesome";
import PopupMessage from "./PopupMessage";

const RestaurantItems = ({
  restaurantData,
  restaurantItems,
  isVisible,
  setIsVisible,
  menuIndex,
}) => {
  // Check if categories exist
  if (
    restaurantItems?.card?.categories &&
    restaurantItems?.card?.categories?.length > 0
  ) {
    // <button className='p-2 border-2 rounded-lg' onClick={() => setVisible(!isVisible)} type="button">{isVisible ? "Hide" : "Show"}</button>
    return (
      <div>
        <div className="flex justify-between mb-2">
          <h1 className="font-bold text-lg">
            {restaurantItems?.card?.title} (
            {restaurantItems?.card?.categories?.length})
          </h1>
          {isVisible ? (
            <button
              className="p-2"
              onClick={() => setIsVisible(-1)}
              type="button"
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          ) : (
            <button
              className="p-2"
              onClick={() => setIsVisible(menuIndex)}
              type="button"
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          )}
        </div>

        {restaurantItems?.card?.categories?.map((category, index) => (
          <div key={index}>
            <h1 className="font-semibold text-orange-400">
              {category.title} - {category.itemCards.length}
            </h1>
            {category?.itemCards?.map((itemCard, itemIndex) => (
              <div key={itemIndex}>
                {isVisible && (
                  <ItemsCard
                    restaurantData={restaurantData}
                    itemCard={itemCard}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (
    restaurantItems?.card?.itemCards &&
    restaurantItems?.card?.itemCards?.length > 0
  ) {
    // Render item cards directly
    return (
      <div>
        <div className="flex justify-between mb-2">
          <h1 className="font-bold">
            {restaurantItems?.card?.title} (
            {restaurantItems?.card?.itemCards?.length})
          </h1>
          {isVisible ? (
            <button
              className="p-2 text-xl"
              onClick={() => setIsVisible(-1)}
              type="button"
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          ) : (
            <button
              className="p-2 text-xl"
              onClick={() => setIsVisible(menuIndex)}
              type="button"
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          )}
        </div>

        {restaurantItems?.card?.itemCards?.map((itemCard, index) => (
          <div key={index}>
            {isVisible && (
              <ItemsCard
                restaurantData={restaurantData}
                index={index}
                itemCard={itemCard}
              />
            )}
            {/* <hr /> */}
          </div>
        ))}
      </div>
    );
  }
};

export default RestaurantItems;

export const ItemsCard = ({ itemCard, restaurantData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (itemCard) => {
    dispatch(addToCart(itemCard));
    setIsPopupOpen(true);
  };

  const defaultPrice = itemCard?.card?.info.defaultPrice;

  return (
    <div>
      <div className="my-8 flex justify-between">
        {/* <button className='border-2 bg-green-400 p-3' onClick={handleAddItem(itemCard)}>Add</button> */}
        <div className="w-[60%]">
          <h2 className="font-semibold text-">{itemCard.card.info.name}</h2>
          {defaultPrice? 
            <p>₹{itemCard?.card?.info?.defaultPrice / 100}</p> :
            <p>₹{itemCard?.card?.info?.price / 100}</p>
          }
          {/* <p>{itemCard.card.info}</p> */}
          {/* <p>₹{itemCard?.card?.info?.defaultPrice / 100}</p> */}
          <p className="text-sm font-light description">
            {itemCard?.card?.info?.description}
          </p>
        </div>
        <div className="relative w-[6rem]">
          <img
            className="w-full object-cover rounded-lg"
            src={IMG_CDN_URL + itemCard?.card?.info?.imageId}
            alt={itemCard?.card?.info?.name}
          />
          {/* <button className='p-2 border-2 rounded-lg text-white bg-orange-500'>Add item</button> */}
          <button
            className="z-40 bottom-[-5] left-3 absolute px-5 py-1 font-semibold rounded-md text-orange-500 border bg-white hover:border-orange-500"
            onClick={() => handleAddItem(itemCard)}
          >
            Add
          </button>
          {isPopupOpen && (
            <PopupMessage
              message="Item added to the cart."
              position={{
                bottom: "0",
                left: "0",
                right: "0",
                position: "fixed",
                backgroundColor: "orange",
                color: "#fff",
                width: "max-content",
                margin: "auto",
                display: "inline-block",
                background: "#FFA500",
                padding: ".5rem 5%",
                borderRadius: "4px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontSize: "1.25rem", // Corresponds to 20px
                fontWeight: "600",
                zIndex: "9999"
              }}
              closingTime = "800"
              onClose={() => setIsPopupOpen(false)}
            />
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

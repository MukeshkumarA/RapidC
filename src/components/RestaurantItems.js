import React, { useState } from 'react';
import { IMG_CDN_URL } from '../config';
import { Container } from 'postcss';

const RestaurantItems = ({ restaurantItems, isVisible, setIsVisible, menuIndex }) => {

  // Check if categories exist
  if (restaurantItems?.card?.categories && restaurantItems?.card?.categories?.length > 0) {
    // <button className='p-2 border-2 rounded-lg' onClick={() => setVisible(!isVisible)} type="button">{isVisible ? "Hide" : "Show"}</button>
    return (
      <div>
        <h1 className='font-bold text-lg'>{restaurantItems?.card?.title} ({restaurantItems?.card?.categories?.length})</h1>
        {isVisible ? (
            <button className='p-2 border-2 rounded-lg' onClick={() => setIsVisible(-1)} type="button">Hide</button>
            ) : (
                <button className='p-2 border-2 rounded-lg' onClick={() => setIsVisible(menuIndex)} type="button">Show</button>
            )}

        {restaurantItems?.card?.categories?.map((category, index) => (
          <div key={index}>
            <h1 className='font-bold text-xl'>{category.title}  - {category.itemCards.length}</h1>
            
            {/* {categoryVisible ? (
            <button className='p-2 border-2 rounded-lg' onClick={() => setCategoryVisible(-1)} type="button">In</button>
            ) : (
                <button className='p-2 border-2 rounded-lg' onClick={() => setCategoryVisible(temp)} type="button">Out</button>
            )} */}

            {category?.itemCards?.map((itemCard, itemIndex) => (
              <div key={itemIndex}>
                { isVisible &&  <ItemsCard itemCard={itemCard}/> }
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (restaurantItems?.card?.itemCards && restaurantItems?.card?.itemCards?.length > 0) {
    // Render item cards directly
    return (
      <div>
        <h1 className='font-bold'>{restaurantItems?.card?.title} ({restaurantItems?.card?.itemCards?.length})</h1>
        {isVisible ? (
          <button className='p-2 border-2 rounded-lg' onClick={() => setIsVisible(-1)} type="button">Hide</button>
          ) : (
            <button className='p-2 border-2 rounded-lg' onClick={() => setIsVisible(menuIndex)} type="button">Show</button>
        )}
        
        {restaurantItems?.card?.itemCards?.map((itemCard, index) => (
          <div key={index}>
            { isVisible && <ItemsCard itemCard={itemCard}/> }
          </div>
        ))}
      </div>
    );
  }
};

export default RestaurantItems;

export const ItemsCard = ({itemCard}) => {
    return(
        <div>
            <h2 className='font-semibold'>{itemCard.card.info.name}</h2>
            <p>{itemCard.card.info.description}</p>
            <p>Price: {itemCard.card.info.price}</p>
            <img className='w-[80px]' src={IMG_CDN_URL + itemCard.card.info.imageId} alt={itemCard.card.info.name}/>
        </div>
    )
}

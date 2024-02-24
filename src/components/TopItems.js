import React,{ useEffect, useState, useRef } from 'react';
import { TopItemsList } from '../data/topItemsData'
import { IMG_CDN_URL } from '../config'; 
import { TopItemsShimmer } from './Shimmer';

const TopItems = () => {

    const [topItems, setTopItems] = useState();
    const [stIndex, setStIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    // const  itemsToShow = topItems?.slice(stIndex, endIndex);
    // const itemsToShow = topItems;
    const [itemsToShow, setItemsToShow] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
      try{
        getTopItems();
      }
      catch(err){
        console.log(err);
      }
        
      },[]);
    
      async function getTopItems(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const items = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        setTopItems(items);
        setItemsToShow(items);
      }

      

      const moveLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: -520, // Adjust this value based on your requirement
            behavior: 'smooth',
          });
        }
      };
    
      const moveRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: 520, // Adjust this value based on your requirement
            behavior: 'smooth',
          });
        }
      };

    return (
        <>
            <div className=''>
                <div className='flex justify-end mr-5 text-white' key="div1">
                        <button key="left-button"  className='mx-10 bg-blue-700 border-2 p-2' onClick={moveLeft}>Left</button>
                        <button key="right-button" className='bg-blue-700 p-2' onClick={moveRight}>Right</button>
                </div>

                <div className="mx-[12%] py-5 flex overflow-x-scroll overflow-y-hidden scrollbar-hide" key="div2"  ref={containerRef}>
                    {itemsToShow?.map(item => 
                        <div key={item.id} className='carousel-item'>
                            {/* <div>{item.action.text}</div> */}
                            <img className="w-[150px] mx-3" src={IMG_CDN_URL +item.imageId} alt={item.accessibility.altText} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default TopItems;
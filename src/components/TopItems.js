import React,{ useEffect, useState } from 'react';
import { TopItemsList } from '../data/topItemsData'
import { IMG_CDN_URL } from '../config'; 
import { TopItemsShimmer } from './Shimmer';

const TopItems = () => {

    const [topItems, setTopItems] = useState();
    const [stIndex, setStIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    // const  itemsToShow = topItems?.slice(stIndex, endIndex);
    const itemsToShow = topItems;

    useEffect(() => {
        getTopItems();
      },[]);
    
      async function getTopItems(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const items = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        setTopItems(items);
      }

    const moveLeft = () => {
        if(stIndex > 0)
        {
            setStIndex(stIndex - 5);
            setEndIndex(endIndex - 5);
        }
    }
    const moveRight = () => {
        if(endIndex < TopItemsList.length)
        {
            setStIndex(stIndex + 5);
            setEndIndex(endIndex + 5);
        }
    }

    return (!itemsToShow)?<TopItemsShimmer/>: (
        <>
            <div className=''>
                <div className='flex justify-end mr-5 text-white' key="div1">
                        <button key="left-button"  className='mx-10 bg-blue-700 border-2 p-2' onClick={moveLeft}>Left</button>
                        <button key="right-button" className='bg-blue-700 p-2' onClick={moveRight}>Right</button>
                </div>

                <div className="p-5 carousel rounded-box" key="div2" >
                    {itemsToShow?.map(item => 
                        <div key={item.id}>
                            {/* <div>{item.action.text}</div> */}
                            <img className="w-[200px] mx-4 carousel-item" src={IMG_CDN_URL +item.imageId} alt={item.accessibility.altText} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default TopItems;

{/* <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
  </div>
</div> */}
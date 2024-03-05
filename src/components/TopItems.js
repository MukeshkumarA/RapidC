import React, { useEffect, useState, useRef } from 'react';
import { IMG_CDN_URL } from '../config';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/dist/css/themes/splide-default.min.css';




const TopItems = () => {

  const [topItems, setTopItems] = useState();
  const [stIndex, setStIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  // const  itemsToShow = topItems?.slice(stIndex, endIndex);
  // const itemsToShow = topItems;
  const [itemsToShow, setItemsToShow] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    getTopItems();
  }, []);

  async function getTopItems() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
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
    alert("sample");
  };

  const moveRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 520, // Adjust this value based on your requirement
        behavior: 'smooth',
      });
    }
    alert("sample");
  };

  const sample = () => {
    alert("sample");
  }

  return (
    <>
      <div className=''>
        <div className='flex justify-end mr-5 text-white' key="div1">
          <button key="left-button" className='mx-10 bg-blue-700 border-2 p-2' onClick={moveLeft}>Left</button>
          <button key="right-button" className='bg-blue-700 p-2' onClick={moveRight}>Right</button>
        </div>
        {/* <div className='flex justify-end mr-5 text-white' key="div1">
          <button key="left-button" className='mx-10 bg-blue-700 border-2 p-2' onClick={() => containerRef.current.scrollBy({ left: -520, behavior: 'smooth' })}>Left</button>
          <button key="right-button" className='bg-blue-700 p-2' onClick={() => containerRef.current.scrollBy({ left: 520, behavior: 'smooth' })}>Right</button>
        </div> */}

        <div className="mx-[15%] py-5 " key="div2" ref={containerRef}>
          <Splide options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "",
          }}
            onMove={(slide) => {
              containerRef.current.scrollTo({
                left: slide.index * 520,
                behavior: 'smooth',
              });
            }}>
            {itemsToShow?.map(item => {
              return (
                <SplideSlide key={item.id}>
                  <div key={item.id} className='carousel-item'>
                    {/* <div>{item.action.text}</div> */}
                    <img className="w-[130px]" src={IMG_CDN_URL + item.imageId} alt={item.accessibility.altText} />
                  </div>
                </SplideSlide>
              );
            }
            )}
          </Splide>
          <div className='flex justify-end mr-5 text-white' key="div1">

          </div>
        </div>
      </div>
    </>
  );
}

export default TopItems;
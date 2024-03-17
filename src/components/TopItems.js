import React, { useEffect, useState, useRef } from 'react';
import { IMG_CDN_URL } from '../utils/constant';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/themes/splide-default.min.css';
import { FontAwesomeIcon, faArrowRight, faArrowLeft } from './FontAwesome';
import { TOP_ITEMS_URL } from '../utils/constant';


const TopItems = () => {
  const [topItems, setTopItems] = useState();
  const [itemsToShow, setItemsToShow] = useState([]);
  const containerRef = useRef(null);
  const splideRef = useRef(null);

  useEffect(() => {
    getTopItems();
  }, []);

  async function getTopItems() {
    const data = await fetch(TOP_ITEMS_URL);
    const json = await data.json();
    const items = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    setTopItems(items);
    setItemsToShow(items);
  }

  const moveLeft = () => {
    if (splideRef.current) {
      splideRef.current.go('-3'); // Move backward by 3 slides
    }
  };

  const moveRight = () => {
    if (splideRef.current) {
      splideRef.current.go('+3'); // Move forward by 3 slides
    }
  };

  const sample = () => {
    alert("sample");
  }

  return (
    <>
      <div className='relative'>
        <div className='z-40 absolute top-[-16]  right-[15%] md:right-[20%]' key="div1">
          <button key="left-button" className='mx-2 px-2  py-1 rounded-full  border focus:border-black' onClick={moveLeft}><FontAwesomeIcon className='icon text-black' icon={faArrowLeft} /></button>
          <button key="right-button" className='mx-2 px-2  py-1 rounded-full border  focus:border-black' onClick={moveRight}><FontAwesomeIcon className='icon text-black' icon={faArrowRight} /></button>
        </div>

        <div className="mt-12 mx-[15%] py-5 " key="div2" ref={containerRef}>
          <Splide options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "",
            slide: true
          }}
            ref={splideRef}
            onMove={(slide) => {
              containerRef.current.scrollTo({
                left: slide.index * 520,
                behavior: 'smooth',
              });
            }}
          >
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
        </div>
      </div>
    </>
  );
}

export default TopItems;
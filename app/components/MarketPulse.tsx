'use client';

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Trae from './Trae';



const MarketPulse = () => {
    const tickers = [
        {
            name: "APPL",
            val$: 1.8,
            icon: " ",
        },
        {
            name: "NTLX",
            val$: -2.7,
            icon: " ",
        },
        {
            name: "TSLA",
            val$: 0.9,
            icon: " ",
        },
        {
            name: "BBCC",
            val$: 0.9,
            icon: " ",
        },

    ];
  return (
    <>
    <div className='h-140 md:h-190 w-screen gradient-bg rounded-[75px] my-20 shadow-2xl'>
        <div className='h-full w-full relative z-10 text-white py-15 px-5 md:px-30'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-center'><span className='text-black bg-white px-2 py-0 mr-2 rounded-xl'>LIVE</span> Market Pulse</h1>
            <div className='w-full h-9/10 md:h-2/3 flex flex-col lg:flex-row justify-center items-center mt-10 md:mt-30'>
                <div className='w-3/4 md:w-1/2 h-full'>
                {/* Chart Component */}
                </div>
                <div className='w-6/7 md:w-1/2 h-full flex flex-row'>
                <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                {/* Tickers */}
                {tickers.map((item) => (
                    <div key={item.name} className='flex text-md md:text-lg md:py-0 p-1 w-full h-1/6 sm:h-1/8 flex-row justify-between items-center rounded-full my-2 px-3 border-2 border-white'>
                        <div className='w-1/4 h-full flex flex-row justify-around items-center'>
                            <img className="w-1/3 h-1/2" src={item.icon}/>
                            <h1>{item.name}</h1>
                        </div>
                        <h1 className={`font-bold ${ item.val$<0 ? "text-red-500" : "text-white"}`}>{item.val$}%</h1>
                    </div>
                ))}
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                {/* No Data */}
                <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} loop={true} spaceBetween={20} slidesPerView={1} autoplay={{delay:5000, disableOnInteraction: false}} className="w-3/4 h-1/2 flex items-center justify-center">
                    <SwiperSlide>
                        <div className="w-full h-full border-2 border-white p-3 rounded-xl">
                        <p>No Data</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full p-3 rounded-xl bg-white/69">
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                
                </div>
                </div>
            </div>
        </div>
    </div>

    <Trae/>
    </>
  )
}

export default MarketPulse
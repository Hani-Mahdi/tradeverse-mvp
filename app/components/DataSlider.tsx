'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const DataSlider = () => {
  return (
    <>
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
    </>
  )
}

export default DataSlider
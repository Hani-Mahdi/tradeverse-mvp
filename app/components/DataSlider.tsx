'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NewsItem } from '../types/NewsItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props{
  data: NewsItem[],
}


const DataSlider = ({data}: Props) => {
  return (
    <>
      <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} loop={true} spaceBetween={20} slidesPerView={1} autoplay={{delay:5000, disableOnInteraction: false}} className="w-3/4 h-1/2 flex items-center justify-center">
        <SwiperSlide>
            <div className="w-full h-full border-2 border-white p-3 rounded-xl">
              <a href={data[0].url}>
                <h1 className='text-[10px] md:text-xl font-bold mb-4'>{data[0].headline.slice(0, 40)}...</h1>
                <p className='text-[8px] sm:text-lg'>{data[0].summary}</p>
              </a>  
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href={data[0].url}>
            <div className="w-full h-full p-3 absolute rounded-xl">
            <div className='absolute w-full h-full bg-cover z-10 inset-0 rounded-xl bg-white/9'></div>
            <img src={data[0].image} className='my-auto relative w-full h-1/2'/>
            </div>
          </a>
        </SwiperSlide>
    </Swiper>
    </>
  )
}

export default DataSlider
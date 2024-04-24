import React from 'react'
import MC1 from '../assets/MC1.jpg'
import MC2 from '../assets/MC2.png'
import MC3 from '../assets/MC3.jpg'
import MC4 from '../assets/MC4.jpg'
import MC5 from '../assets/MC5.jpg'
import MC6 from '../assets/MC6.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay ,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainCarousel = () => {
    return (
    <div className='relative mt-5 bg-white w-full'>
    <Swiper    loop={true} spaceBetween={0} navigation={true} modules={[Navigation, Autoplay]} autoplay={{   delay: 4500, }} className="h-[50%]">
      <SwiperSlide>
        <img src={MC1} alt='' className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={MC2} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={MC3} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={MC4} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={MC5} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={MC6} alt=''/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default MainCarousel
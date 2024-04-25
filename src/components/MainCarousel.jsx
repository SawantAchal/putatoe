import React from 'react';
import MC1 from '../assets/MC1.jpg';
import MC3 from '../assets/MC3.jpg';
import MC4 from '../assets/MC4.jpg';
import MC5 from '../assets/MC5.jpg';
import MC6 from '../assets/MC6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MainCarousel = () => {
  return (
    <div className="relative mt bg-white h-64">
      <Swiper loop={true} spaceBetween={0} navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 4500 }} className=" h-60 shadow-2xl">
        <SwiperSlide>
          <img src={MC1} alt="" className="w-full h-full  object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MC3} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MC4} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MC5} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MC6} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainCarousel;


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"


const Swipper = () => {
    return (
        <div className='max-w-5xl mx-auto my-6'>

            <div className=' my-10' >
                <hr className=' bg-slate-500 h-1.5 w-72 mx-auto' />
                <h2 className='text-[40px] font-normal text-center'>ORDER ONLINE</h2>
                <hr className=' bg-slate-500 h-1.5 w-72 mx-auto' />
            </div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" /></SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Swipper;
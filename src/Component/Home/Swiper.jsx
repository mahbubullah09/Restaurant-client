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
import SharedTitele from '../SharedComponent/SharedTitle';


const Swipper = () => {
    return (
        <div className='max-w-5xl mx-auto my-6'>

          <SharedTitele subHeading={'From 11:00am to 10:00pm'}
          heading={"ORDER ONLINE"} />
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
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
                    <SwiperSlide><img src={img1} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-11'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-11'>Soups</h2>

                    </SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-11'>pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-11'>desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-11'>Salads</h2>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Swipper;
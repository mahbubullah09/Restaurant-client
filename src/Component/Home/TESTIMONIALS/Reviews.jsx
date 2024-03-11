import { data } from "autoprefixer";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SharedTitele from "../../SharedComponent/SharedTitle";
import StarRatings from "react-star-ratings";

import img from "../../../assets/quote.png"


const Reviews = () => {

    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);
    return (
        <div className="max-w-4xl mx-auto">
            <SharedTitele subHeading={'What Our Clients Say'}
                heading={"TESTIMONIALS"} />

            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews?.map((data, idx) => <SwiperSlide key={idx}>

                            <div className=" text-center">
                                <StarRatings
                                    rating={data?.rating}
                                    starRatedColor="orange"
                                    starDimension="40px"
                                    starSpacing="15px"
                                />
                                <img className="w-20 mx-auto my-4" src={img} alt="" />
                                <p className=" max-w-[1096px] mx-auto text-lg px-14">{data?.details}</p>
                                <h2 className=" text-[#CD9003] text-3xl mt-4 mb-8">{data?.name}</h2>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </>

        </div>
    );
};

export default Reviews;
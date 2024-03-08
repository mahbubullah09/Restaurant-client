// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
 
import img1 from "../../assets/home/01.jpg"
import img2 from "../../assets/home/02.jpg"
import img3 from "../../assets/home/03.png"
import img4 from "../../assets/home/04.jpg"
import img5 from "../../assets/home/05.png"
import img6 from "../../assets/home/06.png"



const Banner = () => {
    return (
        <div>

<>
      <Swiper
       loop={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>

      </Swiper>
    </>
        </div>
    );
};

export default Banner;
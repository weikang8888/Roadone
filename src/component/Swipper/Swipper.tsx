import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import SwiperImage1 from "../../static/picture/swiper1.webp";
import SwiperImage2 from "../../static/picture/swiper2.jpg";
import SwiperImage3 from "../../static/picture/swiper3.jpg";


SwiperCore.use([Navigation, Pagination]);

const Swipper = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container"
        id="banner">
        <SwiperSlide>
          <a href="products1.html">
            <img src={SwiperImage1} width="1920" height="600" alt="banner1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="products1.html">
            <img src={SwiperImage2} width="1920" height="600" alt="banner2" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="products1.html">
            <img src={SwiperImage3} width="1920" height="600" alt="banner3" />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" id="bannerNav"></div>
    </>
  );
};

export default Swipper;

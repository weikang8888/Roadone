import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import SwiperImage1 from "../../static/assets/image/banner_1.jpg";
import SwiperImage2 from "../../static/assets/image/banner_2.jpg";
import SwiperImage3 from "../../static/assets/image/banner_3.jpg";
import SwiperImage4 from "../../static/assets/image/banner_4.jpg";
import SwiperImage5 from "../../static/assets/image/banner_5.jpg";

SwiperCore.use([Navigation, Pagination]);

const Swipper = () => {
  const swiperSlides = [
    { image: SwiperImage1, link: "products1.html" },
    { image: SwiperImage2, link: "products1.html" },
    { image: SwiperImage3, link: "products1.html" },
    { image: SwiperImage4, link: "products1.html" },
    { image: SwiperImage5, link: "products1.html" },
  ];

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container"
        id="banner">
        {swiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a
              href={slide.link}
              className="banner5"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swipper;

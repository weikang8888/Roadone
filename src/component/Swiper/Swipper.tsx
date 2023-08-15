import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SwipperOptions {
  swiperImage: string[];
  imageClassName: string;
}

const Swipper = ({ swiperImage, imageClassName }: SwipperOptions) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="swiper-container"
      id="banner">
      {swiperImage.map((image, index) => (
        <SwiperSlide key={index}>
          <a
            href=""
            className={imageClassName}
            style={{ backgroundImage: `url(${image})` }}></a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;

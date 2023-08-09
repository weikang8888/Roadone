import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

interface SwipperOptions {
  swiperImage: string[];
  paginationTF: boolean;
  loopTF: boolean;
}

const Swipper_m = ({ swiperImage, paginationTF, loopTF }: SwipperOptions) => {
  return (
    <Swiper
      pagination={paginationTF}
      loop={loopTF}
      className="swiper-container"
      id="banner">
      {swiperImage.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper_m;

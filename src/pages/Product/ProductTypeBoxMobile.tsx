import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

interface ProductTypeMobileOptions {
  showTruckList: boolean;
  showBusList: boolean;
}

const ProductTypeMobile = ({
  showTruckList,
  showBusList,
}: ProductTypeMobileOptions) => {
  return (
    <>
      
      <div className="typebox_m">
        {showTruckList && (
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            className="swiper-container"
            id="banner">
            <SwiperSlide>
              <NavLink to="/products/truck/long-haul-wearable">
                Long Haul Wearable Tyres
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/middle-long-distance">
                Middle & Long Distance
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/middle-short-distance">
                Middle & Short Distance
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/quarry-building-site">
                Quarry & Building Sites
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-off-road">
                High End Off-road Tyres
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-heavy-loading">
                High End Heavy Loading Tyres
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-wearable">
                HIGH END WEARABLE TYRE
              </NavLink>
            </SwiperSlide>
          </Swiper>
        )}

        {showBusList && (
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            className="swiper-container"
            id="banner">
            <SwiperSlide>
              <NavLink to="/products/bus/inter-city">Inter-city Bus</NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/bus/city-bus">City-city Bus </NavLink>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </>
  );
};

export default ProductTypeMobile;

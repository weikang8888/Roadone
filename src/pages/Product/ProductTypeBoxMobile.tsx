import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination]);

interface ProductTypeMobileOptions {
  showTruckList: boolean;
  showBusList: boolean;
}

const ProductTypeMobile = ({
  showTruckList,
  showBusList,
}: ProductTypeMobileOptions) => {
  const { t } = useTranslation();

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
                {t("products.longHaulWearable")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/middle-long-distance">
                {t("products.middleLongDistance")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/middle-short-distance">
                {t("products.middleShortDistance")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/quarry-building-site">
                {t("products.quarryBuidlingSites")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-off-road">
                {t("products.highEndOffRoad")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-heavy-loading">
                {t("products.highEndHeavyLoading")}
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/truck/high-end-wearable">
                {t("products.highEndWearable")}
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
              <NavLink to="/products/bus/inter-city">{t("products.interCityBus")}</NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/products/bus/city-bus">{t("products.cityCityBus")} </NavLink>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </>
  );
};

export default ProductTypeMobile;

import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProductTypeBoxOptions {
  activeLink: string;
  showTruckList: boolean;
  showBusList: boolean;
}

const ProductTypeBox = ({
  activeLink,
  showTruckList,
  showBusList,
}: ProductTypeBoxOptions) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="typebox">
        {showTruckList && (
          <ul className="clearfix">
            <li>
              <NavLink
                to="/products/truck/long-haul-wearable"
                className={activeLink === "long-haul-wearable" ? "cpfl2" : ""}>
                {t("products.longHaulWearable")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/middle-long-distance"
                className={
                  activeLink === "middle-long-distance" ? "cpfl2" : ""
                }>
                {t("products.middleLongDistance")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/middle-short-distance"
                className={
                  activeLink === "middle-short-distance" ? "cpfl2" : ""
                }>
                {t("products.middleShortDistance")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/quarry-building-site"
                className={
                  activeLink === "quarry-building-site" ? "cpfl2" : ""
                }>
                {t("products.quarryBuidlingSites")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-off-road"
                className={activeLink === "high-end-off-road" ? "cpfl2" : ""}>
                {t("products.highEndOffRoad")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-heavy-loading"
                className={
                  activeLink === "high-end-heavy-loading" ? "cpfl2" : ""
                }>
                {t("products.highEndHeavyLoading")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-wearable"
                className={activeLink === "high-end-wearable" ? "cpfl2" : ""}>
                {t("products.highEndWearable")}
              </NavLink>
            </li>
          </ul>
        )}

        {showBusList && (
          <ul className="clearfix">
            <li>
              <NavLink
                to="/products/bus/inter-city"
                className={activeLink === "inter-city" ? "cpfl2" : ""}>
                {t("products.interCityBus")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/bus/city-bus"
                className={activeLink === "city-bus" ? "cpfl2" : ""}>
                {t("products.cityCityBus")}
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductTypeBox;

import React from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <div className="typebox">
        {showTruckList && (
          <ul className="clearfix">
            <li>
              <NavLink
                to="/products/truck/long-haul-wearable"
                className={activeLink === "long-haul-wearable" ? "cpfl2" : ""}>
                Long Haul Wearable Tyres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/middle-long-distance"
                className={
                  activeLink === "middle-long-distance" ? "cpfl2" : ""
                }>
                Middle & Long Distance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/middle-short-distance"
                className={
                  activeLink === "middle-short-distance" ? "cpfl2" : ""
                }>
                Middle & Short Distance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/quarry-building-site"
                className={
                  activeLink === "quarry-building-site" ? "cpfl2" : ""
                }>
                Quarry & Building Sites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-off-road"
                className={activeLink === "high-end-off-road" ? "cpfl2" : ""}>
                High End Off-road Tyres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-heavy-loading"
                className={
                  activeLink === "high-end-heavy-loading" ? "cpfl2" : ""
                }>
                High End Heavy Loading Tyres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/truck/high-end-wearable"
                className={activeLink === "high-end-wearable" ? "cpfl2" : ""}>
                HIGH END WEARABLE TYRE
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
                Inter-city Bus
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/bus/city-bus"
                className={activeLink === "city-bus" ? "cpfl2" : ""}>
                City-city Bus
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductTypeBox;

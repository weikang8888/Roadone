import React from "react";
import { NavLink } from "react-router-dom";

const ProductMainBox = ({ activeLink }) => {
  return (
    <ul className="clearfix">
      <li>
        <NavLink
          to="/products/truck"
          className={activeLink === "truck" ? "cd_fl" : ""}>
          Truck Tyres
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products/light-truck"
          className={activeLink === "light-truck" ? "cd_fl" : ""}>
          Light Truck Tyres
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products/bus"
          className={activeLink === "bus" ? "cd_fl" : ""}>
          Bus Tyres
        </NavLink>
      </li>
    </ul>
  );
};

export default ProductMainBox;

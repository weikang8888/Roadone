import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductMainBox = ({ activeLink }) => {
  const { t } = useTranslation();

  return (
    <ul className="clearfix">
      <li>
        <NavLink
          to="/products/truck"
          className={activeLink === "truck" ? "cd_fl" : ""}>
          {t("header.truckTyre")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products/light-truck"
          className={activeLink === "light-truck" ? "cd_fl" : ""}>
          {t("header.lightTruckTyre")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products/bus"
          className={activeLink === "bus" ? "cd_fl" : ""}>
          {t("header.busTyre")}
        </NavLink>
      </li>
    </ul>
  );
};

export default ProductMainBox;

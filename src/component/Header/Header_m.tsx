import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useTranslation } from "react-i18next";

import LogoMobile from "../../static/assets/m/logo.png";
import MenuMobile from "../../static/assets/m/menu.png";
import CloseMenuMobile from "../../static/assets/m/menu_on.png";
import "./header_m.css";

const Header_m = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const changeToEnglish = () => {
    changeLanguage("en");
  };
  const changeToChinese = () => {
    changeLanguage("zh");
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClose, setMenuClose] = useState("closed");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  };
  useEffect(() => {
    // Update the overflow property of the body element based on menuOpen state
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="header clearfix">
        <div className="header_box">
          <div
            className="xiala fl"
            onClick={() => {
              setMenuOpen(!menuOpen);
              toggleMenu();
              setMenuClose(menuClose === "closed" ? "open" : "closed");
            }}>
            <img
              src={menuClose === "closed" ? MenuMobile : CloseMenuMobile}
              alt="Menu"
            />
          </div>
          <div className="logo">
            <NavLink to="/">
              <img src={LogoMobile} title="Roadone" />
            </NavLink>
          </div>
        </div>
        <SlideDown className="xiala1" closed={!menuOpen}>
          <ul>
            <li>
              <NavLink to="/"> {t("header.home")}</NavLink>
            </li>
            <li>
              <NavLink to="/news"> {t("header.news")}</NavLink>
            </li>
            <li>
              <NavLink to="/products"> {t("header.products")}</NavLink>
            </li>
            <li>
              <NavLink to="/services/tyre-class">
                {" "}
                {t("header.service")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/recruitment"> {t("header.recruitment")}</NavLink>
            </li>
            <li>
              <NavLink to="/about/roadone"> {t("header.about")}</NavLink>
            </li>
          </ul>
          <div className="xiala1_f">
            <NavLink to="" onClick={changeToChinese}>
              中文
            </NavLink>
            <NavLink to="" onClick={changeToEnglish}>
              English
            </NavLink>
            <NavLink to="http://www.hixih.com.cn/" target="_blank">
              {t("header.hixihGroup")}
            </NavLink>
          </div>
        </SlideDown>
      </div>
    </>
  );
};

export default Header_m;

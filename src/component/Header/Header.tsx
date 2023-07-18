import React, { useEffect, useState } from "react";
// import { a, a } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";
import Logo from "../../static/image/main/logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false); // Added state variable for submenu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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

  return (
    <>
      <nav className="navbar">
        <div className="container1 clearfix top d-flex">
          <div className="pull-left logo">
            <a href="/">
              <img src={Logo} alt="Tongli Tyre Co.,Ltd" />
            </a>
          </div>
          <div id="nav-menu">
            <div id="nav">
              <ul
                className={`menu nav_en site_363820 ${
                  isMenuOpen ? "d-block" : ""
                }`}>
                <li id="liHome">
                  <a href="/" className="inmenu">
                    {t("header.home")}
                  </a>
                </li>
                <li id="liproducts">
                  <a href="/products" className="inmenu">
                    {t("header.product")}
                  </a>
                  {/* <ul className="submenu nav0 ">
                    <li className="side_nav1" id="HeadProCat1">
                      <a href="">Truck Tyre</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat2">
                      <a href="">Bus Tyre</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat3">
                      <a href="">Light Truck Tyre</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat4">
                      <a href="">RADIAL OTR TIRES</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat5">
                      <a href="">ROADONE TYRE DEMONSTRATION</a>
                    </li>
                  </ul> */}
                </li>
                <li id="liabout-us">
                  <a href="/about" className="inmenu">
                    {t("header.about")}
                  </a>
                </li>
                <li id="linewslist-1">
                  <a href="/news" className="inmenu">
                    {t("header.news")}
                  </a>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li id="HeadNewsCat1">
                      <a href="/news/newproducts" title="New products">
                        {t("header.new-products")}
                      </a>
                    </li>
                    <li id="HeadNewsCat2">
                      <a href="/news/tradefair" title="Trade Fair">
                        {t("header.trade-fair")}
                      </a>
                    </li>
                    <li id="HeadNewsCat3">
                      <a href="/news/tyretest" title="TYRE TEST">
                        {t("header.tyre-test")}
                      </a>
                    </li>
                    <li id="HeadNewsCat4">
                      <a href="/news/companyupdate" title="Company update">
                        {t("header.company-update")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="liInfo">
                  <a href="/services" className="inmenu">
                    {t("header.service")}
                  </a>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li id="HeadIndustryCat1">
                      <a href="/services/companynews" title="Company News">
                        {t("header.company-news")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="licontact-us">
                  <a href="/contact" className="inmenu">
                    {t("header.contact")}
                  </a>
                </li>
                {/* <li id="lidownload">
                  <a href="/download" className="inmenu">
                    {t("header.download")}
                  </a>
                </li> */}
                <li id="liInfo">
                  <a className="inmenu"> {t("header.language")} </a>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li onClick={changeToEnglish} className="laugage_cursor">
                      <a> {t("header.english")}</a>
                    </li>
                    <li onClick={changeToChinese} className="laugage_cursor">
                      <a>{t("header.chinese")}</a>
                    </li>
                  </ul>
                </li>
                <div className="clr"></div>
              </ul>
              <span className="fr nbtn" onClick={toggleMenu}>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

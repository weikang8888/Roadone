import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
            <Link to="/">
              <img src={Logo} alt="Tongli Tyre Co.,Ltd" />
            </Link>
          </div>
          <div id="nav-menu">
            <div id="nav">
              <ul
                className={`menu nav_en site_363820 ${
                  isMenuOpen ? "d-block" : ""
                }`}>
                <li id="liHome">
                  <NavLink to="/" className="inmenu">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li id="liproducts">
                  <NavLink to="/products" className="inmenu">
                    {t("header.product")}
                  </NavLink>
                  {/* <ul className="submenu nav0 ">
                    <li className="side_nav1" id="HeadProCat1">
                      <Link to="">Truck Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat2">
                      <Link to="">Bus Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat3">
                      <Link to="">Light Truck Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat4">
                      <Link to="">RADIAL OTR TIRES</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat5">
                      <Link to="">ROADONE TYRE DEMONSTRATION</Link>
                    </li>
                  </ul> */}
                </li>
                <li id="liabout-us">
                  <NavLink to="/about" className="inmenu">
                    {t("header.about")}
                  </NavLink>
                </li>
                <li id="linewslist-1">
                  <NavLink to="/news" className="inmenu">
                    {t("header.news")}
                  </NavLink>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li id="HeadNewsCat1">
                      <Link to="/news/newproducts" title="New products">
                        New products
                      </Link>
                    </li>
                    <li id="HeadNewsCat2">
                      <Link to="/news/tradefair" title="Trade Fair">
                        Trade Fair
                      </Link>
                    </li>
                    <li id="HeadNewsCat3">
                      <Link to="/news/tyretest" title="TYRE TEST">
                        TYRE TEST
                      </Link>
                    </li>
                    <li id="HeadNewsCat4">
                      <Link to="/news/companyupdate" title="Company update">
                        Company update
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="liInfo">
                  <NavLink to="/services" className="inmenu">
                    {t("header.service")}
                  </NavLink>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li id="HeadIndustryCat1">
                      <Link to="/services/companynews" title="Company News">
                        Company News
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="licontact-us">
                  <NavLink to="/contact" className="inmenu">
                    {t("header.contact")}
                  </NavLink>
                </li>
                {/* <li id="lidownload">
                  <NavLink to="/download" className="inmenu">
                    {t("header.download")}
                  </NavLink>
                </li> */}
                <li id="liInfo">
                  <a className="inmenu"> {t("header.language")} </a>
                  <ul
                    className={`submenu ${
                      isSubMenuOpen ? "display-block" : ""
                    }`}>
                    <li>
                      <Link to="" onClick={changeToEnglish}>
                        English
                      </Link>
                    </li>
                    <li>
                      <Link to="" onClick={changeToChinese}>
                        Chinese
                      </Link>
                    </li>
                  </ul>
                </li>

                <div className="clr"></div>
              </ul>
              <span className="fr nbtn" onClick={toggleMenu}>
                Menu
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

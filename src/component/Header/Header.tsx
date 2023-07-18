import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";
import Logo from "../../static/image/main/logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
        <div className="container1 clearfix top">
          <div className="row align-items-center justify-content-between">
            <div id="Logo">
              <Link to="/">
                <img src={Logo} alt="Tongli Tyre Co.,Ltd" />
              </Link>
            </div>
            <div>
              {isMenuOpen && (
                <ul className="menu">
                  <li>
                    <NavLink to="/" className="inmenu">
                      {t("header.home")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products" className="inmenu">
                      {t("header.product")}
                    </NavLink>
                    {/* <ul className="submenu nav0 ">
                    <li className="side_nav1" id="HeadProCat1">
                      <Link to="">Truck Tyre</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat2">
                      <Link to="">Bus Tyre</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat3">
                      <Link to="">Light Truck Tyre</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat4">
                      <Link to="">RADIAL OTR TIRES</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat5">
                      <Link to="">ROADONE TYRE DEMONSTRATION</Link>
                    </li>
                  </ul> */}
                  </li>
                  <li>
                    <NavLink to="/about" className="inmenu">
                      {t("header.about")}
                    </NavLink>
                  </li>
                  <li id="linewslist">
                    <NavLink to="/news" className="inmenu">
                      {t("header.news")}
                    </NavLink>
                    <ul className={"submenu"}>
                      <li id="HeadNewsCat1">
                        <Link to="/news/newproducts" title="New products">
                          {t("header.new-products")}
                        </Link>
                      </li>
                      <li id="HeadNewsCat2">
                        <Link to="/news/tradefair" title="Trade Fair">
                          {t("header.trade-fair")}
                        </Link>
                      </li>
                      <li id="HeadNewsCat3">
                        <Link to="/news/tyretest" title="TYRE TEST">
                          {t("header.tyre-test")}
                        </Link>
                      </li>
                      <li id="HeadNewsCat4">
                        <Link to="/news/companyupdate" title="Company update">
                          {t("header.company-update")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="liInfo">
                    <NavLink to="/services" className="inmenu">
                      {t("header.service")}
                    </NavLink>
                    <ul className={"submenu"}>
                      <li id="HeadIndustryCat1">
                        <Link to="/services/companynews" title="Company News">
                          {t("header.company-news")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
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
                    <ul className={"submenu"}>
                      <li onClick={changeToEnglish} className="laugage_cursor">
                        <a> {t("header.english")}</a>
                      </li>
                      <li onClick={changeToChinese} className="laugage_cursor">
                        <a>{t("header.chinese")}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
            <span className="fr nbtn" onClick={toggleMenu}>
              Menu
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

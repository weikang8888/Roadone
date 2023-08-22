import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderOption {
  logo: string;
  logoDivClassName: string;
  logoClassName: string;
}

const Header = ({ logo, logoDivClassName, logoClassName }: HeaderOption) => {
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
      <div className="nav clearfixzz container p-0">
        <div className="d-flex justify-content-between">
          <div className="ps-5">
            <div className={logoDivClassName}>
              <NavLink to="">
                <img src={logo} className={logoClassName} title="Roadone" />
              </NavLink>
            </div>
          </div>
          <div className="nav_box fr">
            <div className="nav_d1 clearfix">
              <p className="nav_d1_box fr">
                <NavLink to="" onClick={changeToChinese}>
                  中文
                </NavLink>
                <NavLink to="" onClick={changeToEnglish}>
                  English
                </NavLink>
                <NavLink to="http://www.hixih.com.cn/" target="_blank">
                  {t("header.hixihGroup")}
                </NavLink>
              </p>
            </div>
            <div className="nav_main in_nav_main">
              <ul className="clearfix">
                <li>
                  <NavLink to="/" className="a1 current" id="nav0">
                    {t("header.home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" className="a1" id="nav1">
                    {t("header.news")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className="a1" id="nav2">
                    {t("header.products")}
                  </NavLink>
                  <div className="lb product-submenu">
                    <Link to="/products/truck/">{t("header.truckTyre")}</Link>
                    <Link to="/products/light-truck">
                      {t("header.lightTruckTyre")}
                    </Link>
                    <Link to="/products/bus">{t("header.busTyre")}</Link>
                  </div>
                </li>
                <li>
                  <NavLink to="/services/tyre-class" className="a1" id="nav4">
                    {t("header.service")}
                  </NavLink>
                  <div className="lb service-submenu">
                    <Link to="/services/tyre-class">
                      {t("header.tyreClass")}
                    </Link>
                    <Link to="/services/guestbook">
                      {t("header.guestBook")}
                    </Link>
                    <Link to="/services/download">{t("header.download")}</Link>
                  </div>
                </li>
                <li>
                  <NavLink to="/recruitment" className="a1" id="nav5">
                    {t("header.recruitment")}
                  </NavLink>
                  <div className="lb recruitment-submenu">
                    <Link to="/recruitment/social">
                      {t("header.socialRecruitment")}
                    </Link>
                    <Link to="/recruitment/campus">
                      {t("header.campusRecruitment")}
                    </Link>
                  </div>
                </li>
                <li>
                  <NavLink to="/about/roadone" className="a1" id="nav6">
                    {t("header.about")}
                  </NavLink>
                  <div className="lb aboutus-submenu">
                    <Link to="/about/roadone">{t("header.aboutRoadone")}</Link>
                    <Link to="/about/social-responsibility">
                      {t("header.csr")}
                    </Link>
                    <Link to="/about/contact">{t("header.contactUs")}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

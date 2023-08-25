import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./footermobile.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Qrcode from "../../static/assets/m/erweima.png";

const FooterMobile = () => {
  const { t } = useTranslation();

  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const toggleProduct = () => {
    setProductOpen(!productOpen);
  };
  const toggleService = () => {
    setServiceOpen(!serviceOpen);
  };

  const toggleRecruitment = () => {
    setRecruitmentOpen(!recruitmentOpen);
  };

  const toggleAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };
  return (
    <>
      <div className="foot">
        <div className="sfq">
          <ul>
            <li>
              <a href="/news">{t("header.news")}</a>
            </li>
            <li>
              <div className="clearfix" onClick={toggleProduct}>
                <span className="fl"> {t("header.products")}</span>
                <i className="fr jia">+</i>
              </div>

              <SlideDown className="sfq_a">
                {productOpen && (
                  <ul>
                    <li className="kc">
                      <a href="/products/truck">{t("header.truckTyre")}</a>
                    </li>
                    <li>
                      <a href="/products/truck/long-haul-wearable">
                        {t("products.longHaulWearable")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/truck/middle-long-distance">
                        {t("products.middleLongDistance")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/truck/middle-short-distance">
                        {t("products.middleShortDistance")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/quarry-building-site">
                        {t("products.quarryBuidlingSites")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/truck/high-end-off-road">
                        {t("products.highEndOffRoad")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/truck/high-end-heavy-loading">
                        {t("products.highEndHeavyLoading")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/truck/high-end-wearable">
                        {t("products.highEndWearable")}
                      </a>
                    </li>
                    <li className="kc">
                      <a href="/products/light-truck">
                        {t("header.lightTruckTyre")}
                      </a>
                    </li>
                    <li className="kc">
                      <a href="/products/bus">{t("header.busTyre")}</a>
                    </li>

                    <li>
                      <a href="/products/bus/inter-city">
                        {t("products.interCityBus")}
                      </a>
                    </li>
                    <li>
                      <a href="/products/bus/city-bus">
                        {t("products.cityCityBus")}
                      </a>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
            <li>
              <div className="clearfix" onClick={toggleService}>
                <span className="fl">{t("header.service")}</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                {serviceOpen && (
                  <ul>
                    <li>
                      <a href="/service/tyre-class">{t("header.tyreClass")}</a>
                    </li>
                    <li>
                      <a href="/services/guestbook">{t("header.guestBook")}</a>
                    </li>
                    <li>
                      <a href="/services/download">{t("header.download")}</a>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
            <li>
              <div className="clearfix" onClick={toggleRecruitment}>
                <span className="fl">{t("header.recruitment")}</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                {recruitmentOpen && (
                  <ul>
                    <li>
                      <a href="/recruitment/social">
                        {t("header.socialRecruitment")}
                      </a>
                    </li>
                    <li>
                      <a href="/recruitment/campus">
                        {t("header.campusRecruitment")}
                      </a>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
            <li>
              <div className="clearfix" onClick={toggleAboutUs}>
                <span className="fl">{t("header.about")}</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                {aboutUsOpen && (
                  <ul>
                    <li>
                      <a href="/about/roadone">{t("header.aboutRoadone")}</a>
                    </li>
                    <li>
                      <a href="/about/social-responsibility">
                        {t("header.csr")}
                      </a>
                    </li>
                    <li>
                      <a href="/about/contact">{t("header.contactUs")}</a>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
          </ul>
        </div>
        <div className="ewm">
          <img src={Qrcode} />
        </div>
        <div className="foot_d1">
          <a href="">{t("homepage.legalDeclaration")}</a>
          <a href="/about/contact">{t("header.contactUs")}</a>
          <a href="">{t("homepage.siteMap")}</a>
        </div>
      </div>
      <div className="foot_d2">
        {t("homepage.copyright")} &copy; {t("about.companyName")}{" "}
        {t("homepage.allRightReserved")}
      </div>
    </>
  );
};

export default FooterMobile;

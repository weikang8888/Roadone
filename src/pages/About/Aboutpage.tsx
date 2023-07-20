import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import InnerBanner from "../../component/Banner/InnerBanner";
import SubMenu from "../../component/SubMenu/SubMenu";
import "./aboutpage.css";
import AboutBanner from "../../static/image/about/about-banner.webp";
import GroupProfile1 from "../../static/image/about/groupprofile-1.webp";
import GroupProfile2 from "../../static/image/about/groupprofile-2.webp";
import LocationImage1 from "../../static/image/about/location-1.webp";
import LocationImage2 from "../../static/image/about/location-2.webp";
import LocationImage3 from "../../static/image/about/location-3.webp";
import EventImage from "../../static/image/about/events.webp";
import IndustrialImage1 from "../../static/image/about/industrial-1.webp";
import IndustrialImage2 from "../../static/image/about/industrial-2.webp";
import EquipmentImage1 from "../../static/image/about/equipments-1.webp";
import EquipmentImage2 from "../../static/image/about/equipments-2.webp";
import EquipmentImage3 from "../../static/image/about/equipments-3.webp";
import EquipmentImage4 from "../../static/image/about/equipments-4.webp";
import EquipmentImage5 from "../../static/image/about/equipments-5.webp";
import EquipmentImage6 from "../../static/image/about/equipments-6.webp";
import ProductionImage1 from "../../static/image/about/production-1.webp";
import ProductionImage2 from "../../static/image/about/production-2.webp";
import ProductionImage3 from "../../static/image/about/production-3.webp";
import ProductionImage4 from "../../static/image/about/production-4.webp";
import ProductionImage5 from "../../static/image/about/production-5.webp";
import ProductionImage6 from "../../static/image/about/production-6.webp";
import ProductionImage7 from "../../static/image/about/production-7.webp";
import InnovationImage1 from "../../static/image/about/innovation-1.webp";
import InnovationImage2 from "../../static/image/about/innovation-2.webp";
import MarketImage from "../../static/image/about/market.webp";

const Aboutpage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About Us - Tongli Tyre Co.,Ltd</title>
      </Helmet>
      <InnerBanner bannerimage={AboutBanner} />

      <section>
        <div className="container1">
          <div className="ejfl">{t("header.about")}</div>
          <SubMenu currentpage={t("header.about")} currentlink={"/about"} />
          <div className="main">
            <div className="pinfo">
              <p className="center">
                <span className="section-title-text">
                  <strong>{t("aboutpage.groupProfileTitle")}</strong>
                </span>
              </p>
              <p>
                <br />
              </p>
              <p className="content">
                <span className="text">{t("aboutpage.content1")}</span>
              </p>
              <p className="content">
                <span className="text font-times-new-roman">
                  {t("aboutpage.content2")}
                </span>
              </p>
              <p>
                <span className="font-times-new-roman"></span>
              </p>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="image-container">
                  <div>
                    <img
                      className="image"
                      src={GroupProfile1}
                      title="2.jpg"
                      alt="2.jpg"
                    />
                  </div>
                  <p>{t("aboutpage.gate")}</p>
                </div>
                <div className="image-container">
                  <div>
                    <img
                      className="image"
                      src={GroupProfile2}
                      title="1.jpg"
                      alt="1.jpg"
                    />
                  </div>
                  <p>{t("aboutpage.officeBuilding")}</p>
                </div>
              </div>
              <fieldset className="border-top">
                <legend className="legend-title center">
                  <span className="title">
                    <strong>
                      <span className="subtitle">
                        {" "}
                        {t("aboutpage.locationTitle")}
                      </span>
                    </strong>
                  </span>
                </legend>
              </fieldset>
              <div>
                <div>
                  <p>
                    <span className="content-text">
                      {" "}
                      {t("aboutpage.locationContent1")}
                    </span>
                  </p>
                </div>
                <p className="content-paragraph">
                  <span className="content-text">
                    {t("aboutpage.locationContent2")}
                  </span>
                  <br />
                </p>
              </div>
              <p>
                <br />
              </p>
              <div className="image-gallery">
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage1}
                      className="gallery-image"
                      title=".png"
                      alt=".png"
                    />
                  </div>
                  <p> {t("aboutpage.locationTitle")}</p>
                </div>
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage2}
                      className="gallery-image"
                      title="3.jpg"
                      alt="3.jpg"
                    />
                  </div>
                  <p>{t("aboutpage.gateView")}</p>
                </div>
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage3}
                      className="gallery-image"
                      title="5.jpg"
                      alt="5.jpg"
                    />
                    {t("aboutpage.partOfIndustry")}
                  </div>
                </div>
              </div>
              <p>
                <br />
              </p>
              <div className="event-container">
                <div className="event-image">
                  <img
                    src={EventImage}
                    className="event-image"
                    title=".jpg"
                    alt=".jpg"
                    width="509"
                    height="356"
                  />
                </div>
                <div className="event-description">
                  <p className="event-title">
                    <strong className="event-title-text">
                      {" "}
                      {t("aboutpage.bigEventsTitle")}
                    </strong>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent1")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent2")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent3")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent4")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent5")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent6")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent7")}
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      {t("aboutpage.bigEventsContent8")}
                    </span>
                  </p>
                  <p className="event-text">
                    <br />
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>

              <fieldset className="section-fieldset">
                <legend className="section-legend center">
                  <span className="section-legend-text">
                    <strong className="section-legend-title">
                      <span className="title">
                        {" "}
                        {t("aboutpage.industrialParkTitle")}
                      </span>
                    </strong>
                  </span>
                  <span className="section-legend-subtitle">
                    <span className="section-subtitle-text">&nbsp;</span>
                  </span>
                </legend>
              </fieldset>
              <p className="content-paragraph">
                <span className="content-text">
                  {t("aboutpage.industrialParkContent1")}
                </span>
              </p>
              <p className="content-center">
                <img
                  src={IndustrialImage1}
                  title="(1)"
                  alt="(1)"
                  className="content-image"
                />
              </p>
              <p className="content-paragraph">
                <span className="content-text">
                  {t("aboutpage.industrialParkContent2")}
                </span>
              </p>
              <p className="content-paragraph">
                <span className="content-text">
                  {t("aboutpage.industrialParkContent3")}
                </span>
              </p>
              <p className="content-center">
                <img
                  src={IndustrialImage2}
                  title="1.png"
                  alt="1.png"
                  className="content-image"
                />
              </p>
              <p className="content-paragraph">
                <br />
              </p>
              <p className="content-paragraph">
                <br />
              </p>
              <fieldset className="section-fieldset">
                <legend className="section-legend center">
                  <span className="section-legend-text">
                    <strong className="section-legend-title">
                      <span className="title">
                        {" "}
                        {t("aboutpage.equipmentsTitle")}
                      </span>
                    </strong>
                  </span>
                </legend>
              </fieldset>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage1}
                      alt="1.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {t("aboutpage.equipmentsContent1")}
                      </span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage2}
                      alt="2.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {" "}
                        {t("aboutpage.equipmentsContent2")}
                      </span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage3}
                      alt="3.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {t("aboutpage.equipmentsContent3")}
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage4}
                      alt="4.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {t("aboutpage.equipmentsContent4")}
                      </span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage5}
                      alt="5.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {t("aboutpage.equipmentsContent5")}
                      </span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage6}
                      alt="6.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        {t("aboutpage.equipmentsContent6")}
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <fieldset className="border-container">
                <legend className="center">
                  <span className="legend-title-3">
                    <strong> {t("aboutpage.productionsTitle")}</strong>
                  </span>
                </legend>
              </fieldset>
              <p className="times-new-roman">
                {t("aboutpage.productionsContent1")}
              </p>
              <br />
              <div className="image-container-2">
                <div className="image-item">
                  <img src={ProductionImage1} alt=".jpg" />
                  <p>
                    <strong>{t("aboutpage.productionsTruckTire")}</strong>
                  </p>
                </div>
                <div className="image-item">
                  <img src={ProductionImage2} alt="2.jpg" />
                  <p>
                    <strong>{t("aboutpage.productionsLightTruckTire")}</strong>
                  </p>
                </div>
                <div className="image-item">
                  <img src={ProductionImage3} alt=".jpg" />
                  <p>
                    <strong>{t("aboutpage.productionsBusTire")}</strong>
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="image-container-2">
                <div className="production-item">
                  <img src={ProductionImage4} alt="07.2.jpg" />
                  <p>
                    <strong>{t("aboutpage.tubeInTire")}</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage5} alt="07.3.jpg" />
                  <p>
                    <strong>{t("aboutpage.tubeInTire")}</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage6} alt="07.7.jpg" />
                  <p>
                    <strong>{t("aboutpage.tubelessTire")}</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage7} alt="07.10.jpg" />
                  <p>
                    <strong>{t("aboutpage.tubelessTire")}</strong>
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="image-container-2">
                <div className="innovation-item">
                  <img src={InnovationImage1} />
                  <p>
                    <strong>{t("aboutpage.innovation")}</strong>
                  </p>
                </div>
                <div className="innovation-item">
                  <img src={InnovationImage2} />
                  <p>
                    <strong>{t("aboutpage.innovation")}</strong>
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <fieldset className="border-container">
                <legend className="center">
                  <span className="legend-title-3">
                    <strong> {t("aboutpage.marketTitle")}</strong>
                  </span>
                </legend>
              </fieldset>
              <p className="text-center">
                <img src={MarketImage} alt="1607306900(1)" />
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong className="times-new-roman">※ Production Market</strong>
                <br />
              </p>
              <p className="times-new-roman">{t("aboutpage.marketContent1")}</p>
              <p className="times-new-roman">{t("aboutpage.marketContent2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;

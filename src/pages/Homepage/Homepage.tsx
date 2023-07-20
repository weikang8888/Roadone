import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Swipper from "../../component/Swipper/Swipper";
import ButtonMain from "../../component/Button/ButtonMain";
import HomepageProduct from "./HomepageProduct";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("header.roadone")} - {t("homepage.title")}
        </title>
      </Helmet>
      <Swipper />
      <div className="video clearfix">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KH68Uma-QKE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>

      <section className="clearfix abouts-index">
        <div className="abouts-imgs wow bounceInLeft">
          <div className="abouts-fixed wow pulse" data-wow-delay=".6s"></div>
        </div>
        <div className="abouts-text wow bounceInRight">
          <h2 className="h2 animation-undefined">{t("homepage.title")}</h2>
          <p>{t("homepage.description")}</p>
          <ButtonMain href="#" />
        </div>
      </section>

      <section className="clearfix team-index">
        <div className="abouts-text  wow bounceInLeft">
          <h2 className="h2 animation-undefined">{t("homepage.teamTitle")}</h2>
          <p>{t("homepage.teamDescription")}</p>
          <ButtonMain href="#" />
        </div>
        <div className="abouts-imgs wow bounceInRight">
          <div className="abouts-fixed wow pulse" data-wow-delay=".6s"></div>
        </div>
      </section>

      <HomepageProduct />

      <div className="services wow bounceInLeft">
        <div className="container d-flex">
          <h3>{t("homepage.advantageTitle")}</h3>
          <div className="services-grids">
            <ul className="srevicesgrid_info">
              <li className="tick">{t("homepage.advantage1")}</li>
              <li className="tick">{t("homepage.advantage2")}</li>
            </ul>
          </div>
          <div className="services-grids">
            <ul className="srevicesgrid_info">
              <li className="tick">{t("homepage.advantage3")}</li>
              <li className="tick">{t("homepage.advantage4")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services-bottom wow bounceInRight">
        <p>
          {t("homepage.customerCount")} <span>{t("homepage.customers")}</span>!
        </p>
      </div>
    </>
  );
};

export default Homepage;

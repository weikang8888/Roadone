import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_3 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=6")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Assuming you want to render the first news item
  const newsItem = newsItems.length > 0 ? newsItems[0] : null;
  return (
    <>
      <InnerBanner bannerimage={NewsBanner} />

      <section>
        <div className="container container1">
          <div className="ejfl">{t("submenu.service")}</div>

          <SubMenu
            previouslink="/services"
            previouspage={t("submenu.service")}
            currentpage={t("submenu.content")}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{t("service.title.5")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <p>{t("service.serviceDetails01AUG18_3.content1")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content2")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content3")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content4")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content5")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content6")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content7")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content8")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content9")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content10")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content11")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content12")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content13")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content14")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content15")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content16")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content17")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content18")}</p>
                    <p>{t("service.serviceDetails01AUG18_3.content19")}</p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("service.title.4")}
                    prevLink="/services/does-driving-habits-affect-tyre-life"
                    nextLink="/services/check-the-vehicle-problems-before-the-long-journey"
                    nextText={t("service.title.6")}
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails_01AUG18_3;

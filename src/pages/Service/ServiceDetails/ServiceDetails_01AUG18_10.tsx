import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_10 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=13")
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
            previouslink="/news"
            previouspage={t("submenu.new")}
            currentpage={t("submenu.content")}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{t("service.title.12")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_10.content1")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content2")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_10.content3")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content4")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content5")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content6")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_10.content7")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content8")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content9")}</p>
                      <p>{t("service.serviceDetails01AUG18_10.content10")}</p>
                    </div>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "What are the signs that the tires are about to be damaged?"
                    }
                    prevLink="/services/what-are-the-signs-that-the-tires-are-about-to-be-damaged"
                    nextLink="/services/production-flow-of-tyre"
                    nextText={"Production flow of Tyre"}
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

export default ServiceDetails_01AUG18_10;

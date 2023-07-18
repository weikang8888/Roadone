import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_9 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/services/services.php?ids=12")
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
                  <div className="tit">{t("service.title.11")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_9.content1")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_9.content2")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_9.content3")}</p>

                      <p>{t("service.serviceDetails01AUG18_9.content4")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_9.content5")}</p>

                      <p>{t("service.serviceDetails01AUG18_9.content6")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("service.serviceDetails01AUG18_9.content7")}</p>
                      <p>{t("service.serviceDetails01AUG18_9.content8")}</p>
                    </div>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("service.title.10")}
                    prevLink="/services/when-do-i-need-to-change-the-tyre"
                    nextLink="/services/problems-related-to-tyre-transposition"
                    nextText={t("service.title.12")}
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

export default ServiceDetails_01AUG18_9;

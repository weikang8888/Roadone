import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import ServiceDetailsImage7 from "./picture/sd7.webp";

const ServiceDetails_21AUG20 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/services/services.php?ids=2")
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
                  <div className="tit">{t("service.title.1")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content1")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content2")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content3")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content4")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content5")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content6")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content7")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content8")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content9")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content10")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content11")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content12")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content13")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content14")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content15")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("service.serviceDetails21AUG20.content16")}
                      </span>
                    </p>
                    <p>
                      <img
                        src={ServiceDetailsImage7}
                        title="78647116_158226685452980_2701914469365186560_o"
                        alt="78647116_158226685452980_2701914469365186560_o"
                      />
                    </p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("service.title.0")}
                    prevLink="/services/roadone-truck-tire-at-lybia-1200r24-heavy-load-tires"
                    nextText={t("service.title.2")}
                    nextLink="/services/roadone-cambodian-agent-meeting"
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

export default ServiceDetails_21AUG20;

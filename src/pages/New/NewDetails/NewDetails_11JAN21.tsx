import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage13 from "./picture/nd13.webp";
import NewDetailsImage14 from "./picture/nd14.webp";
import NewDetailsImage15 from "./picture/nd15.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_11JAN21 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/news/news.php?ids=5")
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
          <div className="ejfl">{t("submenu.new")}</div>
          <SubMenu
            previouslink="/news"
            previouspage={t("submenu.new")}
            currentpage={t("submenu.content")}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{t("new.title.4")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo font-UI">
                    <p>
                      <span className="font-size-26 pinfo-title">
                        {t("new.newDetails11JAN21.content1")}
                      </span>
                    </p>

                    <p>
                      <span style={{ letterSpacing: "1px" }}>
                        {t("new.newDetails11JAN21.content2")}
                      </span>
                    </p>
                    <p>
                      <img src={NewDetailsImage13} title="image" alt="image" />
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ letterSpacing: "1px" }}>
                        {t("new.newDetails11JAN21.content3")}
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong> {t("new.newDetails11JAN21.content4")}</strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ letterSpacing: "1px" }}>
                        {t("new.newDetails11JAN21.content5")}
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <img src={NewDetailsImage14} title="image" alt="image" />
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "宋体",
                          letterSpacing: "1px",
                        }}>
                        {t("new.newDetails11JAN21.content6")}
                      </span>
                    </p>
                    <p>
                      <img src={NewDetailsImage15} title="image" alt="image" />
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.3")}
                    prevLink="/news/xcmg-feedback-award-to-tongli-tire-co-ltd"
                    nextLink="/news/hixih-steel-wire-rope-co-ltd"
                    nextText={t("new.title.5")}
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
                  <DetailsRelatedProducts ids="66,88,36,39,92,48" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDetails_11JAN21;

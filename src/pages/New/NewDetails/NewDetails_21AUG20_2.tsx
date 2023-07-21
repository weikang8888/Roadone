import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage39 from "./picture/nd39.webp";
import NewDetailsImage40 from "./picture/nd40.webp";
import NewDetailsImage41 from "./picture/nd41.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_21AUG20_2 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/news/news?ids=12")
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
                  <div className="tit">{t("new.title.11")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails21AUG20.content1")}
                      </span>
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage39}
                        title="微信图片_20191223165328"
                        alt="微信图片_20191223165328"
                      />
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails21AUG20.content2")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails21AUG20.content3")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          backgroundColor: "#F7F8FA",
                          color: "#333333",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        <img
                          src={NewDetailsImage40}
                          title="微信图片_20191223165422"
                          alt="微信图片_20191223165422"
                        />
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          backgroundColor: "#F7F8FA",
                          color: "#333333",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        {t("new.newDetails21AUG20.content4")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        &nbsp;
                        <img
                          src={NewDetailsImage41}
                          title="微信图片_20191223165344"
                          alt="微信图片_20191223165344"
                        />
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                        background: "white",
                      }}>
                      <span
                        style={{
                          fontFamily: "Times New Roman, serif",
                          color: "black",
                        }}>
                        {t("new.newDetails21AUG20.content5")}
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails21AUG20.content6")}
                      </span>
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.10")}
                    prevLink="/news/roadone-tire-2019-cambodia-dealers-conference-successfully-held"
                    nextLink="/news/265-70r19-5-new-tyre"
                    nextText={t("new.title.12")}
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />{" "}
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

export default NewDetails_21AUG20_2;

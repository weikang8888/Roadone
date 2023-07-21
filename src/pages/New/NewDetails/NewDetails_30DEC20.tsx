import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage16 from "./picture/nd16.webp";
import NewDetailsImage17 from "./picture/nd17.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_30DEC20 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/news/news?ids=6")
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
                  <div className="tit">{t("new.title.5")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span
                          style={{
                            fontFamily: "Arial, sans-serif",
                            color: "#333333",
                          }}>
                          {t("new.newDetails30DEC20.content1")}
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails30DEC20.content2")}
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span
                          style={{
                            fontFamily: "Arial, sans-serif",
                            color: "#333333",
                          }}>
                          {t("new.newDetails30DEC20.content3")}
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails30DEC20.content4")}
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {" "}
                        <img
                          src={NewDetailsImage16}
                          title="image"
                          alt="image"
                        />
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span style={{ fontSize: "15px" }}>
                          {" "}
                          {t("new.newDetails30DEC20.content5")}
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails30DEC20.content6")}
                        <strong>H class</strong> 80d (g m²),{" "}
                        <strong>A class</strong> 60d (g m²),{" "}
                        <strong>B class</strong> 30d (g m²),{" "}
                        <strong>G class</strong> 30 (g m²).
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {" "}
                        <img
                          src={NewDetailsImage17}
                          title="image"
                          alt="image"
                        />
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span style={{ fontSize: "15px" }}>
                          {" "}
                          {t("new.newDetails30DEC20.content7")}
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails30DEC20.content8")}
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {t("new.newDetails30DEC20.content9")}
                      </span>
                    </p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.4")}
                    prevLink="/news/hixih-continental-cooperation"
                    nextLink="/news/hd520-pattern-road-test"
                    nextText={t("new.title.6")}
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

export default NewDetails_30DEC20;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage36 from "./picture/nd36.webp";
import NewDetailsImage37 from "./picture/nd37.webp";
import NewDetailsImage38 from "./picture/nd38.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_21AUG20 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=11")
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
                  <div className="tit">{t("new.title.10")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <div style={{ marginBottom: 0, background: "white" }}>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content1")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          <img src={NewDetailsImage36} title="1" alt="1" />
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content2")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content3")}
                        </span>
                      </p>
                      <p>
                        <img src={NewDetailsImage37} title="2" alt="2" />
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content4")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          <img src={NewDetailsImage38} title="7" alt="7" />
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content5")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content6")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content7")}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          {t("new.newDetails21AUG20.content8")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Roadone M665A Heavy Duty 13R22.5 Test"}
                    prevLink="/news/roadone-m665a-heavy-duty-13r22.5-test"
                    nextLink="/news/roadone-tyre-national-agent-meeting"
                    nextText={"ROADONE TYRE NATIONAL AGENT MEETING (Annual Celebration)"}
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

export default NewDetails_21AUG20;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage47 from "./picture/nd47.jpg";
import NewDetailsImage48 from "./picture/nd48.jpg";
import NewDetailsImage49 from "./picture/nd49.jpg";
import NewDetailsImage50 from "./picture/nd50.jpg";
import NewDetailsImage51 from "./picture/nd51.jpg";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_27SEP19 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/news/news?ids=14")
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
                  <div className="tit">{t("new.title.13")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        lineHeight: "36px",
                        background: "rgb(248, 249, 250)",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          textAlign: "justify",
                        }}>
                        {t("new.newDetails27SEP19.content1")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage47}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        background: "rgb(248, 249, 250)",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                        }}>
                        {t("new.newDetails27SEP19.content2")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage48}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image 2"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                        }}>
                        {t("new.newDetails27SEP19.content3")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage49}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          textAlign: "center",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Image"
                      />
                    </p>

                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        lineHeight: "2em",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                          color: "rgb(0, 0, 0)",
                        }}>
                        {t("new.newDetails27SEP19.content4")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage50}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                        }}>
                        {t("new.newDetails27SEP19.content5")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage51}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                          fontSize: "14px",
                        }}>
                        {t("new.newDetails27SEP19.content6")}
                      </span>
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.12")}
                    prevLink="/news/265-70r19-5-new-tyre"
                    nextLink="/news/roadone-attend-philauto-at-24th-to-26th-july-2019"
                    nextText={t("new.title.14")}
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

export default NewDetails_27SEP19;

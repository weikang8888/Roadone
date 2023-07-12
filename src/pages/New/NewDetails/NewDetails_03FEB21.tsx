import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage8 from "./picture/nd8.webp";
import NewDetailsImage9 from "./picture/nd9.webp";
import NewDetailsImage10 from "./picture/nd10.webp";
import NewDetailsImage11 from "./picture/nd11.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_03FEB21 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=3")
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
                  <div className="tit">{t("new.title.3")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="pinfo-title">
                        {t("new.newDetails03FEB21.content1")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content2")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        1F+2D+3ST{" "}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content3")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content30")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content4")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content5")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content6")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content7")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content8")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content9")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content10")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content11")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content12")}
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content13")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content14")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content15")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content16")}
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content17")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content18")}
                      </span>

                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content19")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content20")}
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content21")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content22")}
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails03FEB21.content23")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <br />
                    </p>

                    <div
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: 16,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails03FEB21.content24")}
                      </span>
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          textAlign: "left",
                          direction: "ltr",
                          unicodeBidi: "embed",
                          verticalAlign: "baseline",
                        }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontFamily: "Arial",
                            color: "black",
                          }}>
                          {t("new.newDetails03FEB21.content25")}
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          textAlign: "left",
                          direction: "ltr",
                          unicodeBidi: "embed",
                          verticalAlign: "baseline",
                        }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontFamily: "Arial",
                            color: "black",
                          }}>
                          {t("new.newDetails03FEB21.content26")}
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          textAlign: "left",
                          direction: "ltr",
                          unicodeBidi: "embed",
                          verticalAlign: "baseline",
                        }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontFamily: "Arial",
                            color: "black",
                          }}>
                          {t("new.newDetails03FEB21.content27")}
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          textAlign: "left",
                          direction: "ltr",
                          unicodeBidi: "embed",
                          verticalAlign: "baseline",
                        }}>
                        <span
                          style={{
                            fontSize: 16,
                            fontFamily: "Arial",
                            color: "black",
                          }}>
                          <img src={NewDetailsImage11} />
                        </span>
                      </p>
                    </div>

                    <div className="d-flex text-center my-2">
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage8} />
                        </div>
                        <p> {t("new.newDetails03FEB21.content28")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage9} />
                        </div>
                        <p> {t("new.newDetails03FEB21.content28")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage10} />
                        </div>
                        <p> {t("new.newDetails03FEB21.content29")}</p>
                      </div>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.2")}
                    prevLink="/news/roadone-12-00r20-new-truck-tire-road-test"
                    nextText={t("new.title.3")}
                    nextLink="/news/xcmg-feedback-award-to-tongli-tire-co-ltd"
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

export default NewDetails_03FEB21;

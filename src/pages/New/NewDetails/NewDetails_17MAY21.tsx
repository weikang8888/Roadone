import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage6 from "./picture/nd6.webp";
import NewDetailsImage7 from "./picture/nd7.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_19AUG21 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=2")
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
                  <div className="tit">{t("new.title.1")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="font-size-26 pinfo-title">
                        {t("new.newDetails17MAY21.content23")}
                      </span>
                    </p>
                    <div
                      className="d-flex"
                      style={{ width: "480px", paddingRight: "15.9943px" }}>
                      <ul style={{ width: "455.994px", paddingLeft: "20px" }}>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content1")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              2F+3D
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content2")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                color: "red",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content3")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content4")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              {t("new.newDetails17MAY21.content5")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content6")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              {t("new.newDetails17MAY21.content7")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content8")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              {t("new.newDetails17MAY21.content9")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content10")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              {t("new.newDetails17MAY21.content11")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content12")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              {t("new.newDetails17MAY21.content13")}
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content14")}
                            </span>{" "}
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              12mm/14mm
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content15")}
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                              }}>
                              24mm
                            </span>
                          </p>
                        </li>
                        <li>
                          <p
                            style={{
                              marginTop: "0px",
                              marginBottom: "0px",
                              whiteSpace: "normal",
                              direction: "ltr",
                              unicodeBidi: "embed",
                              verticalAlign: "baseline",
                            }}>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                              }}>
                              {t("new.newDetails17MAY21.content16")}
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              {t("new.newDetails17MAY21.content17")}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p
                      style={{
                        marginTop: "0",
                        marginBottom: "0",
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: "21px",
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails17MAY21.content18")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0",
                        marginBottom: "0",
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: "21px",
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails17MAY21.content19")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0",
                        marginBottom: "0",
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                        verticalAlign: "baseline",
                      }}>
                      <span
                        style={{
                          fontSize: "21px",
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        {t("new.newDetails17MAY21.content20")}
                      </span>
                    </p>
                    <div className="d-flex text-center my-2">
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage6} />
                        </div>
                        <p> {t("new.newDetails17MAY21.content21")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage7}
                            style={{ width: "415px", height: "523px" }}
                          />
                        </div>
                        <p> {t("new.newDetails17MAY21.content22")}</p>
                      </div>
                    </div>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.0")}
                    prevLink="/news/385-65r22-5-new-pattern-hf281"
                    nextText={t("new.title.2")}
                    nextLink="/news/295-80r22-5-hf21-truck-tire-test"
                  />
                  <DetailsRelatedNews ids="2,3,4,5,6,7,8,9,10,11" />
                  <DetailsRelatedProducts ids="0" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDetails_19AUG21;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage20 from "./picture/nd20.webp";
import NewDetailsImage21 from "./picture/nd21.webp";
import NewDetailsImage22 from "./picture/nd22.webp";
import NewDetailsImage23 from "./picture/nd23.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_20JAN21 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=8")
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
                  <div className="tit">{t("new.title.7")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="font-size-26 pinfo-title font-Dengxian">
                        {t("new.newDetails10NOV20.content1")}
                      </span>
                    </p>

                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "27px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content2")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content3")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content4")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content5")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content6")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content7")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content8")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "32px",
                          fontFamily: "Arial",
                          color: "#333333",
                          fontWeight: "bold",
                          fontStyle: "normal",
                        }}>
                        {t("new.newDetails10NOV20.content9")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content10")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content11")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content12")}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: "left",
                        direction: "ltr",
                        unicodeBidi: "embed",
                      }}>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "等线",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        {t("new.newDetails10NOV20.content13")}
                      </span>
                    </p>
                    <p>
                      <img src={NewDetailsImage20} title="image" alt="image" />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage21}
                        style={{ width: "380px", height: "540px" }}
                        title="14.00R20 (3)"
                        width="380"
                        height="540"
                        alt="14.00R20 (3)"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage22}
                        style={{ width: "380px", height: "600px" }}
                        title="14.00R20 (2)"
                        width="380"
                        height="600"
                        alt="14.00R20 (2)"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage23}
                        style={{ width: "588px", height: "600px" }}
                        title="14.00R20"
                        width="588"
                        height="600"
                        alt="14.00R20"
                      />
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.6")}
                    prevLink="/news/hd520-pattern-road-test"
                    nextLink="/news/roadone-becomes-good-supplier-of-the-china-famous-truck-company"
                    nextText={t("new.title.8")}
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

export default NewDetails_20JAN21;

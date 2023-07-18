import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage1 from "./picture/nd1.jpg";
import NewDetailsImage2 from "./picture/nd2.jpg";
import NewDetailsImage3 from "./picture/nd3.jpg";
import NewDetailsImage4 from "./picture/nd4.jpg";
import NewDetailsImage5 from "./picture/nd5.jpg";
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
      .get("https://backend.roadone.com.my/news/news.php?ids=1")
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
                  <div className="tit">{t("new.title.0")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="highlight">
                        <strong>
                          <span className="font-size-26">
                            {t("new.newDetails19AUG21.content1")}
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span className="highlight">
                        <strong>
                          <span className="font-size-26"></span>
                        </strong>
                      </span>
                    </p>
                    <div>
                      <h4 className="production-intro">
                        {t("new.newDetails19AUG21.content2")}
                        <span className="skew-line"></span>
                        <span className="skew-line-bt"></span>
                        <span className="circle"></span>
                      </h4>
                    </div>
                    <p>
                      <span className="">
                        <strong>
                          <span className="font-size-26">
                            {t("new.newDetails19AUG21.content3")}
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span className="">
                        <strong>
                          <span className="font-size-26">
                            {t("new.newDetails19AUG21.content4")}
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span className="">
                        <strong>
                          <span className="font-size-26"></span>
                        </strong>
                      </span>
                    </p>
                    <h4 className="specifications">
                      {t("new.newDetails19AUG21.content5")}
                    </h4>
                    <p></p>
                    <table width="100%" className="table mt-3">
                      <tbody>
                        <tr className="firstRow">
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.size")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.plyRating")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.maxLoad")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.loadIndex")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.speedRating")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.overallDiameter")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.sectionWidth")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.standardInflationPressure")}
                            </span>
                          </td>
                          <td>
                            <span className="table-text">
                              {t("tableHeaders.standardRim")}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td width="115">
                            <span className="table-text">385/65R22.5 </span>
                          </td>
                          <td width="68">
                            <span className="table-text">20PR★</span>
                          </td>
                          <td width="107">
                            <span className="table-text">4500</span>
                          </td>
                          <td width="115">
                            <span className="table-text">160</span>
                          </td>
                          <td width="72">
                            <span className="table-text">K</span>
                          </td>
                          <td width="84">
                            <span className="table-text">1070.5</span>
                          </td>
                          <td width="88">
                            <span className="table-text">376</span>
                          </td>
                          <td width="72">
                            <span className="table-text">900</span>
                          </td>
                          <td width="72">
                            <span className="table-text">11.75</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mb-2">
                      <span className="highlight">
                        <strong>
                          <span></span>
                        </strong>
                      </span>
                    </p>
                    <p>● {t("new.newDetails19AUG21.content6")}</p>
                    <p>● {t("new.newDetails19AUG21.content7")}</p>
                    <p>● {t("new.newDetails19AUG21.content8")}</p>
                    <p>● {t("new.newDetails19AUG21.content9")}</p>
                    <div className="d-flex text-center my-2">
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage1}
                            title="8808058bbffb8ec0b7df16d0127dd48.jpg"
                            alt="8808058bbffb8ec0b7df16d0127dd48.jpg"
                          />
                        </div>
                        <p> {t("new.newDetails19AUG21.content10")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage2}
                            title="7a81a7520d72fd01beae7fd8ad34983.jpg"
                            alt="7a81a7520d72fd01beae7fd8ad34983.jpg"
                          />
                        </div>
                        <p> {t("new.newDetails19AUG21.content11")}</p>
                      </div>
                    </div>
                    <p>
                      <br />
                    </p>
                    <div className="d-flex text-center">
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage3}
                            title="912ed31383c2a5e503a8a3f111b7d55.jpg"
                            alt="912ed31383c2a5e503a8a3f111b7d55.jpg"
                          />
                        </div>
                        <p> {t("new.newDetails19AUG21.content12")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage4}
                            title="2678be515350a3e69d08554f432cf66.jpg"
                            alt="2678be515350a3e69d08554f432cf66.jpg"
                          />
                        </div>
                        <p> {t("new.newDetails19AUG21.content13")}</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage5}
                            title="849d06771eaf892aae7c4f5e5b932c3.jpg"
                            alt="849d06771eaf892aae7c4f5e5b932c3.jpg"
                          />
                        </div>
                        <p> {t("new.newDetails19AUG21.content14")}</p>
                      </div>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("other.noInformation")}
                    nextLink="/news/roadone-12-00r20-new-truck-tire-road-test"
                    nextText={t("new.title.1")}
                  />
                  <DetailsRelatedNews ids="2,3,4,5,6,7,8,9,10,11" />
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

export default NewDetails_19AUG21;

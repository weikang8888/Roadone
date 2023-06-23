import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage6 from "./picture/nd6.webp";
import NewDetailsImage7 from "./picture/nd7.webp";
import NewDetailsButton from "./NewDetailsReused.tsx/NewDetailsButton";
import NewDetailsPreviousNext from "./NewDetailsReused.tsx/NewDetailsPreviousNext";
import NewDetailsRelatedNews from "./NewDetailsReused.tsx/NewDetailsRelatedNews";

const NewDetails_19AUG21 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=2")
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
          <div className="ejfl">News</div>
          <SubMenu
            previouslink="/news"
            previouspage="News"
            currentpage={"Content"}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{newsItem.title}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="font-size-26 pinfo-title">
                        12.00R20 GD777 Yunnan Heavy Load Test
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
                              Truck Wheel
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "宋体" }}>
                              ：
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "微软雅黑",
                                fontWeight: "bold",
                              }}>
                              &nbsp;2F+3D
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
                              Wheel
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "宋体" }}>
                              ：
                            </span>
                            <span
                              style={{
                                fontSize: "21px",
                                fontFamily: "Arial",
                                color: "red",
                                fontWeight: "bold",
                              }}>
                              ALL WHEEL
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              &nbsp;position
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
                              Weight
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "宋体" }}>
                              ：&nbsp;
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              Cargo 100 Tons
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
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Total &lt; 117 tons
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
                              Road
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "宋体" }}>
                              ：
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              100% Provincial road,
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
                              Distance:&nbsp;
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              400km single distance
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
                              Pressure
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              :&nbsp; 13.5Bar
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
                              Place
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "宋体" }}>
                              ：
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              Yunnan Province, South China
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
                              Rest groove
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              :12mm/14mm
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
                              New&nbsp; groove
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              :24mm
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
                              Installed:&nbsp;&nbsp;
                            </span>
                            <span
                              style={{ fontSize: "21px", fontFamily: "Arial" }}>
                              3 Months
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
                        Evaluation :{" "}
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
                        This truck is mainly to transport coal, load weight is
                        not steady, it means the higher requirement of the
                        tire.&nbsp;{" "}
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
                        The driver’s experience is that if the tires can use
                        more than 6 months and not have issues in 4 months, it
                        will be good.&nbsp;The GD777 is surely can work more
                        than 6 months, the driver feels great, and the
                        distributor feels well too.
                      </span>
                    </p>
                    <div className="d-flex text-center my-2">
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage6} />
                        </div>
                        <p>Real Picture</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage7}
                            style={{ width: "415px", height: "523px" }}
                          />
                        </div>
                        <p>HF281 Pattern</p>
                      </div>
                    </div>
                  </div>

                  <NewDetailsButton />
                  <NewDetailsPreviousNext
                    prevText={"No information"}
                    nextLink="/news/295-80r22-5-hf21-truck-tire-test"
                    nextText={"295/80R22.5 HF21 Truck Tire Test"}
                  />
                  <NewDetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
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

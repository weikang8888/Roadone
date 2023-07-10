import React, { useEffect, useState } from "react";
import axios from "axios";
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
                      <span className="pinfo-title">
                        295/80R22.5 HF21 truck tire test data
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
                        Truck
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        1F+2D+3ST
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
                        Place
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        Guangzhou
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
                        Road
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
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
                        &nbsp;&nbsp; 90% Highway
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        、
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        10% National road
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
                        Routine
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        Yinchuan-Guangzhou 2300km
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
                        Speed
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        90km/h
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
                        Cargo
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        Stocks
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
                        Mileage
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        : 163231km
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
                        Weight
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        total 49 Tons
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
                        Rest groove
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        :10.3mm
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
                        New
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        tyre
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                          fontWeight: "bold",
                        }}>
                        groove
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "宋体",
                          color: "black",
                        }}>
                        ：
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        16mm
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
                        Wear rate
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        : 35593km/mm
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
                        Estimate Mileage:
                      </span>
                      <span
                        style={{
                          fontSize: 21,
                          fontFamily: "Arial",
                          color: "black",
                        }}>
                        458192km
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
                        Customer evaluation:
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
                          This car is a special line between Yinchuan and
                          Guangzhou.
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
                          At present, the tires have been used for one year and
                          two months, driving 160,000km, the estimated mileage
                          is 460,000 km. Truck owners are very satisfied with
                          the use of the HF21, wheel.
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
                          Tire is very wear-resistant and anti-eccentric wear
                          effect is good, and it is comfortable when mounted on
                          the guide wheel. The truck owner purchased this tire
                          many times and has introduced it to more of his
                          friends.
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
                        <p>Real Picture</p>
                      </div>
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage9} />
                        </div>
                        <p>Real Picture</p>
                      </div>
                      <div className="box">
                        <div>
                          <img src={NewDetailsImage10} />
                        </div>
                        <p>HF281 Pattern</p>
                      </div>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"No information"}
                    nextLink="/news/295-80r22-5-hf21-truck-tire-test"
                    nextText={"295/80R22.5 HF21 Truck Tire Test"}
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

export default NewDetails_03FEB21;

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
                      <span className="font-size-26 pinfo-title font-Dengxian">
                        SD01 Special Off-road Tyre Series
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
                        Product performance Features:
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
                        1. Off-road type, all wheel position
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
                        2. Suitable for highway, off-road, desert, swamp, snow
                        and other road conditions
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
                        3. Special tread compound formula design, makes the tire
                        has a stronger wear resistance, puncture resistance,
                        harsh weather resistance.
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
                        4. The wider belt layer design improves the low-pressure
                        performance of the tire
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
                        5. The shell can be directly installed as tubeless tire,
                        which can effectively cooperate with the use of auto
                        automatic charging and discharging system and inner
                        support body.
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
                        6. The optimized structure design enables the tire to
                        have excellent high-speed performance and meet the
                        requirements of high motor performance.
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
                        Pattern{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "32px",
                          fontFamily: "Arial",
                          color: "#333333",
                          fontWeight: "bold",
                        }}>
                        Features{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "32px",
                          fontFamily: "Arial",
                          color: "#333333",
                          fontWeight: "bold",
                          fontStyle: "normal",
                        }}>
                        :
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
                        1. All-terrain off-road pattern designed for multi-road
                        conditions
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
                        2. Deepened pattern groove design improves the service
                        life of the tire
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
                        3. The large pattern block design makes the tire have
                        stronger road grip and driving type
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
                        4. The widened pattern groove enables the tire to have
                        excellent self-cleaning product parameters
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
                    prevText={"HD520 PATTERN ROAD TEST"}
                    prevLink="/news/hd520-pattern-road-test"
                    nextLink="/news/roadone-becomes-good-supplier-of-the-china-famous-truck-company"
                    nextText={
                      "ROADONE Becomes Good Supplier Of The China Famous Truck Company"
                    }
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

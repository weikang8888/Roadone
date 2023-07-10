import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=1")
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
                      <span className="highlight">
                        <strong>
                          <span className="font-size-26">
                            ROADONE&nbsp;385/65R22.5&nbsp; HF281 NEW RADIAL TIRE
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
                        Production Introduction
                        <span className="skew-line"></span>
                        <span className="skew-line-bt"></span>
                        <span className="circle"></span>
                      </h4>
                    </div>
                    <p>
                      <span className="">
                        <strong>
                          <span className="font-size-26">
                            Suitable for steer/load bearing positions
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p>
                      <span className="">
                        <strong>
                          <span className="font-size-26">
                            385/65R22.5&nbsp; Designed for standard loading,
                            long distance, high speed in high-way, national
                            roads, suitable for steer and trailer positions.
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
                    <h4 className="specifications">Spercifications</h4>
                    <p></p>
                    <table className="spec-table">
                      <tbody>
                        <tr className="firstRow">
                          <td className="height-40">Size</td>
                          <td>Ply Rating</td>
                          <td>Load Index</td>
                          <td>Speed Rating</td>
                          <td>Ovrerall &nbsp; Diameter</td>
                          <td>Section Width</td>
                          <td>Max. load(kg)</td>
                          <td>Dual&nbsp;Pressure(kPa)</td>
                          <td>Single Pressure(kPa)</td>
                          <td>Inflation Width</td>
                        </tr>
                        <tr className="secondRow">
                          <td>Inflation Pressure</td>
                          <td>Max. Load&nbsp;</td>
                          <td>Dual&nbsp;Pressure(kPa)</td>
                          <td>Single Pressure(kPa)</td>
                        </tr>
                        <tr>
                          <td className="height-40">385/65R22.5&nbsp;HF281</td>
                          <td>18</td>
                          <td>160</td>
                          <td>J</td>
                          <td>1072</td>
                          <td>389</td>
                          <td>4500</td>
                          <td>875</td>
                          <td>900</td>
                          <td>279</td>
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
                    <p>
                      ●Optimized profile design, stone ejection treatment at the
                      bottom groove,&nbsp; provide excellent anti-biasing
                      performance and better stone ejection effect in different
                      road conditions.
                    </p>
                    <p>
                      ● The high-speed special super wearable tread recipe
                      design ensures higher mileage in mixed road conditions
                      such as high speed and national road.
                    </p>
                    <p>
                      ●Special steel structure and specific 4 belt cap design,
                      low heating recipe, optimized shoulder design, inhibiting
                      deformed wear,ensure multiple retreading of tires.
                    </p>
                    <p>
                      ●Environmental protection material formula,new pattern
                      design and overall optimization of material distribution
                      design technology, realize low rolling resistance while
                      taking into account the wet and slippery performance.
                    </p>
                    <div className="d-flex text-center my-2">
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage1}
                            title="8808058bbffb8ec0b7df16d0127dd48.jpg"
                            alt="8808058bbffb8ec0b7df16d0127dd48.jpg"
                          />
                        </div>
                        <p>Real Picture</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage2}
                            title="7a81a7520d72fd01beae7fd8ad34983.jpg"
                            alt="7a81a7520d72fd01beae7fd8ad34983.jpg"
                          />
                        </div>
                        <p>HF281 Pattern</p>
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
                        <p>Stock Picture</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage4}
                            title="2678be515350a3e69d08554f432cf66.jpg"
                            alt="2678be515350a3e69d08554f432cf66.jpg"
                          />
                        </div>
                        <p>Pattern Width</p>
                      </div>
                      <div className="box">
                        <div>
                          <img
                            src={NewDetailsImage5}
                            title="849d06771eaf892aae7c4f5e5b932c3.jpg"
                            alt="849d06771eaf892aae7c4f5e5b932c3.jpg"
                          />
                        </div>
                        <p>Groove</p>
                      </div>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"No informtaion"}
                    nextLink="/news/roadone-12-00r20-new-truck-tire-road-test"
                    nextText={"HD520 PATTERN ROAD TEST"}
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

import React, { useEffect, useState } from "react";
import axios from "axios";
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
                          On November 28, 2019, RoadoneTire 2019 Cambodia
                          Distributor Conference was solemnly held at Sokha
                          Phnom PenhHotel. Mr. Niu Fei, General Manager of
                          TOGNLI Tire Co., Ltd., attended the conference with
                          senior executives of the company, as well as
                          representatives of many overseas dealers and partners
                          of Roadone Tire from Cambodia.
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
                          In recent years, Roadone tires actively participated
                          in the global automotive market competition,
                          international operating capabilities have continued to
                          increase.&nbsp;
                          <strong>
                            <span
                              style={{
                                fontFamily: "Microsoft YaHei UI, sans-serif",
                              }}>
                              The brand{" "}
                            </span>
                          </strong>
                        </span>
                        <strong>
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Microsoft YaHei UI, sans-serif",
                              color: "#333333",
                              letterSpacing: 0,
                              background: "white",
                            }}>
                            ’s overseas visibility and influence have
                            significantly increased, with its market share No.
                            1, tube tires take over 80%
                          </span>
                        </strong>
                        <strong>
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Microsoft YaHei UI, sans-serif",
                              color: "#333333",
                              letterSpacing: 0,
                              background: "white",
                            }}>
                            &nbsp;
                          </span>
                        </strong>
                        <strong>
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Microsoft YaHei UI, sans-serif",
                              color: "#333333",
                              letterSpacing: 0,
                              background: "white",
                            }}>
                            and its steady entry into the Cambodian market !
                          </span>
                        </strong>
                        <strong>
                          <span
                            style={{
                              fontSize: "15px",
                              fontFamily: "Microsoft YaHei UI, sans-serif",
                              color: "#333333",
                              letterSpacing: 0,
                              background: "white",
                            }}>
                            &nbsp;
                          </span>
                        </strong>
                        <span
                          style={{
                            fontSize: "15px",
                            fontFamily: "Microsoft YaHei UI, sans-serif",
                            color: "#333333",
                            letterSpacing: 0,
                            background: "white",
                          }}>
                          Taking advantage of the new opportunities brought by
                          China's "Belt and Road" initiative, Roadone Tire has
                          now completed five major global sectors, including the
                          Middle East, Southeast Asia, Eastern Europe, Africa,
                          and the Americas, and steadily accelerated the
                          development of overseas markets.
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
                          The meeting highlighted a number of new breakthroughs
                          in the internationalization process of Roadone Tires
                          in 2019. At the same time, it carried out strategic
                          deployment and planning for the work of the next year,
                          and conducted in-depth exchanges and discussions on
                          the future internationalization strategy by division
                          and segmentation. Representatives from participating
                          dealers said that the conference has enhanced the
                          confidence of both sides in the global development of
                          Roadone tires and is willing to join hands with
                          Roadone to create a new legend.
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
                          Facing overseas partners, Mr. Niu Fei said, "In 2019,
                          with the strong support of overseas distributors,
                          Roadone Tire actively participated in various
                          activities in the global market. In terms of brand
                          building, Roadone Tire will actively cooperate with
                          global cooperation. Partners continue to carry out
                          more diversified marketing and experience activities
                          to promote both brand and sales. In terms of sales and
                          service system construction, Roadone will work with
                          overseas dealer teams to vigorously promote
                          standardized management of marketing and services and
                          establish a rapid response mechanism. Quickly respond
                          to market changes. Facing the future, Roadone Tire
                          will further explore the global market. We will
                          accelerate the development of overseas markets with a
                          wider vision and a more open mind, and gradually
                          improve the layout of overseas markets."
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
                          The dealer conference reviewed Roadone Tire's
                          insistence on the development of high
                          quality,“positioning high-end, quality first,
                          innovation-driven” in recent years, and summarized the
                          dazzling achievements made in overseas markets in
                          recent years. To ensure the smooth completion of each
                          process, Gao Ming, the quality director, introduced
                          the process standards of Roadone tire quality
                          management system in detail. In recent years, TOGNLI
                          has always attached importance to technology research
                          and development, and has obtained a total of 40
                          patents since its establishment, creating its own core
                          technology for national independent brands.
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
                          Later, the technical director Jiang Yi explained the
                          technical characteristics of Roadone tires in detail.
                          At the conference, Roadone also presented awards to
                          high-quality dealers, and shared excellent cases in
                          the Cambodian market with global partners, and
                          encouraged participating dealers to continue their
                          efforts, work together with Roadone tires, make
                          breakthroughs, and build a new pattern for overseas
                          market.
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
                          This overseas dealer conference is undoubtedly an
                          important measure for Roadone Tire to start a new
                          chapter of globalization in the future. Through
                          in-depth exchanges, the two sides reached a consensus
                          on cooperation methods, policy support, and market
                          planning, further enhancing mutual understanding
                          between Roadone Tire and dealers in different regions,
                          and laying a foundation for promoting further
                          cooperation and expanding the global dealer network. A
                          solid foundation.
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
                          At the end of the conference, Mr. Niu Fei said, "We
                          always sincerely look forward to establishing an open,
                          inclusive and win-win partnership with our
                          globaldistributors. Let us work together to develop a
                          broader global Market, paint anew blueprint for a
                          better development! "
                        </span>
                      </p>
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

export default NewDetails_21AUG20;

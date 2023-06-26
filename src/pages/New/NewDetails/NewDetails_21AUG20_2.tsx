import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage39 from "./picture/nd39.webp";
import NewDetailsImage40 from "./picture/nd40.webp";
import NewDetailsImage41 from "./picture/nd41.webp";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20_2 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=12")
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
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        On December 21, 2019, Tongli Tire Co., LTD's annual
                        dealer meeting 2020 with the theme of "achieving
                        perfection and achieving success" was grandly opened in
                        Jinggang Mountain, the holy land of the great
                        revolution. Hixih group chairman Niu Teng, Tongli Tire
                        Co., LTD's CEO Niu Fei, all department leaders and all
                        the country’s top agents jointly attended the meeting.
                      </span>
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage39}
                        title="微信图片_20191223165328"
                        alt="微信图片_20191223165328"
                      />
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        Jinggangshan mountain is the source and birthplace of
                        the New China revolution, as well as the blessed and
                        precious place of the Chinese revolution. Starting from
                        Jinggangshan, the Chinese revolution moved from one
                        victory to another. The purpose of this meeting is to
                        feel the spirit of the ancestors, to inspire the
                        strength of endeavor, to promote Tongli Tire Co., LTD.
                        toward a higher goal with the concept and spirit of
                        "ACHIEVING PERFECTION AND ACHIEVING SUCCESS"!
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        At present, we live in an era of unprecedented
                        challenges, risks, and opportunities. In this context,
                        the year 2019 is a very unusual and challenging year for
                        the rubber tire industry. Although the current
                        international and domestic situation is complex, the
                        market is facing more changes, Tongli Tire will carry
                        forward the more difficult the more development of the
                        enterprise. In 2019, Tongli Tire has achieved strong
                        market growth and carried out six strategies including{" "}
                        <strong>
                          brand serialization, high-end products, iterative
                          development, technology leadership, lean production,
                          and market internationalization
                        </strong>
                        .
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          backgroundColor: "#F7F8FA",
                          color: "#333333",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        <img
                          src={NewDetailsImage40}
                          title="微信图片_20191223165422"
                          alt="微信图片_20191223165422"
                        />
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                      }}>
                      <span
                        style={{
                          backgroundColor: "#F7F8FA",
                          color: "#333333",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        In 2020, Tongli Tire company will vigorously implement
                        the lean production strategy, resolutely break business
                        boundaries and communication barriers, focus on market
                        development, quality improvement, product research and
                        development, and minimize the coordination and mutual
                        constraints between the market and production in the
                        past. Fully implement the Tongli TMS manufacturing
                        system with fine management as the core, and greatly
                        improve the competitiveness of the enterprise in product
                        R&amp;D, marketing, internal efficiency, and other
                        aspects. Tongli Tire will rely on advanced business
                        philosophy, strong enterprise strength, first-class
                        production plants, excellent team, united all excellent
                        agents sincere cooperation, hand in hand with each
                        other, overcome difficulties and challenges, achieve
                        greater development!
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        &nbsp;
                        <img
                          src={NewDetailsImage41}
                          title="微信图片_20191223165344"
                          alt="微信图片_20191223165344"
                        />
                      </span>
                    </p>
                    <p
                      style={{
                        marginBottom: 0,
                        textAlign: "justify",
                        background: "white",
                      }}>
                      <span
                        style={{
                          fontFamily: "Times New Roman, serif",
                          color: "black",
                        }}>
                        The conference also invited the world-famous table
                        tennis champion Ms. Deng Yaping, to share wonderful
                        stories of her life.
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "Times New Roman, serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        There is no end to the journey. Tongli Tire Co., LTD.
                        All the staff work together with the dealers to unite,
                        closely cooperate, forge ahead, jointly meet the
                        challenges in the market, and jointly create a better
                        tomorrow for Tongli Tire!
                      </span>
                    </p>
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

export default NewDetails_21AUG20_2;

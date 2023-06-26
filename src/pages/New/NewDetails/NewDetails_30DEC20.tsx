import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage16 from "./picture/nd16.webp";
import NewDetailsImage17 from "./picture/nd17.webp";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_30DEC20 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=6")
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
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span
                          style={{
                            fontFamily: "Arial, sans-serif",
                            color: "#333333",
                          }}>
                          ABOUT COMPANY
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        HIXIH Steel Wire Rope Co., Ltd., founded in 2009, is a
                        wholly-owned subsidiary of HIXIH Rubber Industry Group.
                        With a registered capital of RMB 290 million and an
                        annual designed production capacity of 50,000 tons, the
                        company is the world's largest production base for
                        high-strength conveyor belt rope and has been the main
                        supplier of conveyor belt factories of Continental Group
                        and former Goodyear Group, with a market share of 56%
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span
                          style={{
                            fontFamily: "Arial, sans-serif",
                            color: "#333333",
                          }}>
                          ABOUT EQUIPMENT
                        </span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        Our company main product is high strength steel wire
                        rope, mainly used in rubber conveyor belt frame
                        reinforced material, based on the technical
                        characteristics of conveyor belt with steel wire rope,
                        adopt the world's most advanced production equipment at
                        the key steps which affecting the quality of the product
                        process. Such as FIB heat treatment hot-dip galvanizing
                        line from Belgium, SKET stranding and laying-up
                        equipment, BREMER wire drawing die repairing machine,
                        ZEISS company’s AXIOIMAGER microscope from Germany, the
                        British Instron tensile testing machine, which makes the
                        producing equipment and control capacity up to the
                        world's highest, we can ensure the steel wire fitting
                        the latest standards both abroad and domestic.
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {" "}
                        <img
                          src={NewDetailsImage16}
                          title="image"
                          alt="image"
                        />
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span style={{ fontSize: "15px" }}>ABOUT PRODUCT</span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        The company can produce steel wire rope products
                        diameter range of 2.0mm~26mm, according to customer
                        demand, product implementation standards can be National
                        Standards or Enterprise Standards, the Enterprise
                        standard’s indicators are higher than the National
                        standards, zinc layer level can be divided 4 kind as{" "}
                        <strong>H class</strong> 80d (g m²),{" "}
                        <strong>A class</strong> 60d (g m²),{" "}
                        <strong>B class</strong> 30d (g m²),{" "}
                        <strong>G class</strong> 30 (g m²).
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        {" "}
                        <img
                          src={NewDetailsImage17}
                          title="image"
                          alt="image"
                        />
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>
                        <span style={{ fontSize: "15px" }}>ABOUT MARKET</span>
                      </strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        After more than ten years of development, the influence
                        of HIXIH steel wire rope grows rapidly. In the domestic
                        market, product sales reach 16 provinces, and
                        internationally, products are exported to the United
                        States, Germany, Canada, Brazil, Poland, South Africa,
                        Australia, Korea, Vietnam, India, Serbia, Austria,
                        totaling 12 countries.
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#333333",
                          background: "#F7F8FA",
                        }}>
                        Our company adheres to the business philosophy of
                        "Quality is the survival root, Innovation is the soul of
                        development, Science is the motivation, Talented people
                        are the competitive advantage," strictly focusing on
                        production process and strengthening quality control. We
                        have obtained the ISO9001:2015, ISO14001:2015, and
                        ISO28001:2007 certifications in September 2010, and
                        received the award of the National II Level Safety
                        Factory. HIXIH Steel Wire Rope Co., Ltd. will rely on
                        the strength of HIXIH Group and the powerful combination
                        of platforms with the world's top 500 enterprises. We
                        will continue to realize the concept of "improve
                        efficiency, reduce cost, green development, cooperation,
                        and win-win." We aim to enhance research and development
                        ability, improve product quality, sincerely serve
                        customers, and strive to become a global first-class
                        metal product enterprise.
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

export default NewDetails_30DEC20;

import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage13 from "./picture/nd13.webp";
import NewDetailsImage14 from "./picture/nd14.webp";
import NewDetailsImage15 from "./picture/nd15.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_11JAN21 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=5")
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
                  <div className="pinfo font-UI">
                    <p>
                      <span className="font-size-26 pinfo-title">
                        Strong alliance－Hixih & Continental Cooperation
                      </span>
                    </p>

                    <p>
                      <span style={{ letterSpacing: "1px" }}>
                        As the world’s largest manufacturer for high-strength
                        conveyor belt steel wire ropes, Hixih Steel Wire Co.,
                        Ltd. is the world’s largest supplier of ContiTech
                        division, Continental group German, supplies more than
                        150 thousand tons of wires to ContiTech factories in
                        China, Australia, Brazil, the United States, Germany,
                        South Africa, Serbia, and India, accounting for more
                        than 60% of manufacturer capacity. With more than 61
                        branches in 21 countries, ContiTech ranks number one in
                        the manufacturers of non-tire rubber products.
                      </span>
                    </p>
                    <p>
                      <img src={NewDetailsImage13} title="image" alt="image" />
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ letterSpacing: "1px" }}>
                        Over years, Hixih Steel Wire Co., Ltd. has cooperated
                        closely with ContiTech to jointly develop new products
                        of steel wire ropes for conveyor belts. 7×7, 7×19
                        structure ultra-high strength, highly zinc Galvanized
                        layer steel wire rope, 1×19+7×7 structure steel wire
                        rope for conveyor belt, 6×7+9 structure steel wire rope
                        for rubber crawler, 1×24W structure steel wire rope for
                        petroleum hose, Products such as ST10000 thick-diameter
                        steel wire rope for conveyor belts have passed
                        ContiTech's stringent product certificate at one time.
                        Up to 62 products have been certified by ContiTech.
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <strong>Advanced Equipment</strong>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ letterSpacing: "1px" }}>
                        Equipped with advanced production lines, FIB advanced
                        heat treatment hot-dip galvanizing production lines,
                        automatic temperature control system, self-regulation of
                        the atmosphere in the austenitizing furnace, hot-dip
                        galvanizing online monitoring system, nitrogen
                        adjustment. Sorbitic rate exceeds 90%, and the strength
                        and toughness of steel wire at the international leading
                        level. The zinc layer precisely controlled and the
                        excellent concentricity greatly enhanced the rubber
                        adhesion. German automatic mold repair equipment, each
                        processing size of accurately controlled, super high
                        finish. German SKET imported double twisting strander,
                        tube twister, automatic tension adjustment system, clean
                        production, for complete stress relief.
                      </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <img src={NewDetailsImage14} title="image" alt="image" />
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          fontFamily: "宋体",
                          letterSpacing: "1px",
                        }}>
                        High-precision instruments such as high-frequency
                        infrared carbon and sulfur analyzer, German Zeiss
                        metallographic microscope, rubber permeability testing
                        machine, Instron tensile machine, steel wire rope
                        fatigue testing machine, salt spray, damp heat aging
                        testing machine, inductive coupled plasma emission
                        spectrometer, etc., supporting the research and
                        development of new technologies and new products.
                      </span>
                    </p>
                    <p>
                      <img src={NewDetailsImage15} title="image" alt="image" />
                    </p>
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

export default NewDetails_11JAN21;

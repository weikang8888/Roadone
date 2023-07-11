import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage32 from "./picture/nd32.webp";
import NewDetailsImage33 from "./picture/nd33.webp";
import NewDetailsImage34 from "./picture/nd34.webp";
import NewDetailsImage35 from "./picture/nd35.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_01SEP20_2 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=10")
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
                    <p>Roadone M665A Heavy Duty 13R22.5 Tubeless Tire</p>
                    <p>for Trailer, pulling steel bar, iron powder, 150 tons</p>
                    <p>With steel ring, the life span is over one year!</p>

                    <div style={{ display: "flex" }}>
                      <div style={{ flexBasis: "50%", paddingRight: "5px" }}>
                        <img
                          src={NewDetailsImage32}
                          style={{ width: "100%", height: "478px" }}
                          title="M665 (1)"
                          width="361"
                          height="478"
                        />
                      </div>
                      <div style={{ flexBasis: "50%", paddingLeft: "5px" }}>
                        <img
                          src={NewDetailsImage33}
                          style={{ width: "100%", height: "449px" }}
                          title="M665 (2)"
                          width="346"
                          height="449"
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      <div style={{ flexBasis: "50%", paddingRight: "5px" }}>
                        <img
                          src={NewDetailsImage34}
                          style={{ width: "100%", height: "441px" }}
                          title="M665 (4)"
                          width="403"
                          height="441"
                        />
                      </div>
                      <div style={{ flexBasis: "50%", paddingLeft: "5px" }}>
                        <img
                          src={NewDetailsImage35}
                          style={{ width: "100%", height: "449px" }}
                          title="M665 (2)"
                          width="346"
                          height="449"
                        />
                      </div>
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "ROADONE Becomes Good Supplier Of The China Famous Truck Company"
                    }
                    prevLink="/news/roadone-becomes-good-supplier-of-the-china-famous-truck-company"
                    nextLink="/news/roadone-tire-2019-cambodia-dealers-conference-successfully-held"
                    nextText={
                      "Roadone Tire 2019 Cambodia Dealers Conference Successfully Held"
                    }
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

export default NewDetails_01SEP20_2;

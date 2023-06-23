import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage24 from "./picture/nd24.webp";
import NewDetailsImage25 from "./picture/nd25.webp";
import NewDetailsImage26 from "./picture/nd26.webp";
import NewDetailsImage27 from "./picture/nd27.webp";
import NewDetailsImage28 from "./picture/nd28.webp";
import NewDetailsImage29 from "./picture/nd29.webp";
import NewDetailsImage30 from "./picture/nd30.webp";
import NewDetailsImage31 from "./picture/nd31.webp";
import NewDetailsButton from "./NewDetailsReused.tsx/NewDetailsButton";
import NewDetailsPreviousNext from "./NewDetailsReused.tsx/NewDetailsPreviousNext";
import NewDetailsRelatedNews from "./NewDetailsReused.tsx/NewDetailsRelatedNews";

const NewDetails_01SEP20 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=9")
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
                      <img
                        src={NewDetailsImage24}
                        title="cf91b6414fe57dac8b38e241892c436"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage25}
                        title="79a590c7b1c8dc3ff11bf119b8eca51"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage26}
                        title="fa03b552663678c3b0b733bb7397f4b"
                      />
                    </p>
                    <p>
                      <img src={NewDetailsImage27} title="XCMG - 副本" />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage28}
                        title="3b18ee2f6887562e72675491dbaf8fb"
                      />
                    </p>
                    <p>
                      <img src={NewDetailsImage29} title="SINOTRUK - 副本" />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage30}
                        title="94da3028edd48ef82abd6de7914bec8"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage31}
                        title="79b8579239cea77d2d39a022cb14865"
                      />
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

export default NewDetails_01SEP20;
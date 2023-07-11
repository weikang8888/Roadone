import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage52 from "./picture/nd52.jpg";
import NewDetailsImage53 from "./picture/nd53.jpg";
import NewDetailsImage54 from "./picture/nd54.jpg";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_30JUL19 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=15")
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
                        src={NewDetailsImage52}
                        title="微信图片_20190730110608"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage53}
                        title="微信图片_20190730110648"
                      />
                    </p>
                    <p>
                      <img
                        src={NewDetailsImage54}
                        title="微信图片_20190730110638"
                      />
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Roadone Tyre In Pakistan Ceremony"}
                    prevLink="/news/roadone-tyre-in-pakistan-ceremony"
                    nextLink="/news/components-of-a-tyre"
                    nextText={"Components Of A Tyre"}
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

export default NewDetails_30JUL19;

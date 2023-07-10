import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import ServiceDetailsImage8 from "./picture/sd8.webp";
import ServiceDetailsImage9 from "./picture/sd9.webp";
import ServiceDetailsImage10 from "./picture/sd10.webp";
import ServiceDetailsImage11 from "./picture/sd11.webp";
import ServiceDetailsImage12 from "./picture/sd12.webp";
import ServiceDetailsImage13 from "./picture/sd13.webp";
import ServiceDetailsImage14 from "./picture/sd14.webp";

const ServiceDetails_20JUL22 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=3")
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
          <div className="ejfl">Service</div>
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
                      <img src={ServiceDetailsImage8} title="3" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage9} title="2" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage10} title="1" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage11} title="4" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage12} title="5" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage13} title="7" />
                    </p>
                    <p>
                      <img src={ServiceDetailsImage14} title="6" />
                    </p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "Henan Zhumadian Hixih customer 12r22.5 18PR H262 case"
                    }
                    prevLink="/services/henan-zhumadian-hixih-customer-12r22.5-18pr-h262-case"
                    nextText={"Should the tires be rotated?"}
                    nextLink="/services/should-the-tires-be-rotated"
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails_20JUL22;

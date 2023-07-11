import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_21AUG20 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=17")
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
                      Improper tyre pressure can lead to a large number of
                      problems-from uneven tires and accelerated wear to
                      structural damage, or even a reduction in mileage per unit
                      of petrol. Maintaining proper tyre pressure can increase
                      mileage per unit of petrol and significantly save fuel
                      cost.
                    </p>
                    <p>
                      Check the tire pressure at least once a month or before a
                      long trip. Goodyear recommends that you check the tyre
                      pressure once a month or before a long trip.
                    </p>
                    <p>
                      The tyre pressure should be adjusted to the car door sign
                      or the user manual for the vehicle manufacturer's
                      recommended values. Proper maintenance of vehicles and
                      tyres is a useful investment because it translates into
                      the best driving experience, dramatically saving costs and
                      increasing mileage per unit of petrol.
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Components Of A Tyre"}
                    prevLink="/news/components-of-a-tyre"
                    nextText={
                      "How Do You Keep Your Best Driving Performance And Comfort Longer?"
                    }
                    nextLink="/news/how-do-you-keep-your-best-driving-performance-and-comfort-longer"
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

export default NewDetails_21AUG20;

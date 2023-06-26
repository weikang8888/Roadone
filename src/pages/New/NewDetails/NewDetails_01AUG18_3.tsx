import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=18")
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
                      ◆ Check the tyre pressure every 3000 miles/4500 kilometres
                      to keep the vehicle smooth and balanced, thereby
                      increasing the efficiency of fuel use.
                    </p>
                    <p>
                      Note: The tire pressure should be adjusted to the door
                      sign or the recommended value of the car manufacturer in
                      the user manual under cold tyre condition.
                    </p>
                    <p>
                      ◆&nbsp;The inflated pressure shall not exceed the maximum
                      limit value of the tyre side wall markings.
                    </p>
                    <p>
                      ◆&nbsp;Rotate the tires every 6,000–8,000
                      mile/10,000–13,000 kilometer, which helps to wear the
                      tires evenly.
                    </p>
                    <p>
                      ◆&nbsp;According to the vehicle user manual, or once you
                      feel the "pull" of the wheel, you need to check the wheel
                      positioning.
                    </p>
                    <p>
                      ◆&nbsp;Visually inspect the tread for irregular wear as
                      this may be a symptom of a problem with positioning or
                      barometric pressure. For more information, please visit
                      the Tire Personal Care section.
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

export default NewDetails_21AUG20;

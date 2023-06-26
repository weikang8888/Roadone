import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20_6 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=21")
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
                      Maintain proper tyre pressure. Proper tyre pressure helps
                      you get the best tire performance, safety and fuel
                      efficiency.
                    </p>
                    <p>
                      Remember to check the tires regularly (at least once a
                      month) using the appropriate tire gauges (under cold
                      tires).
                    </p>
                    <p>
                      Keep the tire pressure to the recommended level Vehicle
                      signs or owner manuals provide a recommended level of tyre
                      pressure.
                    </p>
                    <p>
                      Maintaining proper tyre pressure is the most important way
                      to prolong tyre life and durability. Insufficient tire
                      pressure is the main cause of tyre failure, which may
                      result in severe tyre rupture, component detachment or
                      puncture.
                    </p>
                    <p>
                      Insufficient tire pressure will reduce the load capacity
                      of the tire, resulting in excessive bending of the side
                      wall, increase rolling resistance, resulting in heat or
                      mechanical damage. Excessive tire pressure will increase
                      the tire hardness, resulting in driving discomfort,
                      causing unnecessary vibration.
                    </p>
                    <p>
                      Excessive tire pressure can also increase the risk of
                      damage to the impact.
                    </p>
                    <p>
                      Wheel speed must not be too fast Avoid turning the wheel
                      too fast when the vehicle is caught in ice, mud or sand.
                      This can lead to a sudden blowout, causing damage to the
                      vehicle and/or causing serious bodily harm to you and the
                      person in the side. Gently do the front and rear swing
                      movement, let the vehicle out of trouble.
                    </p>
                    <p>
                      Do not stand near or behind high-speed rotating tires, for
                      example, when trying to push a vehicle out of trouble, or
                      use a car to rotate a balancing device.
                    </p>
                    <p>
                      Check tire Wear When the tread depth reaches 2/32 inches
                      (0.16 centimeters), be sure to remove the tyre. All new
                      tyres have a tread indicator, and when worn to the above
                      level the smooth surface of the tread grooves will show
                      the indicator strip. Most of the accidents in humid
                      weather are caused by bare or near-bare tread patterns.
                      Excessive wear is more likely to cause tyre wear.
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

export default NewDetails_21AUG20_6;

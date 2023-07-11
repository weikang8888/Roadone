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

const NewDetails_21AUG20_9 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=24")
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
                      <strong>
                        Preparation for winter driving In winter, preparation is
                        very important.
                      </strong>
                    </p>
                    <p>
                      In order to cope with the possible difficulties of driving
                      in winter, it is recommended to prepare the following
                      tools in the vehicle or accessible location
                    </p>
                    <p>Battery Lap Line Cable</p>
                    <p>Snow Shovel</p>
                    <p>First Aid Kit</p>
                    <p>
                      Basic tool box (screwdriver, wrench, pliers, cutter, etc.)
                    </p>
                    <p>Flashlight</p>
                    <p>Cell phone</p>
                    <p></p>
                    <p>
                      <strong>
                        Winter Driving Tips The important thing to remember in
                        winter driving is to maintain high visibility.
                      </strong>
                    </p>
                    <p>
                      Remove all snow and ice from the vehicle before departure.
                      To clean up from the top, remember to clean the roof,
                      windshield, hood, trunk, taillights and mirrors.
                    </p>
                    <p>
                      Once this cleanup is done, you can go on the road, but be
                      sure to keep the following tips in mind: Slow drive.
                    </p>
                    <p>
                      The speed should be in accordance with the weather
                      conditions.
                    </p>
                    <p>
                      Be sure to plan ahead and anticipate dangerous driving
                      conditions, areas and streets. Brake timely. Sometimes,
                      lift the foot away from the accelerator, so that the speed
                      naturally down, you can prevent skidding.
                    </p>
                    <p>
                      At the same time, brake before entering the corners,
                      rather than braking in the corners. Be careful of other
                      vehicles on the road.
                    </p>
                    <p>
                      Keeping a safe distance from the front of the vehicle will
                      allow you more time to react.
                    </p>
                    <p>
                      When driving in snowy or low visibility, turn on the
                      headlights and wiper.
                    </p>
                    <p>Drive smoothly, avoiding sudden braking and turning.</p>
                    <p>
                      Turn on the signal early to allow enough time for other
                      vehicles to respond to your intentions. If the vehicle has
                      anti-lock braking system, be familiar with the system.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      Applying a steady pressure on the brake pedal produces a
                      pulse sensation, which is normal. If you are driving on a
                      dangerous thin ice, remember to stay calm and control
                      properly. To avoid skidding, do not slam the brakes,
                      accelerate or suddenly turn. Instead, try to loosen the
                      brakes and turn the steering wheel to the side of the
                      skid. If you turn too much, you slip to the other side and
                      try to move slowly back to the opposite direction.
                    </p>
                    <p></p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Driving Skills In Wet-sliding Road"}
                    prevLink="/news/driving-skills-in-wet-sliding-road"
                    nextLink="/news/tyre-performance-standard"
                    nextText={"Tyre Performance Standard"}
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

export default NewDetails_21AUG20_9;

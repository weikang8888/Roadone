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

const NewDetails_21AUG20_8 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=23")
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
                        There should be enough tread depth between the tires and
                        the road to drain.
                      </strong>
                    </p>
                    <p>
                      If your tires are currently wearing a tip scale (2.4 mm or
                      3.1 mm), it should be time to consider changing the tires.
                      Low or high tire pressure can lead to lower traction,
                      premature wear, or tyre failure.
                    </p>
                    <p>
                      Check your tire pressure regularly (at least once a month)
                      to ensure that the correct tyre pressure is used for daily
                      driving. Visibility is a key element in ensuring safety
                      when driving under slippery roads. You should also check
                      the use time and wear level of the windshield wipers.
                    </p>
                    <p>
                      If they left stripes on your windshield when used, it's
                      time to replace it. Of course, make sure your car can be
                      seen by the other vehicle as it travels in a rainy road.
                    </p>
                    <p>
                      So please turn on your headlights and make sure it's
                      working properly.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Wet Slippery road tips when driving, please keep the
                        following tips in mind.&nbsp;
                      </strong>
                    </p>
                    <p>
                      1. If there is mist on your window, please turn on the air
                      conditioner in the car to remove the moisture.
                    </p>
                    <p>
                      If your car does not have an air-conditioning system,
                      please open your rear window and let the air flow. Slow
                      driving on slippery roads is critical.
                    </p>
                    <p>
                      Slippery surfaces reduce the control of the wheel,
                      increase your braking distance, and reduce your ability to
                      bypass obstacles correctly.&nbsp;
                    </p>
                    <p>
                      2. On the slippery road, due to the increase in braking
                      distance, you need to pay attention to maintain a further
                      distance from the vehicle in front.
                    </p>
                    <p>
                      Longer heel distances can reduce the impact of front tire
                      sputtering on your vision.
                    </p>
                    <p>
                      3. A sharp or abrupt turn on a muddy road can cause the
                      car to get out of control, so keep the steering drive
                      steady.&nbsp;
                    </p>
                    <p>4. If it is a rainstorm, please stop now!</p>
                    <p>
                      Heavy rains can overload your wiper, resulting in a layer
                      of water flowing down to almost zero visibility.
                    </p>
                    <p>
                      The first rain always makes the road very difficult to
                      drive, because the dry road of mud and oil spills and
                      rainwater mix together, so that the vehicle is very easy
                      to skid, you may feel the ability to control the vehicle
                      is reduced, in the rain just the first half hour of
                      driving to be extra careful.&nbsp;
                    </p>
                    <p>
                      5. After driving through the stagnant water surface,
                      several minor braking should be carried out so that the
                      brake pads can dry.
                    </p>
                    <p></p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"How To Replace Flat Gas Tires"}
                    prevLink="/news/how-to-replace-flat-gas-tires"
                    nextLink="/news/driving-skills-in-winter"
                    nextText={"Driving Skills In Winter"}
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

export default NewDetails_21AUG20_8;

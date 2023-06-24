import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsButton from "./NewDetailsReused.tsx/NewDetailsButton";
import NewDetailsPreviousNext from "./NewDetailsReused.tsx/NewDetailsPreviousNext";
import NewDetailsRelatedNews from "./NewDetailsReused.tsx/NewDetailsRelatedNews";

const NewDetails_21AUG20_5 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=20")
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
                      The carrying capacity of the replacement tyre shall not be
                      lower than the mating tyre
                    </p>
                    <p>
                      The capacity of the replacement tyre must be equal to or
                      greater than the value specified by the matching tyre
                      manufacturer.
                    </p>
                    <p>
                      Note: The European metric and the P metric used in
                      Goodyear manufacture and/or sales shall not be
                      interchangeable with other types of tyres unless the
                      cross-section width, flat ratio and rim diameter are the
                      same as Goodyear tires. Note: "Standard load" tires should
                      not be replaced with "oversized" tires.
                    </p>
                    <p>
                      If the matching tire is "oversized load" tires, it should
                      also be replaced by the same size of the oversized truck
                      tires. In addition, the following principles should be
                      followed:
                    </p>
                    <p></p>
                    <p>
                      When two tyres are installed, the tires with the largest
                      tread depth are installed on the rear axle. If radial or
                      non radial tires must be installed on the same vehicle,
                      the radial tyre is installed on the rear axle. Radial and
                      non radial tyres shall not be mixed on the same shaft.
                      When you need to install snow or all-weather tyres to
                      improve vehicle performance, be sure to install the tires
                      on all four wheels.
                    </p>
                    <p>
                      It is not recommended to install a tire with different
                      speed. Two tyres on the same shaft should have the same
                      rated speed if the tires are installed at different speed.
                      The tires with the lowest speed limit the speed of the
                      vehicle. When you want to change the tire size, be sure to
                      consult the dealer to understand the best rim width, and
                      carefully check the distance between the vehicle and the
                      tyre.
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

export default NewDetails_21AUG20_5;

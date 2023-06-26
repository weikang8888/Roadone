import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20_10 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=11")
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
                      <strong>Cornering grip</strong>
                    </p>
                    <p>Definition: Tyre adhesion when turning.&nbsp;</p>
                    <p>When is it important?</p>
                    <p>A: When driving on a curved road.</p>
                    <p></p>
                    <p>
                      <strong>Rolling resistance</strong>
                    </p>
                    <p>Definition: Rolling capability of tyre surface.&nbsp;</p>
                    <p>When is it important?</p>
                    <p>A: When trying to reduce fuel consumption.</p>
                    <p></p>
                    <p>
                      <strong>Performance</strong>
                    </p>
                    <p>
                      Definition: A general term describing the braking,
                      acceleration, handling and friction properties of
                      automotive tyres.&nbsp;
                    </p>
                    <p>When is it important?&nbsp;</p>
                    <p>A: any time.</p>
                    <p></p>
                    <p>
                      <strong>Manipulation of</strong>
                    </p>
                    <p>
                      Definition: Tyre steering and braking response
                      capability.&nbsp;
                    </p>
                    <p>When is it important?&nbsp;</p>
                    <p>A: any time.</p>
                    <p></p>
                    <p>
                      <strong>Skid Resistance</strong>
                    </p>
                    <p>
                      Definition: The ability of a tyre to splash water on a
                      damp road and maintain grip.&nbsp;
                    </p>
                    <p>When is it important?</p>
                    <p>A: On a rainy wet road when driving.</p>
                    <p></p>
                    <p>
                      <strong>Gas-deficient maintenance tires</strong>
                    </p>
                    <p>
                      Definition: A tyre that can drive a vehicle at a maximum
                      distance of 80 kilometers at the highest speed of 80 km/h
                      after being punctured or discouraged.&nbsp;
                    </p>
                    <p>When is it important?&nbsp;</p>
                    <p>
                      A: When the tyre is punctured or discouraged, it is
                      necessary to continue driving to a safe place to replace
                      the tyre.
                    </p>
                    <p></p>
                    <p>
                      <strong>Wet Land Grip</strong>
                    </p>
                    <p>
                      Definition: tyre adhesion and braking capability on wet
                      pavement.&nbsp;
                    </p>
                    <p>What's important?</p>
                    <p>
                      A: When turning, stopping and overall control of a vehicle
                      on a damp road.
                    </p>
                    <p></p>
                    <p>
                      <strong>Dry Ground grip</strong>
                    </p>
                    <p>
                      Definition: tyre adhesion and braking capability on dry
                      pavement.&nbsp;
                    </p>
                    <p>What's important?&nbsp;</p>
                    <p>
                      A: When turning, stopping and overall control of a vehicle
                      on a dry road surface.
                    </p>
                    <p></p>
                    <p>
                      <strong>Shu-Moderate</strong>
                    </p>
                    <p>
                      Definition: The ability of a tyre to absorb vibrations,
                      bumps, or other road anomalies. When is it
                      important?&nbsp;
                    </p>
                    <p>
                      A: When you want to experience the vehicle, not the road
                      bumps.
                    </p>
                    <p>
                      <strong>Noise Definition</strong>
                    </p>
                    <p>
                      Noise from tires can increase noise pollution in the
                      surrounding environment.
                    </p>
                    <p>
                      The internal noise of the lower tires, can make the
                      vehicle inside more quiet.&nbsp;
                    </p>
                    <p>When is it important?&nbsp;</p>
                    <p>
                      A: When you want to make yourself and the people around
                      you feel quiet during the driving process.
                    </p>
                    <p></p>
                    <p>
                      <strong>Braking distance</strong>
                    </p>
                    <p>
                      Definition: The distance from the beginning of the brake
                      to the complete stop.&nbsp;
                    </p>
                    <p>When is it important?&nbsp;</p>
                    <p>A: When traveling on all roads.</p>
                    <p></p>
                    <p>
                      <strong>Mileage Definition</strong>
                    </p>
                    <p>An indicator of the service life of a tyre.</p>
                    <p>
                      "High mileage" tires generally have a longer life
                      span.&nbsp;
                    </p>
                    <p>When is it important?</p>
                    <p>A: any time.</p>
                    <p></p>
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

export default NewDetails_21AUG20_10;

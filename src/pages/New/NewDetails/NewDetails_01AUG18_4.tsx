import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20_4 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=19")
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
                      <strong>Tyre wear and scratching&nbsp;</strong>
                    </p>
                    <p>
                      The front wheel or rear wheel positioning is not allowed
                      to cause wear speed or uneven. The front wheel drive or
                      the vehicle with independent rear suspension needs
                      four-wheel positioning, not two-wheel positioning.
                    </p>
                    <p>
                      To extend the tyre life, it is recommended to follow the
                      owner's manual instructions to check the positioning.
                      Sometimes, irregular wear of tires can be corrected by
                      rotating tires. Refer to the owner's manual or go to a
                      nearby Goodyear retail store (insert a list of dealers to
                      connect) to learn the correct way of rotation.
                    </p>
                    <p>
                      If the tyres exhibit uneven wear, please allow the
                      Goodyear Professional staff to perform the inspection and
                      correct the positioning, dynamic balance, or other
                      mechanical problems associated with the rotation. The
                      tread directly affects the grip, so it is important to
                      periodically visually check for signs of uneven wear.
                      These signs may include projections, depressions or
                      unusually smooth areas.
                    </p>
                    <p>
                      "Tire intelligence", Rubber Manufacturers Association.
                    </p>
                    <p>
                      Inspection of tyres can help detect puncture holes or
                      other obvious signs of damage that need to be replaced.
                    </p>
                    <p>
                      <strong>Repair</strong>
                    </p>
                    <p>
                      It is important to know when to change tyres and when to
                      change them.
                    </p>
                    <p>
                      When leaking, should be removed to check the inside of the
                      tyre.
                    </p>
                    <p>
                      If only the tread is damaged, the majority of puncture
                      holes, nail holes or other cuts not exceeding 1/4 inches
                      (0.64 cm) can be repaired.
                    </p>
                    <p>
                      Puncture holes in the sidewall or tread larger than 1/4
                      inches (0.64 cm) shall not be repaired and shall not be
                      repaired at the same time worn to a tread less than 1/16
                      inches (0.16 cm).
                    </p>
                    <p>
                      <strong>Dynamic balance and positioning</strong>
                    </p>
                    <p>
                      Tyre dynamic balance and correct positioning of vehicle
                      are very important to tire life and vehicle performance.
                    </p>
                    <p>
                      Tyre imbalance can cause vibration, causing driver
                      fatigue, premature tyre wear and unnecessary wear of the
                      suspension system.
                    </p>
                    <p>
                      Every time you install a tyre, you have to balance it.
                      When shaking or shaking is first shown, balance is made
                      and the tyres are balanced once a year.
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

export default NewDetails_21AUG20_4;

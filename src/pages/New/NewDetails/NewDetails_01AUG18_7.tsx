import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_21AUG20_7 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=22")
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
                      1. First, it is important to ensure that vehicles are
                      parked in a flat position away from traffic.
                    </p>
                    <p>
                      Tip: When the traffic flow is large, need to turn on
                      emergency lights or double flash.
                    </p>
                    <p>
                      2. Then, place the support material before and after the
                      tyre, and will not be lifted up to prevent rolling,
                      increase stability.
                    </p>
                    <p>
                      3. Next, refer to the owner's manual for replacement tires
                      and jacks.
                    </p>
                    <p>
                      4. Now, refer to the owner's manual to ensure proper
                      placement of the jack to prevent damage to the vehicle.
                    </p>
                    <p>
                      5. Start the jack, while maintaining the ground pressure
                      (not to lift all vehicles)
                    </p>
                    <p>
                      6. Remove the wheel cover or center cover, exposing the
                      hub nut.
                    </p>
                    <p>
                      7. Unscrew the nut with the wrench along the
                      counterclockwise direction.
                    </p>
                    <p>
                      8. After ensuring the stability of the jack, lift the
                      vehicle to a sufficient distance to facilitate the removal
                      of the tyre.
                    </p>
                    <p>
                      9. Put the spare tire on the wheel and place the hub nut
                      back in position.
                    </p>
                    <p>
                      10. Rotate the nut clockwise with the wrench. Tip: Make
                      sure the nut is tightened, but not too hard.
                    </p>
                    <p>
                      Otherwise, the vehicle may be detached from the
                      jack.&nbsp;
                    </p>
                    <p>
                      11. After driving a few kilometers, it is best to stop to
                      check to make sure the nut is still fastened.
                    </p>
                    <p></p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"No information"}
                    nextLink="/news/295-80r22-5-hf21-truck-tire-test"
                    nextText={"295/80R22.5 HF21 Truck Tire Test"}
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

export default NewDetails_21AUG20_7;

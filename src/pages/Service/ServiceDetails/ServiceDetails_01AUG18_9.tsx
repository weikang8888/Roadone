import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_9 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=12")
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
                    <div className="mb-3">
                      <p>
                        The signal found Tread wear indication points: these
                        hard rubber wear points are designed to appear when the
                        tread of your tyre is about to be polished. If these
                        wear indicators show up, you need to buy a new one.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        If you are unsure of their location, you can see the
                        symbols associated with their location on the sidewall;
                        Tire tread Wear: The minimum depth of tread residual
                        pattern should be between 2-3mm. It's a good idea to buy
                        a trench deep ruler that is not expensive to check the
                        minimum tread pattern depth required by law.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        Make sure that you also measure the depth of the outside
                        and inside of the tread.
                      </p>
                      <p>
                        A small object is stuck in the tread: it is often seen
                        that a small object is stuck in the tread, if it's stuck
                        in a trench, be careful to take them out to avoid
                        damaging the tires; if a dot looks like it's wearing
                        rubber, like a nail, don't move it before it is
                        delivered to the repair shop, which may cause the tyre
                        to lose tyre pressure. Tire Lateral Wear: If you find
                        that your tires have both sides of the tread pattern
                        wear, you may need to fill the gas or check whether the
                        leak. Tyre pressure will naturally decrease, but driving
                        in a state of lack of gas will increase fuel consumption
                        and increase the risk of accidents. Make sure the tire
                        pressure is checked regularly.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        If you only found a tire shoulder wear on the front
                        wheel, it is possible that the snake is driving or
                        turning too fast. Tread Center Excessive wear: If the
                        tread center than two shoulder wear larger, may be
                        inflated pressure, this will increase the risk of
                        puncture.
                      </p>
                      <p>
                        Please refer to the requirements of the depot and use
                        the barometer to release gas to the recommended tyre
                        pressure value of the depot. Uneven wear of a single
                        tyre: tread wear patterns will remind you of possible
                        problems with the vehicle. If you find that the pattern
                        pitch uneven wear, or bald spots, may need to do the
                        wheel's dynamic balance or positioning.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        Sometimes bald spot wear indicates shock absorber wear,
                        please consult a professional to solve. Uneven wear on
                        tyre marks: your tires will not be polished at the same
                        speed. The front axle bears the engine and most of the
                        steering work, so the tires on the front axle will be
                        polished more quickly. If they are found to be faster
                        than normal wear and tear, check the suspension system.
                      </p>
                      <p>
                        If the tyre on one side of the vehicle is more worn than
                        the other side, it may be necessary to locate it. Tire
                        edge serrated edge pattern wear: If you find that your
                        tires have a predestined or feathery appearance along
                        the edges, the possible cause is an unstable friction on
                        the road. This may be a need for positioning.
                      </p>
                    </div>
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

export default ServiceDetails_01AUG18_9;

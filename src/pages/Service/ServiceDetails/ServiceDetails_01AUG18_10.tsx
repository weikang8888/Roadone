import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_10 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=13")
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
                        Change the position once per 10,000km-12,000km or every
                        6 months to ensure uniform tire wear The tyre
                        transposition helps the uniform wear of all components.
                        It even helps to prolong the life of the tyres and gain
                        a balanced control and traction. Regular tire
                        transposition helps keep the vehicle running smoothly
                        and smoothly.
                      </p>
                      <p>
                        It is also possible to change the tires when the oil is
                        changed for the second time. Why do you want to change
                        the position of the tyre? Tires in front of the vehicle
                        usually wear faster than the rear. If you constantly
                        change their position, this helps them to wear more
                        evenly and achieve maximum tread life.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        Remember that the tyre transposition does not solve the
                        problem of wear caused by tire pressure discomfort. How
                        often do I have to switch places? Each time you change
                        the oil (approximately every 10,000-12,000km), you can
                        change the tyre. If you often drive at high speeds,
                        transport heavy weights, or travel long distances, this
                        extra pressure means that you can switch places a little
                        more frequently. If you find any uneven wear conditions,
                        you need to change the position as soon as possible.
                      </p>
                      <p>
                        When you're driving on a flat road if they're buzzing,
                        it's time to think about changing places. Can I make a
                        replacement for my own tires? Since the proper
                        installation of tyres is important, we recommend that
                        you go to your agent or tire shop to be operated by a
                        professional.
                      </p>
                      <p>
                        But it's also pretty easy to do it yourself, and it
                        helps you understand how it works without any special
                        tools, just a little time and space.
                      </p>
                      <p>
                        To get any advice from the manufacturer of the vehicle,
                        check the owner's manual provided by the car factory.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        It is recommended that you follow the pattern shown in
                        the following figure for the tire transposition
                      </p>
                      <p>
                        Can be used only when all tyre specifications are the
                        same (pattern a-d)
                      </p>
                      <p>
                        The front axle and rear axle of some vehicles are fitted
                        with different specifications of tires and wheels, and
                        in this case pattern E is recommended (if the tyres are
                        installed without rotation direction). The arrow on the
                        tread is observed at any time in the transposition of
                        the tyre with the rotation direction of the tread
                        pattern. These arrows indicate the rotation direction of
                        the tires that must be carefully adhered to.
                      </p>
                      <p>
                        If these tyres are of the same specification, follow
                        pattern a transposition. Using different specifications
                        of the tires with directional requirements or the front
                        axle and rear axle with different bias values the
                        directional tyres of the wheel need to be dismantled
                        tires, installed and rebalanced to carry out the correct
                        transposition – often check your owner's manual to
                        obtain any suggestions from the automaker.
                      </p>
                    </div>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "What are the signs that the tires are about to be damaged?"
                    }
                    prevLink="/services/what-are-the-signs-that-the-tires-are-about-to-be-damaged"
                    nextLink="/services/production-flow-of-tyre"
                    nextText={"Production flow of Tyre"}
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

export default ServiceDetails_01AUG18_10;

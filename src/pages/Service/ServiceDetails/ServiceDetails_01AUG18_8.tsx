import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_8 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=11")
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
                    <p style={{ textAlign: "center" }}>
                      <strong>Tyre replacement</strong>
                    </p>
                    <div className="mb-3">
                      <p>
                        Regular inspection and maintenance of your tires will
                        help prolong their life, but all tires will eventually
                        be polished. The service life of tyres is different. It
                        depends on your driving habits, the climate of your
                        place of residence and how you maintain your tyres.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        All polished or damaged tyres will need to be replaced.
                        Tyre wear: Even the best maintenance does not prevent
                        the tread from being polished over time. Most tyres have
                        a wear indication point. These indicators, usually 1.6mm
                        high, are the minimum tread depth that indicates safe
                        driving.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        You should also check the tread uneven wear patterns to
                        find other problems that may exist for your tires or
                        vehicles. Obvious damage: Please check fetal side and
                        tread for damage. If you find a small crack in the
                        sidewall-also known as a "crack"-it means it's time to
                        change the tyre. The sidewall is not very thick, and the
                        damaged sidewall may cause the tyre to be unusable.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        You also need to check the tread, tire shoulder and
                        sidewall bulge, bubble, cut or rip, which is a clear
                        signal that you need a new tyre, even if the tyre is not
                        polished. When purchasing a tyre replacement, it is best
                        to replace all four tyres at a time. If you only buy
                        two, make sure they match the worn tires and make sure
                        they are mounted in the rear axle of the car, which
                        provides better traction and stability when you drive.
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

export default ServiceDetails_01AUG18_8;

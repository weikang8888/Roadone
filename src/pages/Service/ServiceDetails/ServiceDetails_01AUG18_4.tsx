import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_4 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=7")
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
                        <strong>Check:&nbsp;</strong>
                      </p>
                      <p>
                        <strong>1.Tire pressure.</strong>
                      </p>
                      <p>
                        Driving smoothly from tires. Check the tire pressure
                        before you travel and check at least once a month.
                      </p>
                      <p>
                        ※ Note: Be sure to adjust the tire pressure to the door
                        sign or the user manual for the recommended value of the
                        car in the cold tyre condition. The inflated pressure
                        shall not exceed the maximum limit value of the tyre
                        side wall markings.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>2. air filter.</strong>
                      </p>
                      <p>
                        Replacing a clogged air filter can increase mileage per
                        unit of petrol, thereby saving fuel consumption.&nbsp;
                      </p>
                    </div>{" "}
                    <div className="mb-3">
                      <p>
                        <strong>3. Spark plugs.</strong>
                      </p>
                      <p>
                        Wear or dirty spark plugs can cause ignition failure and
                        waste of fuel. 4. Fuel tank cover. Damage, loosening or
                        loss of the tank cover can waste petrol.
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

export default ServiceDetails_01AUG18_4;

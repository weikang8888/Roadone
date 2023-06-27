import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=4")
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
                    <p className="mb-3">
                      Regular and proper rotation of tires can make the tire
                      wear more evenly.&nbsp;
                    </p>
                    <p className="mb-3">
                      All all-weather tyres should be rotated in a "cross
                      forward" manner, wherein the two tyres to the drive shaft
                      should be crossed forward and the remaining two tires
                      should be moved from the drive shaft to the free scroll
                      shaft and mounted on the original side. This method
                      ensures that all four tires have more uniform wear on the
                      tread lines.&nbsp;
                    </p>
                    <p className="mb-3">
                      The only exception to this method is the use of "single
                      Guide" tires, which should rotate around the same
                      side.&nbsp;
                    </p>
                    <p className="mb-3">
                      If it is a four-wheel drive vehicle, we recommend that all
                      two pairs of tyres be rotated to a new position on the
                      drive shaft.&nbsp;
                    </p>
                    <p className="mb-3">
                      For conventional vehicles, the tyres should be rotated at
                      least once every 10,000 kilometres, and four-wheel-drive
                      vehicles should rotate once every 6,000 kilometres. Please
                      consult the vehicle User manual for the manufacturer's
                      rotation recommendations. The first rotation is the most
                      important. When the tyre is rotated, the tire pressure
                      must be adjusted to the recommended value of the vehicle
                      manufacturer.
                    </p>
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

export default ServiceDetails_01AUG18;

import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_7 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=10")
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
                        1. Buy a tire gauge or use the tire pressure gauge of
                        the tyre shop;&nbsp;
                      </p>
                      <p>
                        2. The first priority is to check the tyre pressure in
                        the morning or in the condition of the tire cooling.
                      </p>
                      <p>
                        3. after the vehicle is driven, the temperature of the
                        tyre will increase and affect the tire pressure value;
                      </p>
                      <p>
                        4. Unscrew the valve cap and put the tire pressure gauge
                        on the valve mouth, it is normal to hear a short hissing
                        sound;
                      </p>
                      <p>
                        5. Read the value of the pressure gauge and compare it
                        with the proposed value of the vehicle (bar or PSI);
                      </p>
                      <p>
                        6. Adjust the pressure, or inflate in the tire shop;
                      </p>
                      <p>
                        7. Re-use the barometer to check the tyre pressure and
                        check with the manufacturer's parameters; 8. Tighten the
                        valve cap of each tyre
                      </p>
                    </div>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "What should you consider when choosing a new tyre?"
                    }
                    prevLink="/services/what-should-you-consider-when-choosing-a-new-tyre"
                    nextLink="/services/when-do-i-need-to-change-the-tyre"
                    nextText={"When do I need to change the tyre?"}
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

export default ServiceDetails_01AUG18_7;

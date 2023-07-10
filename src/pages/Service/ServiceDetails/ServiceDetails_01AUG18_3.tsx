import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_3 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=6")
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
                    <p>
                      Find tyre size and other information according to the
                      following figure:&nbsp;
                    </p>
                    <p>1. Tyre cross-section width (mm)</p>
                    <p>2. Ratio of section height to section width (%)</p>
                    <p>3. Tyre structure (r= meridian)</p>
                    <p>4. Rim diameter (inches)</p>
                    <p>5. Max load Capacity (load index)</p>
                    <p>6. Rated speed</p>
                    <p>7. Tyre without inner tire</p>
                    <p>8. Tread Wear indicator Strip position</p>
                    <p>9. ECE tyre recognition mark and number</p>
                    <p>10. Winter mud and snow driving capacity</p>
                    <p>11. Production date (week, year)</p>
                    <p>12. Traffic compliance Symbol</p>
                    <p>
                      13. Ministry of communications manufacturer Code/li&gt;
                    </p>
                    <p>14. Origin</p>
                    <p>15. Product Name</p>
                    <p>
                      16. Tyre structure Details (Ministry of Transportation)
                    </p>
                    <p>17. Load and pressure signs (Ministry of Transport)</p>
                    <p>
                      18. Tyre type (meridian) Logo (Quality level) required by
                      U.S. Consumer information regulations
                    </p>
                  </div>

                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Does driving habits affect tyre life?"}
                    prevLink="/services/does-driving-habits-affect-tyre-life"
                    nextLink="/services/check-the-vehicle-problems-before-the-long-journey"
                    nextText={
                      "Check the vehicle's problems before the long journey"
                    }
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

export default ServiceDetails_01AUG18_3;

import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import NewDetailsImage20 from "./picture/nd20.webp";


const ServiceDetails_19AUG21 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=1")
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
                    <p style={{textAlign:'center'}}>
                      <img
                        src="/Content/uploads/2022363820/20220723161315b6f62fc733964ba38e24e6e8d2126082.jpg"
                        title="4abf95f97c3f44000214bd654e9dba5"
                        alt="4abf95f97c3f44000214bd654e9dba5"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src="/Content/uploads/2022363820/20220723161137945d1ab985ba4f1a96a26383d6fab917.jpg"
                        title="e4186d9e2690426bcd921129a872d39"
                        alt="e4186d9e2690426bcd921129a872d39"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src="/Content/uploads/2022363820/202207231611274527188b1a3440c2a833d1f7c8f3a68a.jpg"
                        title="bc1417ec541588bb155e39ed26350de"
                        alt="bc1417ec541588bb155e39ed26350de"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src="/Content/uploads/2022363820/202207231611181e64eab1549c47ba81bee8e0e6daa08a.jpg"
                        title="221e680fcf51d34cd1c3355f6cf187d"
                        alt="221e680fcf51d34cd1c3355f6cf187d"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src="/Content/uploads/2022363820/20220723161108916b3d2fe2a347e7a8b09790878a8126.jpg"
                        title="75f33bcecc718d9964c7d71d98d3daa"
                        alt="75f33bcecc718d9964c7d71d98d3daa"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src="/Content/uploads/2022363820/202207231610566b40066eac00455d9fb539a1c33ece3f.jpg"
                        title="30b03ed23eb3f2e48a29c8944b8400b"
                        alt="30b03ed23eb3f2e48a29c8944b8400b"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
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

export default ServiceDetails_19AUG21;

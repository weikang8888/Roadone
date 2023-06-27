import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import ServiceDetailsImage7 from "./picture/sd7.webp";

const ServiceDetails_21AUG20 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=2")
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
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Chinese Henan Zhumadian Hixih customer 12r22.5 18PR H262
                        case
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Model: 1F + 2D + 3T semitrailer
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Wheel position: guide wheel
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Goods: dangerous goods (acetic acid) standard load
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Road condition: few highways, more than 95% are national
                        roads
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Transportation distance: about 7-800km, single way
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Air pressure: about 120 Bar
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Route: Zhumadian - Nanjing and Zhumadian - Nanchang
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Tire assembling date: July 19, 2019
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Tire inspection date: November 12, 2019
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Remaining pattern: average 16.0mm (original pattern
                        18mm)
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Driving mileage: 47,617km (228,656km when loading, now
                        276,273km)
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Unit wear: 23,809km / mm
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Expected driving: 380,000km
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Evaluation of the effect:
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman, serif",
                        }}>
                        Vehicles are engaged in the transportation of dangerous
                        goods. There are only a few high-speed roads in the
                        whole national road. There are 100km mountain roads to
                        Wuhan, which requires high comprehensive performance of
                        tires. At present, Hixih H262F has been in use for 4
                        months. The store owner personally checked the tires and
                        tracked them. The tread pattern is even and flat without
                        falling and gnawing, and there is no tire eating and
                        eccentric wear. The driver and the retail store are very
                        satisfied with the current use effect of Hixih tire. The
                        drivers used to use Hercules in the last stage and
                        complained very badly. Mr.Ye of the big retail store now
                        sells 30 pcs Hixih tires every month. Through data
                        tracking, he is confident and ready to report to the
                        surrounding dangerous goods fleet promotes Hixih
                        products.
                      </span>
                    </p>
                    <p>
                      <img
                        src={ServiceDetailsImage7}
                        title="78647116_158226685452980_2701914469365186560_o"
                        alt="78647116_158226685452980_2701914469365186560_o"
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

export default ServiceDetails_21AUG20;

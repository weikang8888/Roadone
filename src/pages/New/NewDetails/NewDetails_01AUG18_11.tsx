import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_21AUG20_11 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=26")
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
                    <div className="mb-3">
                      <p>
                        Choose the right tyres according to the model, driving
                        style and the conditions of the road you are driving.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        All of our tyres meet the exacting standards of
                        Goodyear, so you can focus on selecting the tyres that
                        suit your needs.
                      </p>
                      <p>
                        Weather conditions for your life and driving Depending
                        on the local climatic conditions, you may need different
                        tyres in different seasons.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        If the winter temperature drops to -7℃, you should
                        consider buying a set of winter tires.
                      </p>
                      <p>
                        Driving style Be sure to consider your driving style
                        when choosing a tyre. If you travel frequently, consider
                        choosing an economy with the farthest mileage. If your
                        driving style tends to be more athletic, consider
                        turning a higher-grip tyre.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        Evaluating the performance characteristics of the tyres
                        will help you find a tire that is best suited to your
                        own style.
                      </p>
                      <p>
                        Choose tyre according to vehicle Matching tyre refers to
                        the tire that the factory installs when the vehicle is
                        manufactured. When choosing a matching tyre, the car
                        manufacturer usually chooses a tyre that meets the
                        maximum range of buyer's needs. The owner's manual may
                        provide further recommendations for replacement tires.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        Usually, matching tires are best for your vehicle, but
                        you can also consider other options.
                      </p>
                      <p>
                        Budget Although it is not possible to tell you exactly
                        how long a tyre can be used or how much fuel is saved,
                        dealers can recommend the most cost-effective tyres
                        based on your driving needs and budget.
                      </p>{" "}
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Tyre Performance Standard"}
                    prevLink="/news/tyre-performance-standard"
                    nextText={"No Inforamtion"}
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />{" "}
                  <DetailsRelatedProducts ids="66,88,36,39,92,48" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDetails_21AUG20_11;

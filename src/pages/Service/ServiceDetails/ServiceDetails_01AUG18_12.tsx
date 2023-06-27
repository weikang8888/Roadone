import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const ServiceDetails_01AUG18_11 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?ids=14")
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
                        <strong>1.Mixing&nbsp;</strong>
                      </p>
                      <p>
                        The rubber in your tires mixes up to 30 ingredients, and
                        the ratio of raw materials depends on the performance
                        targets of the tyres.
                      </p>
                      <p>
                        It is made up of various types of rubber, fillers, and
                        other raw materials, which are mixed together in a giant
                        blender called the Banbury Mixer to produce a black
                        sticky rubber that will be used for calendering.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>2. Rolling</strong>
                      </p>
                      <p>
                        After the rubber is cooled, it is sent to a special
                        mixer, where the rubber is cut into strips that form the
                        basic structure of the tyre.
                      </p>
                      <p>
                        At this stage, other parts of the tyre will be prepared,
                        some of which will cover another type of rubber.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>3. Molding&nbsp;</strong>
                      </p>
                      <p>
                        From inside to outside into the tyre itself. Fibre
                        fabric, wire harness, bead, ply, tread and other
                        components are placed in a tyre forming machine to
                        ensure that each part is in its exact position.
                      </p>
                      <p>
                        The output looks somewhat like the final product, called
                        the birth tire.
                      </p>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>4. Sulphur&nbsp;</strong>
                      </p>
                      <p>
                        The raw tire is placed in a heated mold and is
                        pressurized and cured for vulcanization, and all tyre
                        parts are pressed together and given the final shape of
                        the tyre, including its tread pattern and the
                        manufacturer's sidewall markings.
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

export default ServiceDetails_01AUG18_11;

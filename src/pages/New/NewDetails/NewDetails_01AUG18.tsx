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

const NewDetails_01AUG18 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=16")
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
                    <p>
                      <strong>Parts of a tyre</strong>
                    </p>
                    <p>Tire ring</p>
                    <p>
                      The bead is made of high-strength steel wire covering the
                      rubber, which makes the tyre and the rim tightly
                      integrated into the wheel.
                    </p>
                    <p>
                      With the bundle layer The wire straps surround the tyre
                      for a week to enhance strength and provide stability, made
                      from steel wire woven with rubber-covered steel wire.
                    </p>
                    <p>
                      Sometimes the aramid cord is added to add additional
                      strength, puncture resistance and durability.
                    </p>
                    <p>
                      Ply Layer The ply is the skeleton of a tyre made of fiber,
                      usually made of a woven strand of fiber covered with
                      rubber. This will make your tires flexible.
                    </p>
                    <p>
                      The ply, also known as the carcass ply, is placed directly
                      on the inner lining of the tyre, and the strength of the
                      tyre is provided by it.
                    </p>
                    <p>
                      Fetal side This is the area extending from the bead to a
                      thicker rubber part of the tread and providing lateral
                      stability of the tyre.
                    </p>
                    <p>Here you will find all the tires made of information.</p>
                    <p>
                      Knife Groove pattern and groove Tread pattern blocks are
                      separated by deep grooves that will allow your tires to
                      drain water, snow and mud.
                    </p>
                    <p>
                      The groove pattern is a smaller trench carved on a tread
                      pattern block, which provides extra grip, especially for
                      tires made from icy roads.
                    </p>
                    <p>
                      Tire shoulder A slightly tilted edge portion of the tread
                      on your tyre that is divided by the sidewall.
                    </p>
                    <p>
                      Its pattern and structure play an important role in your
                      steering control.
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={
                      "Road One Attend PHILAUTO At 24th To 26th , July , 2019"
                    }
                    prevLink="/news/roadone-attend-philauto-at-24th-to-26th-july-2019"
                    nextLink="/news/tyre-pressure-why-is-it-important"
                    nextText={"Tyre Pressure: Why Is It Important?"}
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

export default NewDetails_01AUG18;

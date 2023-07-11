import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage12 from "./picture/nd12.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import DetailsRelatedProducts from "../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const NewDetails_20JAN21 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=4")
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
          <div className="ejfl">{t("submenu.new")}</div>
          <SubMenu
            previouslink="/news"
            previouspage={t("submenu.new")}
            currentpage={t("submenu.content")}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{t("new.title.4")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <span className="font-size-26 pinfo-title">
                        {t("new.newDetails20JAN21.content1")}
                      </span>
                    </p>

                    <p>
                      <strong>
                        <span
                          style={{ color: "rgb(0, 0, 0)", fontSize: "26px" }}>
                          {t("new.newDetails20JAN21.content2")}
                        </span>
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <span
                          style={{ color: "rgb(0, 0, 0)", fontSize: "26px" }}>
                          {t("new.newDetails20JAN21.content3")}
                        </span>
                      </strong>
                    </p>

                    <p>
                      <strong>
                        <span
                          style={{ color: "rgb(0, 0, 0)", fontSize: "26px" }}>
                          <img
                            src={NewDetailsImage12}
                            alt="New Details Image"
                          />
                        </span>
                      </strong>
                    </p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"295/80R22.5 HF21 Truck Tire Test"}
                    prevLink="/news/295-80r22-5-hf21-truck-tire-test"
                    nextLink="/news/hixih-continental-cooperation"
                    nextText={"Hixih & Continental Cooperation"}
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

export default NewDetails_20JAN21;

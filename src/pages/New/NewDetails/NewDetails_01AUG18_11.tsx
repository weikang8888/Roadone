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
  const { t } = useTranslation();

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
                  <div className="tit">{t("new.title.25")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <div className="mb-3">
                      <p>{t("new.newDetails01AUG18_11.content1")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("new.newDetails01AUG18_11.content2")}</p>
                      <p>{t("new.newDetails01AUG18_11.content3")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("new.newDetails01AUG18_11.content4")}</p>
                      <p>{t("new.newDetails01AUG18_11.content5")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("new.newDetails01AUG18_11.content6")}</p>
                      <p>{t("new.newDetails01AUG18_11.content7")}</p>
                    </div>
                    <div className="mb-3">
                      <p>{t("new.newDetails01AUG18_11.content8")}</p>
                      <p>{t("new.newDetails01AUG18_11.content9")}</p>{" "}
                    </div>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={t("new.title.24")}
                    prevLink="/news/tyre-performance-standard"
                    nextText={t("other.noInformation")}
                  />
                  <DetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
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
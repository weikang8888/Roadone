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

const NewDetails_21AUG20_10 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=25")
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
                  <div className="tit">{t("new.title.24")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content1")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content2")}</p>
                    <p>{t("new.newDetails01AUG18_10.content3")}</p>
                    <p>{t("new.newDetails01AUG18_10.content4")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content6")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content7")}</p>
                    <p>{t("new.newDetails01AUG18_10.content8")}</p>
                    <p>{t("new.newDetails01AUG18_10.content9")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content11")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content12")}</p>
                    <p>{t("new.newDetails01AUG18_10.content13")}</p>
                    <p>{t("new.newDetails01AUG18_10.content14")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content16")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content17")}</p>
                    <p>{t("new.newDetails01AUG18_10.content18")}</p>
                    <p>{t("new.newDetails01AUG18_10.content19")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content21")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content22")}</p>
                    <p> {t("new.newDetails01AUG18_10.content23")}</p>
                    <p> {t("new.newDetails01AUG18_10.content24")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content26")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content27")}</p>
                    <p>{t("new.newDetails01AUG18_10.content28")}</p>
                    <p>{t("new.newDetails01AUG18_10.content29")}</p>
                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content31")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content32")}</p>
                    <p>{t("new.newDetails01AUG18_10.content33")}</p>
                    <p>{t("new.newDetails01AUG18_10.content34")}</p>

                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content36")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content37")}</p>
                    <p>{t("new.newDetails01AUG18_10.content38")}</p>
                    <p>{t("new.newDetails01AUG18_10.content39")}</p>

                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content41")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content42")}</p>
                    <p>{t("new.newDetails01AUG18_10.content43")}</p>

                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content45")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content46")}</p>
                    <p>{t("new.newDetails01AUG18_10.content47")}</p>
                    <p>{t("new.newDetails01AUG18_10.content48")}</p>
                    <p>{t("new.newDetails01AUG18_10.content49")}</p>

                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content51")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content52")}</p>
                    <p>{t("new.newDetails01AUG18_10.content53")}</p>
                    <p>{t("new.newDetails01AUG18_10.content54")}</p>

                    <p></p>
                    <p>
                      <strong>{t("new.newDetails01AUG18_10.content56")}</strong>
                    </p>
                    <p>{t("new.newDetails01AUG18_10.content57")}</p>
                    <p>{t("new.newDetails01AUG18_10.content58")}</p>
                    <p>{t("new.newDetails01AUG18_10.content59")}</p>
                    <p>{t("new.newDetails01AUG18_10.content60")}</p>

                    <p></p>
                  </div>
                  <DetailsButton />
                  <DetailsPreviousNext
                    prevText={"Driving Skills In Winter"}
                    prevLink="/news/driving-skills-in-winter"
                    nextLink="/news/select-the-appropriate-tire"
                    nextText={"Select The Appropriate Tires"}
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

export default NewDetails_21AUG20_10;

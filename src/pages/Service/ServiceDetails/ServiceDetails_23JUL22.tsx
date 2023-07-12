import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import DetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import DetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";
import ServiceDetailsImage1 from "./picture/sd1.webp";
import ServiceDetailsImage2 from "./picture/sd2.webp";
import ServiceDetailsImage3 from "./picture/sd3.webp";
import ServiceDetailsImage4 from "./picture/sd4.webp";
import ServiceDetailsImage5 from "./picture/sd5.webp";
import ServiceDetailsImage6 from "./picture/sd6.webp";

const ServiceDetails_23JUL22 = () => {
  const { t } = useTranslation();
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
          <div className="ejfl">{t("submenu.service")}</div>
          <SubMenu
            previouslink="/services"
            previouspage={t("submenu.service")}
            currentpage={t("submenu.content")}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{t("service.title.0")}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>
                  <div className="pinfo">
                    <p style={{ textAlign: "center" }}>
                      <img
                        src={ServiceDetailsImage1}
                        title="4abf95f97c3f44000214bd654e9dba5"
                        alt="4abf95f97c3f44000214bd654e9dba5"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src={ServiceDetailsImage2}
                        title="e4186d9e2690426bcd921129a872d39"
                        alt="e4186d9e2690426bcd921129a872d39"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src={ServiceDetailsImage3}
                        title="bc1417ec541588bb155e39ed26350de"
                        alt="bc1417ec541588bb155e39ed26350de"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src={ServiceDetailsImage4}
                        title="221e680fcf51d34cd1c3355f6cf187d"
                        alt="221e680fcf51d34cd1c3355f6cf187d"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src={ServiceDetailsImage5}
                        title="75f33bcecc718d9964c7d71d98d3daa"
                        alt="75f33bcecc718d9964c7d71d98d3daa"
                        width="500"
                        height="600"
                        loading="lazy"
                      />
                      <img
                        src={ServiceDetailsImage6}
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
                    prevText={t("other.noInformation")}
                    nextText={t("service.title.1")}
                    nextLink="/services/henan-zhumadian-hixih-customer-12r22.5-18pr-h262-case"
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

export default ServiceDetails_23JUL22;

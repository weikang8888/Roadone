import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import ServiceImage1 from "../../../static/assets/picture/16164G4B-1.jpg";
import ServiceImage1_CN from "../../../static/assets/cn/1583482770545642.jpg";

import ServiceImage2 from "../../../static/assets/picture/16164H4D-2.jpg";
import ServiceImage2_CN from "../../../static/assets/cn/1583482770608899.jpg";

import NewPreNext from "../../New/NewDetails/NewPrevNext";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";

const TyreStorage = () => {
  const { t, i18n } = useTranslation();

  const [servicesItems, setServicesItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?id=4")
      .then((response) => {
        setServicesItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <ServiceHeader />
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            <ul className="clearfix">
              <li>
                <Link to="/services/tyre-class" className="zx_on">
                  {t("header.tyreClass")}
                </Link>
              </li>
              <li>
                <Link to="/services/guestbook">{t("header.guestBook")}</Link>
              </li>
              <li>
                <Link to="/services/download">{t("header.download")}</Link>
              </li>
            </ul>
            <div className="zxns">
              <div className="zx_box">
                <div className="zx_list fuwu_list">
                  {servicesItems.map((services, index) => (
                    <div className="kt" key={index}>
                      <div className="kt_d2 gn_d2">
                        {t("services.services_title.4")}
                      </div>
                      <div className="news_rt_d3 kt_d5 clearfix">
                        <p className="bs_img">
                          <img src={NewsSource} />
                          <span className="news_date">
                            {t("homepage.roadone")}
                          </span>
                          <img src={NewsDateIcon} />
                          <span className="news_date">
                            {services.services_date}
                          </span>
                        </p>
                      </div>

                      <div className="cont">
                        <p className="text-center">
                          <img
                            src={require(`../../../static/assets/picture/${services.services_image}`)}
                          />
                          {i18n.language === "zh" ? (
                            <>
                              <img src={ServiceImage1_CN} />
                              <img src={ServiceImage2_CN} />
                            </>
                          ) : (
                            <>
                              <img src={ServiceImage1} />
                              <img src={ServiceImage2} />
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <NewPreNext
            nextTitle={t("services.services_title.3")}
            nextUrl="/services/tyre-class/tyre-specification"
            prevTitle={t("homepage.none")}
          />
        </div>
      </div>
    </>
  );
};

export default TyreStorage;

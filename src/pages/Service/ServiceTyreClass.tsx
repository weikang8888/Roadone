import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NewsDateIcon from "../../static/assets/picture/news_date.png";
import "./servicepage.css";
import axios from "axios";
import ServiceHeader from "./ServiceHeader";

const Servicepage = () => {
  const { t, i18n } = useTranslation();

  const getImageSource = (defaultImage, chineseImage) => {
    return i18n.language === "zh" ? chineseImage : defaultImage;
  };
  const chineseImageMap = {
    1: "1583484161611051.jpg",
    2: "16202J405-0.jpg",
    3: "161ZGT5-0.jpg",
    4: "16164J163-0.jpg",
  };
  const [servicesItems, setServicesItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services")
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
                  <div className="kt">
                    <ul>
                      {servicesItems.map((services, index) => {
                        const translationIndex = parseInt(services.id, 10);
                        const chineseImage = chineseImageMap[services.id];
                        const servicesImageUrl = getImageSource(
                          services.services_image,
                          chineseImage
                        );
                        return (
                          <li key={index}>
                            <div className="kt_d1">
                              <a
                                href={services.services_url}
                                title="Tire Function and Structure">
                                {servicesImageUrl && (
                                  <img
                                    src={require(`../../static/assets/picture/${servicesImageUrl}`)}
                                  />
                                )}
                              </a>
                            </div>
                            <div className="kt_d2">
                              <a
                                href={services.services_url}
                                title="Tire Function and Structure">
                                {t(
                                  `services.services_title.${translationIndex}`
                                )}
                              </a>
                            </div>
                            <div className="kt_d3">
                              {t(
                                `services.services_content.${translationIndex}`
                              )}
                            </div>
                            <div className="clearfix">
                              <div className="news_rt_d3 kt_d4">
                                <p className="fl">
                                  <img src={NewsDateIcon} />
                                  <span className="news_date">
                                    {services.services_date}
                                  </span>
                                </p>
                              </div>
                              <div className="yuedu kt_yuedu">
                                <a href={services.services_url}>
                                  {t("homepage.viewDetails")} {">"}
                                </a>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicepage;

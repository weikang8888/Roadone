import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DownloadImage from "../../static/assets/picture/xiazai.jpg";
import { Link } from "react-router-dom";
import TopButton from "../../component/Button/TopButton";
import TopButton_m from "../../component/Button/TopButton_m";
import ServiceHeader from "./ServiceHeader";

const ServiceDownload = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ServiceHeader />

      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            <ul className="clearfix">
              <li>
                <Link to="/services/tyre-class">{t("header.tyreClass")}</Link>
              </li>
              <li>
                <Link to="/services/guestbook">{t("header.guestBook")}</Link>
              </li>
              <li>
                <Link to="/services/download" className="zx_on">
                  {t("header.download")}
                </Link>
              </li>
            </ul>
            <div className="kt kt1">
              <div className="xiazai xiazai1">
                <ul>
                  <li>
                    <div className="clearfix">
                      <span className="fl">
                        {t("services.download.productCatalogue")}
                      </span>
                      <a className="fr">
                        <img src={DownloadImage} title="Download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <span className="fl">
                        
                        {t("services.download.productPoster")}
                      </span>
                      <a className="fr" download="1-200311164H4.zip">
                        <img src={DownloadImage} title="Download" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDownload;

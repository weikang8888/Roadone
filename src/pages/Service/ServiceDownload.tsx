import React, { useEffect, useState } from "react";

import DownloadImage from "../../static/assets/picture/xiazai.jpg";
import { Link } from "react-router-dom";
import TopButton from "../../component/Button/TopButton";
import TopButton_m from "../../component/Button/TopButton_m";
import ServiceHeader from "./ServiceHeader";

const ServiceDownload = () => {
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
                <Link to="/services/tyre-class">Tyre className</Link>
              </li>
              <li>
                <Link to="/services/guestbook">Guestbook</Link>
              </li>
              <li>
                <Link to="/services/download" className="zx_on">
                  Download
                </Link>
              </li>
            </ul>
            <div className="kt kt1">
              <div className="xiazai xiazai1">
                <ul>
                  <li>
                    <div className="clearfix">
                      <span className="fl">
                        Roadone Product Catalogue (TYRE FOR PAKISTANI MARKET)
                      </span>
                      <a
                        className="fr"
                        href="/uploads/file/2003/1-200311164930.zip">
                        <img src={DownloadImage} title="Download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <span className="fl">Roadone Product Catalogue</span>
                      <a
                        className="fr"
                        href="/uploads/file/2003/2020ROADONE.pdf">
                        <img src={DownloadImage} title="Download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="clearfix">
                      <span className="fl">Roadone Product Posters</span>
                      <a
                        className="fr"
                        href="/uploads/file/2003/1-200311164H4.zip">
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

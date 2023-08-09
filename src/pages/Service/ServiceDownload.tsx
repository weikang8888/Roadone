import React, { useEffect, useState } from "react";

import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import DownloadImage from "../../static/assets/picture/xiazai.jpg";
import { Link } from "react-router-dom";
import TopButton from "../../component/Button/TopButton";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import Servicebanner from "../../static/assets/m/fw_banner.jpg";
import TopButton_m from "../../component/Button/TopButton_m";

const ServiceDownload = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopSlides = [{ image: Servicebanner }];
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
      {" "}
      {windowWidth <= 990 ? (
        <>
          <Header_m />
          <Swipper_m
            swiperImage={swiperTopSlides.map((slide) => slide.image)}
            paginationTF={false}
            loopTF={false}
          />
        </>
      ) : (
        <div className="container banner cd fuwu">
          <div className="banner_box cd_banner2">
            <Header
              logo={LogoOther}
              logoClassName={""}
              logoDivClassName={"nav_left nav_left1 fl"}
            />
          </div>
        </div>
      )}
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

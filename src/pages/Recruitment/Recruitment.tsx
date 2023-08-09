import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";
import Recruitmentbanner from "../../static/assets/m/inside_tlt_1.jpg";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import SocialRecruitment from "./SocialRecruitment";
import CampusRecruit from "./CampusRecruitment";
import "./recruitment.css";

const Recruitment = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopMobileSlides = [{ image: Recruitmentbanner }];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperTopSlides = [
    { image: InsideImage1 },
    { image: InsideImage2 },
    { image: InsideImage3 },
  ];
  return (
    <>
      {" "}
      {windowWidth <= 990 ? (
        <>
          <Header_m />
          <Swipper_m
            swiperImage={swiperTopMobileSlides.map((slide) => slide.image)}
            paginationTF={false}
            loopTF={false}
          />
        </>
      ) : (
        <div className="container banner cd about">
          <div className="banner_box cd_box">
            <Swipper
              swiperImage={swiperTopSlides.map((slide) => slide.image)}
              imageClassName={"cd_banner2"}
            />
          </div>
          <Header
            logo={LogoOther}
            logoClassName={""}
            logoDivClassName={"nav_left nav_left1 fl"}
          />{" "}
        </div>
      )}
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list">
            <div className="tabs3">
              <SocialRecruitment showHeader={false} />

              <CampusRecruit showHeader={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;

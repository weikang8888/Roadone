import React from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";

import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import RecruitmentSocialImage1 from "../../static/assets/picture/recruit_social.jpg";
import RecruitmentSocialImage2 from "../../static/assets/picture/recruit_campus.jpg";
import SocialRecruitment from "./SocialRecruitment";
import CampusRecruit from "./CampusRecruitment";

const Recruitment = () => {
  const swiperTopSlides = [
    { image: InsideImage1 },
    { image: InsideImage2 },
    { image: InsideImage3 },
  ];
  return (
    <>
      {" "}
      <div className="banner cd about">
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
      <div className="zxns">
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

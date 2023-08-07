import React from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";

import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import ResponsibilityImage1 from "../../static/assets/picture/responsibility_1.jpg";
import ResponsibilityImage2 from "../../static/assets/picture/responsibility_2.jpg";

import TopButton from "../../component/Button/TopButton";
import { Link } from "react-router-dom";

const SocialResponsibility = () => {
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
            <ul className="clearfix">
              <li>
                <Link to="/about/roadone">About Roadone</Link>
              </li>
              <li>
                <Link to="/about/social-responsibility" className="zx_on">
                  CSR
                </Link>
              </li>
              <li>
                <Link to="/about/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="about_main">
              <div className="zr">
                <div className="zr_img1">
                  <div className="zr_img1_d1">CSR</div>
                  <div className="zr_img1_d2">CSR</div>
                </div>
              </div>
              <div className="about_d1">
                <p style={{ textAlign: "center" }}>
                  <img src={ResponsibilityImage1} />
                  <img src={ResponsibilityImage2} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <TopButton />
      </div>
    </>
  );
};

export default SocialResponsibility;

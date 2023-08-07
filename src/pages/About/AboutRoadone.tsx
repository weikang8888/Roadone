import React from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";

import AboutImage from "../../static/assets/picture/about_img1.jpg";
import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import TopButton from "../../component/Button/TopButton";
import { Link } from "react-router-dom";

const AboutRoadone = () => {
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
                <Link to="/about/roadone" className="zx_on">About Roadone</Link>
              </li>
              <li>
                <Link to="/about/social-responsibility">CSR</Link>
              </li>
              <li>
                <Link to="/about/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="about_main">
              <div className="about_d1">
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "30px", color: "#111" }}>
                    ABOUT ROADONE
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Roadone is a brand of truck tyre, which is launched by Hixih
                  Rubber Industry Group. Roadone has international brand
                  background and Chinese localization advantages. All the key
                  equipment is&nbsp;from the world-className tyre equipment
                  manufacturers, and is customized according to the special
                  requirements of customers. The technology adopts the global
                  leading all steel radial truck tyres production technology
                  from European century enterprise , and integrates the unique
                  design that is more adaptable to the Chinese road conditions.
                  Through the engineering practice at home and abroad and market
                  test, the products have the outstanding advancement,
                  applicability, and practicability, and are suitable for the
                  domestic road transport, and could fully satisfy the market
                  demand.
                </p>
                <p style={{ padding: "20px 0" }}>
                  In order to ensure the high quality, high standard and high
                  performance of the products, the production management
                  implements the network control technology. The quality of the
                  tyres could meet DOT and ECE standard, and conforms to the
                  internal control index of the product technology requirements.
                  There will be a more open world in the future. Hixih Group
                  strives to create a largest rubber product manufacture base in
                  the world with high-end technology, high-end products and
                  highly innovative industrial products with their partners.
                  They also strive to impulse the development of the industry
                  and believe that they can make greater contributions for
                  realizing the greatest revival of &quot;Chinese Dream&quot;.
                </p>
                <p
                  style={{ textAlign: "center" }}
                  className="zx_banner about_img1">
                  <img
                    src={AboutImage}
                    style={{
                      transition: "all 0.5s ease 0s",
                      transform: "scale(1)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
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

export default AboutRoadone;

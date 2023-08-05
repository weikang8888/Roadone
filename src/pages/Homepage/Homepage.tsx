import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swipper from "../../component/Swiper/Swiper";
import Header from "../../component/Header/Header";
import "./homepage.css";

import IndexProtop from "../../static/assets/picture/index_pro_top.jpg";
import Tyre02 from "../../static/assets/picture/type_02.jpg";
import Tyre06 from "../../static/assets/picture/type_06.jpg";

AOS.init();

const Homepage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_box">
          <Swipper />
          <Header />
        </div>
      </div>
      <div className="cp cp0 clearfix">
        <div
          className="cp_lt fl"
          data-aos="slide-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back">
          <img src={IndexProtop} />
        </div>
        <div className="cp_rt fr">
          <div
            className="cp_rt1 clearfix"
            data-aos="slide-left"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000">
            <div className="fl cp_rt_l">
              <a href="product.html">
                <img src={Tyre02} />
              </a>
            </div>
            <div className="fr cp_rt_r">
              <div className="cp_rt2">
                <a href="product.html">Product</a>
              </div>
              <div className="cp_rt4">
                Roadone is of the international high end quality gene and local
                applicable advantage of Chinese Market. All the key equipment is
                from the famous world-className tyre equipment suppliers. It
                adopts the global leading technology of all steel radial truck
                tyres from the European century producer. ...
              </div>
            </div>
          </div>
          <div
            className="cp_rt1 cp_rt2 clearfix"
            data-aos="slide-up"
            data-aos-easing="ease-out-back"
            data-aos-duration="1000">
            <div className="fr cp_rt_l">
              <a href="marketing.html">
                <img src={Tyre06} />
              </a>
            </div>
            <div className="fr cp_rt_r cp_rt_r1">
              <div className="cp_rt2 cp_rt5">
                <a href="marketing.html">Marketing</a>
              </div>
              <div className="cp_rt4">
                Roadone Stores provide not only the high quality truck and bus
                tyres, but also good service for our customers. ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

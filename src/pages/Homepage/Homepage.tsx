import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swipper from "../../component/Swiper/Swipper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Header from "../../component/Header/Header";
import axios from "axios";
import "./homepage.css";

import Logo from "../../static/assets/main/logo.png";
import IndexProtop from "../../static/assets/picture/index_pro_top.jpg";
import Tyre02 from "../../static/assets/picture/type_02.jpg";
import Tyre06 from "../../static/assets/picture/type_06.jpg";
import SwiperTopImage1 from "../../static/assets/image/banner_1.jpg";
import SwiperTopImage2 from "../../static/assets/image/banner_2.jpg";
import SwiperTopImage3 from "../../static/assets/image/banner_3.jpg";
import SwiperTopImage4 from "../../static/assets/image/banner_4.jpg";
import SwiperTopImage5 from "../../static/assets/image/banner_5.jpg";

import SwiperImage1 from "../../static/assets/picture/index_pro_1.jpg";
import SwiperImage2 from "../../static/assets/picture/index_pro_2.jpg";
import SwiperImage3 from "../../static/assets/picture/index_pro_3.jpg";
import SwiperImage4 from "../../static/assets/picture/index_pro_4.jpg";
import BotImage from "../../static/assets/picture/index_botimg.jpg";
import MobileHomepage from "../Mobile/MobileHomepage/MobileHomepage";

AOS.init();
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Homepage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [newsItems, setNewsItems] = useState([]);
  const swiperSlides = [
    { image: SwiperImage1 },
    { image: SwiperImage2 },
    { image: SwiperImage3 },
    { image: SwiperImage4 },
  ];

  const swiperTopSlides = [
    { image: SwiperTopImage1, link: "products1.html" },
    { image: SwiperTopImage2, link: "products1.html" },
    { image: SwiperTopImage3, link: "products1.html" },
    { image: SwiperTopImage4, link: "products1.html" },
    { image: SwiperTopImage5, link: "products1.html" },
  ];
  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
      {windowWidth <= 990 ? (
        <MobileHomepage />
      ) : (
        <>
          <div className="container banner">
            <div className="banner_box">
              <Swipper
                swiperImage={swiperTopSlides.map((slide) => slide.image)}
                imageClassName={"banner5"}
              />
              <Header
                logo={Logo}
                logoClassName={"in_logo"}
                logoDivClassName="nav_left fl"
              />
            </div>
          </div>

          <div className="container cp cp0 clearfix">
            <div className="row justify-content-between">
              <div
                className="col-6 cp_lt fl"
                data-aos="slide-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-out-back">
                <img src={IndexProtop} />
              </div>
              <div className="col-6 cp_rt fr">
                <div
                  className="cp_rt1 clearfix d-flex"
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
                      Roadone is of the international high end quality gene and
                      local applicable advantage of Chinese Market. All the key
                      equipment is from the famous world-className tyre
                      equipment suppliers. It adopts the global leading
                      technology of all steel radial truck tyres from the
                      European century producer. ...
                    </div>
                  </div>
                </div>
                <div
                  className="cp_rt1 cp_rt2 clearfix d-flex"
                  data-aos="slide-up"
                  data-aos-easing="ease-out-back"
                  data-aos-duration="1000">
                  <div className="fr cp_rt_r cp_rt_r1">
                    <div className="cp_rt2 cp_rt5">
                      <a href="marketing.html">Marketing</a>
                    </div>
                    <div className="cp_rt4">
                      Roadone Stores provide not only the high quality truck and
                      bus tyres, but also good service for our customers. ...
                    </div>
                  </div>{" "}
                  <div className="fr cp_rt_l">
                    <a href="marketing.html">
                      <img src={Tyre06} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container cp cp2 clearfix">
            <div className="row justify-content-between">
              <div
                className="col-6 cp2_lt fl"
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-back">
                <div className="news">News</div>
                <div className="news_main">
                  <ul>
                    {newsItems.map((news, index) => (
                      <li key={index}>
                        <div>{news.news_date}</div>
                        <p>
                          <a href={news.news_url} target="_blank">
                            {news.news_title}
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="more">
                    <a href="news.html">MORE {">"}</a>
                  </div>
                </div>
              </div>
              <div
                className="col-6 fr"
                data-aos="slide-left"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-out-back">
                <div className="cp2_rt_box">
                  <Swiper
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    className="swiper-container"
                    id="banner">
                    {swiperSlides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <a>
                          <img src={slide.image} />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="cp cp3 aos-init aos-animate"
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-back">
                <img src={BotImage} />
              </div>
            </div>
            <div className="row">
              <div
                className="cp cp4 clearfix aos-init"
                data-aos-duration="1000"
                data-aos="slide-up"
                data-aos-easing="ease-out-back">
                <div className="cp4_box">
                  <div className="ul2 fl">
                    <ul>
                      <li className="first_li">Tongli Tyre Co., Ltd.</li>
                      <li>
                        Hixih Industrial Park, Yanzhou District, Jining City,
                        Shandong Province, China. 272199
                      </li>
                      <li>
                        <span>
                          National Service Hotline: <s>400-639-1111</s>
                        </span>
                        <i>
                          International Service Hotline: <s>+86-537-5174476</s>
                        </i>
                      </li>
                      <li>
                        <span>
                          E-mail: <s>roadone@hixih.com.cn</s>{" "}
                        </span>
                        <i className="web">
                          Website: <s>http://en.tltyre.com</s>
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;

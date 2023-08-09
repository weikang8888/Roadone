import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./mobilehomepage.css";
import axios from "axios";

import SwiperTopImage1 from "../../../static/assets/m/banner_1.jpg";
import SwiperTopImage2 from "../../../static/assets/m/banner_2.jpg";
import SwiperTopImage3 from "../../../static/assets/m/banner_3.jpg";
import SwiperTopImage4 from "../../../static/assets/m/banner_4.jpg";
import SwiperTopImage5 from "../../../static/assets/m/banner_5.jpg";
import Tyre02 from "../../../static/assets/picture/type_02.jpg";
import Tyre06 from "../../../static/assets/picture/type_06.jpg";
import IndexProtop from "../../../static/assets/m/index_pro_top.png";
import SwiperImage1 from "../../../static/assets/picture/index_pro_1.jpg";
import SwiperImage2 from "../../../static/assets/picture/index_pro_2.jpg";
import SwiperImage3 from "../../../static/assets/picture/index_pro_3.jpg";
import SwiperImage4 from "../../../static/assets/picture/index_pro_4.jpg";
import BotImage from "../../../static/assets/m/index_botimg.jpg";
import FooterMobile from "../../../component/Footer/FooterMobile";

SwiperCore.use([Navigation, Pagination]);

const MobileBanner = () => {
  const [newsItems, setNewsItems] = useState([]);

  const swiperTopSlides = [
    { image: SwiperTopImage1, link: "products1.html" },
    { image: SwiperTopImage2, link: "products1.html" },
    { image: SwiperTopImage3, link: "products1.html" },
    { image: SwiperTopImage4, link: "products1.html" },
    { image: SwiperTopImage5, link: "products1.html" },
  ];
  const swiperSlides = [
    { image: SwiperImage1 },
    { image: SwiperImage2 },
    { image: SwiperImage3 },
    { image: SwiperImage4 },
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
  return (
    <>
      <div className="banner">
        <div className="banner_box">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            className="swiper-container"
            id="banner">
            {swiperTopSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <a>
                  <img src={slide.image} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="in_main">
        <div className="in_main_box">
          <a href="list-2.html">
            <div className="i_hd">Product</div>
            <div className="i_d3">
              Roadone is of the international high end quality gene and local
              applicable advantage of Chinese Market. All the key equipment is
              from the famous world-className tyre equipment suppliers. It
              adopts the global leading technology of all steel radial truck
              tyres from the European century producer. ...
            </div>
            <div className="i_d4">
              <img src={Tyre02} />
            </div>
          </a>
          <a href="list-6.html">
            <div className="i_hd">Marketing</div>
            <div className="i_d3">
              Roadone Stores provide not only the high quality truck and bus
              tyres, but also good service for our customers. ...
            </div>
            <div className="i_d4">
              <img src={Tyre06} />
            </div>
          </a>
        </div>
        <div className="an">
          <img src={IndexProtop} />
        </div>
        <div className="cp_b2">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
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
        <div className="i_hd i_hd1">News</div>
        <div className="i_new">
          {newsItems.map((news, index) => (
            <ul>
              <li key={index}>
                <a href={news.news_url}>
                  <div className="i_new_bt">{news.news_title}</div>
                  <span>{news.news_date}</span>
                </a>
              </li>
            </ul>
          ))}
          <div className="more">
            <a href="list-1.html">MORE {">"}</a>
          </div>
        </div>
        <div className="ji_d">
          <div>
            <img src={BotImage} />
          </div>
        </div>
        <div className="lx">
          <div className="lx_a">Contact Us</div>
          <div className="lx_b">Tongli Tyre Co., Ltd.</div>
          <div className="lx_c">
            Hixih Industrial Park, Yanzhou District, Jining City, Shandong
            Province, China. 272199
          </div>
          <div className="lx_c">National Service Hotline: 400-639-1111</div>
          <div className="lx_c">
            International Service Hotline: +86-537-5174476
          </div>
          <div className="lx_c">E-mail: roadone@hixih.com.cn</div>
          <div className="lx_c">Website: http://en.tltyre.com</div>
        </div>
      </div>
    </>
  );
};

export default MobileBanner;
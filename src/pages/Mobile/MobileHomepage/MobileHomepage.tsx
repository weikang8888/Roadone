import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
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
import Header_m from "../../../component/Header/Header_m";
import Swipper_m from "../../../component/Swiper/Swipper_m";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MobileHomepage = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  const swiperTopSlides = [
    { image: SwiperTopImage1 },
    { image: SwiperTopImage2 },
    { image: SwiperTopImage3 },
    { image: SwiperTopImage4 },
    { image: SwiperTopImage5 },
  ];
  const swiperSlides = [
    {
      image: SwiperImage1,
      url: "/products/truck-tyres/middle-long-distance/RD15L",
    },
    {
      image: SwiperImage2,
      url: "/products/truck-tyres/middle-long-distance/RF02",
    },
    {
      image: SwiperImage3,
      url: "/products/truck-tyres/middle-long-distance/RA95",
    },
    { image: SwiperImage4, url: "/products/truck/middle-short-distance/GA98" },
  ];
  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/api_roadone/news/news")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Header_m />
      <Swipper_m
        swiperImage={swiperTopSlides.map((slide) => slide.image)}
        paginationTF={true}
        loopTF={true}
      />

      <div className="in_main">
        <div className="in_main_box">
          <a href="list-2.html">
            <div className="i_hd">{t("header.products")}</div>
            <div className="i_d3">{t("homepage.productDescription")}</div>
            <div className="i_d4">
              <img src={Tyre02} />
            </div>
          </a>
          <a href="list-6.html">
            <div className="i_hd">{t("homepage.marketing")}</div>
            <div className="i_d3">{t("homepage.marketingDescription")}</div>
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
            autoplay={{ delay: 3000 }}
            className="swiper-container"
            id="banner">
            {swiperSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <a href={slide.url}>
                  <img src={slide.image} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="i_hd i_hd1">{t("header.news")}</div>
        <div className="i_new">
          {newsItems.map((news, index) => {
            const translationIndex = parseInt(news.id, 10);
            return (
              <ul key={index}>
                <li key={index}>
                  <a href={news.news_url}>
                    <div className="i_new_bt">
                      {t(`news.news_title.${translationIndex}`)}
                    </div>
                    <span>{news.news_date}</span>
                  </a>
                </li>
              </ul>
            );
          })}
          <div className="more">
            <a href="list-1.html">
              {t("header.more")} {">"}
            </a>
          </div>
        </div>
        <div className="ji_d">
          <div>
            <img src={BotImage} />
          </div>
        </div>
        <div className="lx">
          <div className="lx_a">{t("header.contactUs")}</div>
          <div className="lx_b">{t("about.companyName")}</div>
          <div className="lx_c">{t("about.companyAddress")}</div>
          <div className="lx_c">
            {t("about.nationalServiceHotline")}: 400-639-1111
          </div>
          <div className="lx_c">
            Inter{t("about.nationalServiceHotline")}: +019-790-9609
          </div>
          <div className="lx_c">{t("about.email")}: roadone@hixih.com.cn</div>
          <div className="lx_c">
            {t("about.website")}: https://www.roadone.com.my/
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHomepage;

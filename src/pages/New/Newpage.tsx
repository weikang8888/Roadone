import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";

import LogoOther from "../../static/assets/main/cd_logo.png";
import NewsDateIcon from "../../static/assets/picture/news_date.png";
import axios from "axios";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import NewBanner from "../../static/assets/m/xw_banner.png";
import NewHeader from "./NewHeader";

const New = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopMobileSlides = [{ image: NewBanner }];
  const [clickedProductId, setClickedProductId] = useState(null);

  const resetClickedProductId = () => {
    setClickedProductId(null);
  };

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
      <NewHeader />
      <div className="container news_main1">
        <div className="news_hd">
          <span>News</span>
        </div>
        <div className="news_box">
          <ul>
            {newsItems.map((news, index) => (
              <li key={index}>
                <div className="news_m clearfix">
                  <div className="col-lg-4">
                    <a href={news.news_url} className="news_img">
                      <img
                        src={require(`../../static/assets/picture/${news.news_image}`)}
                      />
                    </a>
                  </div>
                  <div className="news_rt fr ps-4">
                    <div className="news_rt_d1"></div>
                    <div className="news_rt_d2">{news.news_content}</div>
                    <div className="news_rt_d3 clearfix">
                      <p className="fl">
                        <img src={NewsDateIcon} alt="News Date" />
                        <span className="news_date">{news.news_date}</span>
                      </p>
                      <div className="news_rt_d3r fr clearfix">
                        <div className="yuedu fl">
                          <a>View details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default New;

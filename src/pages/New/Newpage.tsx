import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";

import LogoOther from "../../static/assets/main/cd_logo.png";
import NewsDateIcon from "../../static/assets/picture/news_date.png";
import axios from "axios";

const New = () => {
  const [newsItems, setNewsItems] = useState([]);

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
      <div className="banner cd news">
        <div className="banner_box news_box">
          <Header
            logo={LogoOther}
            logoClassName={""}
            logoDivClassName={"nav_left nav_left1 fl"}
          />
        </div>
      </div>

      <div className="news_main1">
        <div className="news_hd">
          <span>News</span>
        </div>
        <div className="news_box">
          <ul>
            {newsItems.map((news, index) => (
              <li key={index}>
                <div className="news_m clearfix">
                  <a href={news.news_url} className="news_img fl">
                    <img
                      src={require(`../../static/assets/picture/${news.news_image}`)}
                    />
                  </a>
                  <div className="news_rt fr">
                    <div className="news_rt_d1">
                      <a href={news.news_url}>{news.news_title}</a>
                    </div>
                    <div className="news_rt_d2">{news.news_content}</div>
                    <div className="news_rt_d3 clearfix">
                      <p className="fl">
                        <img src={NewsDateIcon} alt="News Date" />
                        <span className="news_date">{news.news_date}</span>
                      </p>
                      <div className="news_rt_d3r fr clearfix">
                        <div className="yuedu fl">
                          <a href={news.news_url}>View details</a>
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

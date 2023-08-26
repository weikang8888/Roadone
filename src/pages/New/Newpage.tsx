import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import NewsDateIcon from "../../static/assets/picture/news_date.png";
import axios from "axios";
import NewHeader from "./NewHeader";

const New = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

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
      <NewHeader />
      <div className="container news_main1">
        <div className="news_hd">
          <span>News</span>
        </div>
        <div className="news_box">
          <ul>
            {newsItems.map((news, index) => {
              const translationIndex = parseInt(news.id, 10);
              return (
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
                      <div className="news_rt_d1">
                        {" "}
                        <a> {t(`news.news_title.${translationIndex}`)}</a>
                      </div>
                      <div className="news_rt_d2">
                        {t(`news.news_content.${translationIndex}`)}
                      </div>
                      <div className="news_rt_d3 clearfix">
                        <p className="fl">
                          <img src={NewsDateIcon} alt="News Date" />
                          <span className="news_date">{news.news_date}</span>
                        </p>
                        <div className="news_rt_d3r fr clearfix">
                          <div className="yuedu fl">
                            <a href={news.news_url}>{t("homepage.viewDetails")}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default New;

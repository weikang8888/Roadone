import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewHeader from "../NewHeader";
import NewPreNext from "./NewPrevNext";

const NewDetails20170110 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/api_roadone/news/news?id=4")
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
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list newsbox">
            {newsItems.map((news, index) => (
              <div className="kt" key={index}>
                <div className="kt_d2 gn_d2">{t("news.news_title.4")}</div>
                <div className="news_rt_d3 kt_d5 clearfix">
                  <p className="bs_img">
                    <img src={NewsSource} />
                    <span className="news_date">{t("homepage.roadone")}</span>
                    <img src={NewsDateIcon} />
                    <span className="news_date">{news.news_date}</span>
                  </p>
                </div>

                <div className="cont">
                  <p className="text-center">
                    <img
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                  </p>
                  <p>{t("news.NewDetails20170110.content1")}</p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={t("news.news_title.3")}
            nextUrl={"/news/2017/0306_711"}
            prevTitle={"None"}
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20170110;

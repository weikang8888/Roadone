import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewDetailsImage1 from "../../../static/assets/picture/1IZ0K15-1.jpg";
import NewDetailsImage2 from "../../../static/assets/picture/1IZ02961-2.jpg";
import NewDetailsImage3 from "../../../static/assets/picture/1IZ04F5-3.jpg";
import NewHeader from "../NewHeader";
import NewPreNext from "./NewPrevNext";

const NewDetails20180622 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/api_roadone/news/news?id=2")
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
                <div className="kt_d2 gn_d2">{t("news.news_title.2")}</div>
                <div className="news_rt_d3 kt_d5 clearfix">
                  <p className="bs_img">
                    <img src={NewsSource} />
                    <span className="news_date">{t("homepage.roadone")}</span>
                    <img src={NewsDateIcon} />
                    <span className="news_date">{news.news_date}</span>
                  </p>
                </div>

                <div className="cont">
                  <p>{t("news.NewDetails20180622.content1")}</p>
                  <p className="text-center">
                    <img
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                  </p>
                  <p>
                    {t("news.NewDetails20180622.content2")}

                    <br />
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage1} />
                  </p>
                  <p>{t("news.NewDetails20180622.content3")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage2} />
                  </p>
                  <p>{t("news.NewDetails20180622.content4")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p>{t("news.NewDetails20180622.content5")}</p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={t("news.news_title.1")}
            nextUrl="/news/2018/0820_713"
            prevUrl={"/news/2017/0306_711"}
            prevTitle={t("news.news_title.3")}
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20180622;

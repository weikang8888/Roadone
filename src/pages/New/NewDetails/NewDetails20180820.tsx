import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewDetailsImage1 from "../../../static/assets/picture/1J44TV5-1.jpg";
import NewDetailsImage2 from "../../../static/assets/picture/1J44W630-2.jpg";
import NewDetailsImage3 from "../../../static/assets/picture/1J44U4R-3.jpg";
import NewDetailsImage4 from "../../../static/assets/picture/1J44TN4-4.jpg";
import NewDetailsImage5 from "../../../static/assets/picture/1J44RR3-5.jpg";
import NewDetailsImage7 from "../../../static/assets/picture/1J44QJ6-7.jpg";
import NewDetailsImage8 from "../../../static/assets/picture/1J44T126-8.jpg";
import NewDetailsImage9 from "../../../static/assets/picture/1J44S3Y-9.jpg";
import NewDetailsImage10 from "../../../static/assets/picture/1J44Q443-10.jpg";
import NewDetailsImage11 from "../../../static/assets/picture/1J44VW1-11.jpg";
import NewDetailsImage12 from "../../../static/assets/picture/1J44W400-12.jpg";
import NewHeader from "../NewHeader";
import NewPreNext from "./NewPrevNext";

const NewDetails20180820 = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/api_roadone/news/news?id=1")
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
                <div className="kt_d2 gn_d2">{t(`news.news_title.1`)}</div>
                <div className="news_rt_d3 kt_d5 clearfix">
                  <p className="bs_img">
                    <img src={NewsSource} />
                    <span className="news_date">{t("homepage.roadone")}</span>
                    <img src={NewsDateIcon} />
                    <span className="news_date">{news.news_date}</span>
                  </p>
                </div>

                <div className="cont">
                  <p>{t("news.NewDetails20180820.content1")}</p>
                  <p className="text-center">
                    <img
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                    &nbsp;
                    <img alt="" src={NewDetailsImage1} />
                  </p>
                  <p>
                    {t("news.NewDetails20180820.content2")}
                    <br />
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage2} />
                  </p>
                  <p className="fw-bold text-center">
                    {t("news.NewDetails20180820.content3")}
                  </p>
                  <p>{t("news.NewDetails20180820.content4")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p className="fw-bold text-center">
                    {t("news.NewDetails20180820.content5")}
                    <br />
                  </p>
                  <p>{t("news.NewDetails20180820.content6")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage4} />
                  </p>
                  <p>{t("news.NewDetails20180820.content7")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage5} />
                  </p>
                  <p>{t("news.NewDetails20180820.content8")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p className="fw-bold text-center">
                    {t("news.NewDetails20180820.content9")}
                  </p>
                  <p>{t("news.NewDetails20180820.content10")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage7} />
                  </p>
                  <p>{t("news.NewDetails20180820.content11")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage8} />
                  </p>
                  <p className="fw-bold text-center">
                    {t("news.NewDetails20180820.content12")}
                  </p>
                  <p>{t("news.NewDetails20180820.content13")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage9} />
                  </p>
                  <p>{t("news.NewDetails20180820.content14")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage10} />
                  </p>
                  <p>{t("news.NewDetails20180820.content15")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage11} />
                  </p>
                  <p>{t("news.NewDetails20180820.content16")}</p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage12} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={t("homepage.none")}
            nextUrl=""
            prevUrl={"/news/2018/0622_712"}
            prevTitle={t("news.news_title.2")}
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20180820;

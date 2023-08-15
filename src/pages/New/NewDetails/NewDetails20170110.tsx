import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewHeader from "../NewHeader";
import NewPreNext from "./NewPrevNext";

const NewDetails20170110 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?id=4")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {" "}
      <NewHeader />
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list newsbox">
            {newsItems.map((news, index) => (
              <div className="kt" key={index}>
                <div className="kt_d2 gn_d2">{news.news_title}</div>
                <div className="news_rt_d3 kt_d5 clearfix">
                  <p className="bs_img">
                    <img src={NewsSource} />
                    <span className="news_date">Roadone</span>
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
                  <p>
                    Roadone Long-hual Standard Load Series 12R22.5 18PR ★ RD05,
                    after more than a year, its excellent performance is very
                    popular with customers. d on this size, Roadone promotes a
                    new size suitable for long-hual standard load transport,
                    which is 12R22.5 18PR RD05. Compared with 18PR RD05, 18PR ★
                    RD05 has better loading capacity.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={
              "Roadone Passed ISO/TS 16949 Certification, and Get OE Permit of International Automobile Industry"
            }
            nextUrl={"/news/2017/0306_711"}
            prevTitle={"None"}
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20170110;

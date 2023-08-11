import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewDetailsImage1 from "../../../static/assets/picture/1I3232432-1.jpg";

const NewDetails20170306 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?id=3")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
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
                  <p>
                    On March 6, Tongli Tire Co., Ltd held ISO/TS 16949 award
                    ceremony, and officially get ISO/TS 16949:2009 Quality
                    Management System Certification certified by TÜV SÜD, which
                    marks Roadone Tire takes a key step toward expanding the
                    global OE market.
                  </p>
                  <p className="text-center">
                    <img
                      className="new3"
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                  </p>
                  <p className="text-center">ISO/TS 16949 Certification</p>
                  <p>
                    on ISO 9001 standard, ISO/TS 16949 Certification is an
                    international automobile industry technical specification
                    made by the International Automotive Task Force (IATF)
                    according to the characteristics of automobile industry,
                    which is the highest international standard systems
                    recognized by the global auto industry and the related
                    enterprises at present. In the meeting with senior vice
                    president Mr. Sun Jianjun from TÜV SÜD&nbsp;Group, Chairman
                    Mr. Niu Teng showed that getting ISO/TS 16949: 2009
                    certification is just a start, Roadone Tire will continue to
                    carry forward the spirit of innovation, with the technical
                    support of TÜV SÜD&nbsp;group, to provide customers more
                    comfortable and safer driving experience. For the
                    revitalization of China’s national industry, we will make
                    unremitting efforts to build Roadone into a leading tire
                    brand in China.
                    <br />
                  </p>
                  <p>
                    Roadone tires always take quality system construction as an
                    important part of forging enterprise competitiveness. Take
                    “innovation driven, professional manufacture, quality first,
                    customer first”&nbsp;as the quality policy, build unique
                    quality management system d on international standards, and
                    reduce management executive cost to provide powerful
                    security for the quality improvement of product and service.
                    After ISO/TS 16949 certification, Roadone tires get the
                    permits of parts suppliers of international auto industry,
                    which help to expand the markets at home and abroad,
                    especially the key OEMs.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage1} />
                  </p>
                  <p>
                    TÜV SÜD&nbsp;group was&nbsp;founded in 1866, and is the
                    world’s largest and oldest inspection institution. The
                    certifications issued are recognized&nbsp;by most OEMs. TÜV
                    has confidence in Roadone, and will continue to offer
                    superior technical support and authorized certification
                    service. TÜV&nbsp;hopes to have deep cooperation with Hixih
                    group and to achieve greater development together.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDetails20170306;

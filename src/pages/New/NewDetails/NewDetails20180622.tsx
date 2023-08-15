import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import NewDetailsImage1 from "../../../static/assets/picture/1IZ0K15-1.jpg";
import NewDetailsImage2 from "../../../static/assets/picture/1IZ02961-2.jpg";
import NewDetailsImage3 from "../../../static/assets/picture/1IZ04F5-3.jpg";
import NewHeader from "../NewHeader";
import NewPreNext from "./NewPrevNext";

const NewDetails20180622 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?id=2")
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
                  <p>
                    On the morning of June 22, HIXIH Group and Qingdao Port
                    International Logistics Co., Ltd. held a signing ceremony
                    for the strategic cooperation agreement in Qingdao Port
                    Group. As the seventh largest port in the world, Qingdao
                    Port, with its special position in the industrial chain,
                    accumulates social logistics resources to provide a full
                    range of services for ROADONE&#39;s import and export
                    business. At the same time, ROADONE will build 100,000 units
                    of vehicle within the Qingdao Port Group. Carrying out
                    ancillary services marks another breakthrough in the field
                    of logistics and transportation services for its own brand
                    ROADONE Tire. ZhengMinghui, Chairman of Qingdao Port, Chen
                    Fuxiang, and Secretary of Qing gang International Board of
                    Directors, Li Wucheng, General Manager of Qingdao Port
                    International Logistics Co., Ltd., Deputy General Manager
                    Leng Bing, Chairman of HIXHI Group Niu Teng and Sales
                    Director Niu Fei attended the signing ceremony.
                  </p>
                  <p className="text-center">
                    <img
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                  </p>
                  <p>
                    For this cooperation, the Chairman of the HIXIH Group Niu
                    Teng said that since its establishment, HIXIH Group has
                    always adhered to high-quality, high-end and high-efficiency
                    development, adhered to strong alliance and innovative
                    development, and has embarked on a high-end leading,
                    innovation-driven, technology-supported, green and
                    low-carbon for the development road. HIXIH Group and Qingdao
                    Port share a common philosophy and common pursuit in the
                    field of logistics and transportation. The cooperation
                    between the two parties is a win-win situation of resource
                    sharing, complementary advantages and strong cooperation.
                    <br />
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage1} />
                  </p>
                  <p>
                    The Chairman of Qingdao Port International Logistics Co.,
                    Ltd. Zheng Minghui said that the cooperation is d on the
                    logistics industry represented by Qingdao Port and the depth
                    of the multi-field, internationalization, high-end,
                    high-quality and efficient real economy representative -
                    HIXIH Rubber Industry Group Strategic cooperation, a new
                    model will inevitably bring new opportunities. Qingdao Port
                    will take this opportunity as an opportunity to rely on the
                    special position of the port in the industrial chain, guided
                    by customer demand, accumulate flow resources, and configure
                    dock loading and unloading, transportation, The value-added
                    service system of ship generation, freight forwarding,
                    bonded, processing, warehousing, trade, inspection and
                    finance has established an industrial structure that fully
                    connects the market, optimizes service supply and is full of
                    internal vitality, and gradually becomes the organization
                    leader of logistics supply chain.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage2} />
                  </p>
                  <p>
                    Qingdao Port International Logistics Co., Ltd. is a supplier
                    and platform operator with international vision and
                    providing door-to-door logistics services. As a wholly-owned
                    subsidiary of Qingdao Port, Qing Gang Logistics has a
                    registered capital of 245 million Yuan. On the basis of good
                    cooperation, adhering to the cooperation concept of
                    &quot;integrity, innovation, service, and win-win&quot;, we
                    aim to build a full-service logistics service delivery
                    service center, further strengthen exchanges, and carry out
                    deeper cooperation in the field of logistics and
                    transportation.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p>
                    HIXIH Group will bravely take on the historical mission of
                    &quot;building a high-end independent tire brand and let the
                    world re-recognize Shandong tires&quot;, and will build our
                    own brand – ROADONE tires into the world famous brand of
                    China tire industry, breaking the domestic The high-end tire
                    market has long been monopolized by foreign brands, driving
                    the Chinese tire industry to improve quality, efficiency and
                    transformation, and rank among the top tire industry in the
                    world.Let China&#39;s largest automobile producing country
                    truly has its own series of high-end tires!
                  </p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={
              "Roadone Passed ISO/TS 16949 Certification, and Get OE Permit of International Automobile Industry"
            }
            nextUrl="/news/2017/0306_711"
            prevUrl={"/news/2018/0820_713"}
            prevTitle={
              "Explosion scene | ROADONE debut at the SHANGHAI Tire Show, showing the national brand charm!"
            }
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20180622;

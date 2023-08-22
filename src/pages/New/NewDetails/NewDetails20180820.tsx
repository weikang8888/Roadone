import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?id=1")
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
                    On August 20, 2018, the long-awaited 16th China
                    International Tire Wheel Expo (CITEXPO 2018) was held at the
                    Shanghai World Expo Exhibition and Convention Center. As a
                    representative of high-end national independent brands,
                    ROADONE tires appeared in the show. The director of Huaqin
                    Group, Niu Fei, visited the exhibition site and attracted
                    extensive attention from many domestic and foreign media. On
                    the day of the exhibition, ROADONE Tire booth was full of
                    popularity and came to exchange and visit. The number of
                    customers is endless. According to incomplete statistics,
                    more than 300 customers were received on the first day, and
                    more customers signed cooperation agreements at the
                    exhibition site.
                  </p>
                  <p className="text-center">
                    <img
                      alt=""
                      src={require(`../../../static/assets/picture/${news.news_image}`)}
                    />
                    &nbsp;
                    <img alt="" src={NewDetailsImage1} />
                  </p>
                  <p>
                    ROADONE Tire has brought a number of world-className
                    products to this exhibition. With its diversified product
                    system and excellent technical strength, ROADONE Tire and
                    many internationally renowned tire companies compete on the
                    same stage, showing the national brand charm. In this
                    exhibition, Niufei detailed the development history of
                    ROADONE Tire and the goals of participating in this
                    exhibition, and explained the future development plan of
                    ROADONE Tire.
                    <br />
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage2} />
                  </p>
                  <p className="fw-bold text-center">
                    The quality of RONDONE tire never compromises
                  </p>
                  <p>
                    ROADONE has always adhered to the user-centered operation
                    mode of a single brand and regards the problems we encounter
                    as wealth. As a high-performance national independent brand,
                    ROADONE will continue to fulfill its commitment to customers
                    and build a good product. Continue to increase R &amp; D
                    investment, create product differentiation and innovation,
                    meet the diversified needs of the market and continuously
                    provide high-quality tire products with excellent
                    performance, further enhance the user experience and let
                    consumers feel the excellent performance of ROADONE tires.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p className="fw-bold text-center">
                    Going abroad to the world
                    <br />
                  </p>
                  <p>
                    For this exhibition, Niufei said: In the face of
                    anti-dumping and double anti-insurance against the
                    development of domestic tires, ROADONE tires seize the
                    opportunity to occupy overseas markets with quality. ROADONE
                    tires continue to promote the globalization process, its
                    products has been sold to many countries and regions around
                    the world. At the same time, ROADONE will continue to
                    increase investment in research, development and technology
                    and provide safer and more valuable quality tire products to
                    meet the different needs of consumers in the global market.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage4} />
                  </p>
                  <p>
                    At this exhibition, ROADONE exhibited a number of models and
                    specifications, which not only showed the ROADONE
                    high-performance products to overseas distributors in a
                    close-range manner, but also realized timely and effective
                    communication between manufacturers, which will further
                    enhance ROADONE&#39;s corporate and brand image strongly,
                    promotes the development of the tire market, continuously
                    enhances market visibility, enhances the market share of
                    ROADONE tires and promotes national independent brands.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage5} />
                  </p>
                  <p>
                    As the first time to participate in the exhibition, ROADONE
                    tires not only exhibited a large number of star truck tire
                    products: GD58, RD25, but it is surprising that ROADONE
                    tires have passenger tires in this exhibition, namely:
                    Famous X7, Super R7.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage3} />
                  </p>
                  <p className="fw-bold text-center">
                    Medium and short-distance truck tires
                  </p>
                  <p>
                    The GD58 is suitable for driving wheels. It is designed for
                    medium and short-distance mixed road transportation such as
                    provincial roads and country roads. The sturdy shoulder
                    pattern and unique heat tire formula make this tire safer
                    and more durable. A model of truck tires!
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage7} />
                  </p>
                  <p>
                    The RD25 tires are designed for high-speed, national
                    long-haul, long-haul standard transport and are suitable for
                    drive shafts. It adopts special block pattern and home
                    widening pattern design, which can provide super driving
                    force for trucks, improve service life and save cost, which
                    is very popular among users.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage8} />
                  </p>
                  <p className="fw-bold text-center">
                    High-end passenger car tires
                  </p>
                  <p>
                    The Famous X7 Urban SUV tires are asymmetrical in design and
                    uniquely designed to improve tire comfort and drainage while
                    maintaining tire grip. The terminator of the city SUV is
                    none other than it.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage9} />
                  </p>
                  <p>
                    The Super R7 is even more eye-catching. The asymmetrical
                    pattern design optimizes the tire grounding area and
                    pressure distribution. The superior apex design allows it to
                    have excellent handling performance and ensure comfort and
                    safety during driving. It is the &quot;Almighty King&quot;
                    in the tire!
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage10} />
                  </p>
                  <p>
                    More and more customers have strict requirements on the
                    driving comfort, durability, handling, traction and grip of
                    the tires. The various tire products displayed on the spot
                    have won the trust and praise of the visiting customers.
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage11} />
                  </p>
                  <p>
                    ROADONE will actively promote overseas business through
                    active research on the &quot;One Belt, One Road&quot; and
                    &quot;Free Trade Zone&quot; industrial policies. Next,
                    ROADONE will increase its development efforts in overseas
                    markets, accelerate the &quot;going out&quot; strategic
                    layout and strive to enhance the international market.
                    Market competitiveness, bigger and stronger overseas market!
                  </p>
                  <p className="text-center">
                    <img alt="" src={NewDetailsImage12} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <NewPreNext
            nextTitle={"None"}
            nextUrl=""
            prevUrl={"/news/2018/0622_712"}
            prevTitle={
              "ROADONE Tire `sailing` in Qingdao Port, HIXIH Group and Qingdao Port International Logistics to achieve strategic cooperation"
            }
          />
        </div>
      </div>
    </>
  );
};

export default NewDetails20180820;

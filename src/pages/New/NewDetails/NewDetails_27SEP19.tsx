import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerBanner from "../../../component/Banner/InnerBanner";
import SubMenu from "../../../component/SubMenu/SubMenu";
import NewsBanner from "../../../static/image/news/news-banner.webp";
import "./newDetails.css";
import NewDetailsImage47 from "./picture/nd47.jpg";
import NewDetailsImage48 from "./picture/nd48.jpg";
import NewDetailsImage49 from "./picture/nd49.jpg";
import NewDetailsImage50 from "./picture/nd50.jpg";
import NewDetailsImage51 from "./picture/nd51.jpg";
import NewDetailsButton from "../../../component/DetailsReused.tsx/DetailsButton";
import NewDetailsPreviousNext from "../../../component/DetailsReused.tsx/DetailsPreviousNext";
import NewDetailsRelatedNews from "../../../component/DetailsReused.tsx/DetailsRelatedNews";

const NewDetails_27SEP19 = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news/news?ids=14")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Assuming you want to render the first news item
  const newsItem = newsItems.length > 0 ? newsItems[0] : null;

  return (
    <>
      <InnerBanner bannerimage={NewsBanner} />

      <section>
        <div className="container container1">
          <div className="ejfl">News</div>
          <SubMenu
            previouslink="/news"
            previouspage="News"
            currentpage={"Content"}
          />
          <div className="main">
            <div className="newcon clearfix">
              {newsItem && (
                <>
                  <div className="tit">{newsItem.title}</div>
                  <div className="time">
                    - {newsItem.daymonth}, {newsItem.year} -
                  </div>

                  <div className="pinfo">
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        lineHeight: "36px",
                        background: "rgb(248, 249, 250)",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          textAlign: "justify",
                        }}>
                        On September 23, the RoadoneTire Distributor Conference
                        was successfully held in Islamabad, Pakistan. The
                        RoadoneTire Oversea sales Team and 200 local dealers
                        gathered together to discuss the development plan. This
                        conference is the first major overseas conference of
                        RoadoneTire in 2019, and it is also an important measure
                        for Roadone Tire to implement the localization marketing
                        strategy.
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage47}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        background: "rgb(248, 249, 250)",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                        }}>
                        In recent years, RoadoneTire actively responded to the
                        national “Belt and Road” initiative and
                        the“China-Pakistan Economic Corridor” construction plan,
                        continuously researchingand developing new products
                        suitable for the local market in Pakistan,continuously
                        improving the brand awareness of Roadone tires in
                        Pakistan, andinjecting friendship into China-Pakistan
                        friendship. At the same time, Roadoneis constantly
                        accelerating the pace of globalization, and formulating
                        overseasdevelopment strategies of localization,
                        intercontinentalization, R&Dglobalization, and
                        continuously fulfilling the corporate mission of
                        “Creating RoadoneWorld Famous Brand”.
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage48}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image 2"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                      }}>
                      <span
                        style={{
                          color: "rgb(0, 0, 0)",
                          fontSize: "14px",
                          letterSpacing: "1px",
                        }}>
                        In 2003, HIXIH Groupfounded the Roadone brand. In 2004,
                        Roadone tires entered the domestic andforeign markets.
                        In response to the current situation that the
                        internationalbrands in China's truck and bus market are
                        not satisfied with the local brands,and in the absence
                        of technology in 2014, HIXIH Group invested in
                        theestablishment of TONGLI tires with Roadone brand,
                        through years of localizationand intensive cultivation,
                        Roaodne tires withstood the test in Pakistan's toughroad
                        conditions, and gradually won the confidence of end
                        users. Roadone willcontinue to improve its old products
                        and strive to become the first choice forPakistan
                        replacement tires market！
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage49}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          textAlign: "center",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Image"
                      />
                    </p>

                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        lineHeight: "2em",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                          color: "rgb(0, 0, 0)",
                        }}>
                        Facing the complicated and severe domestic and
                        international economic situation, HIXIH Group firmly
                        adheres to the development policy of “two unwavering,
                        two persistences and one goal”, and wins a series of
                        tough battles, such as strong alliances, market
                        development, and large-scale project construction with
                        international vision, open thinking, and innovative
                        measures. Achieving high-level and high-quality
                        development and have created good performances that have
                        risen to the challenge and risen against the trend,
                        fully demonstrating the unique advantage that the more
                        difficult the HIXIH Group face, the more stable HIXIH
                        become, more development with more crisis.
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage50}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          fontSize: "14px",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                        }}>
                        Taking this overseas conference as the starting point,
                        Roadone will carry out more localized marketing
                        activities, continuously improve its independent
                        innovation capability and core competitiveness, and
                        create a perfect quality system and international brand
                        will be the first priority. Roadone will continue to
                        provide customers with higher service quality, increase
                        overseas market share, continuously improve the market
                        sales system, develop local sales policies, and jointly
                        improve the quality of Roadone brand services.
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        whiteSpace: "normal",
                        textAlign: "center",
                      }}>
                      <img
                        className="rich_pages"
                        src={NewDetailsImage51}
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          height: "auto",
                          width: "592px",
                        }}
                        alt="Conference Image"
                      />
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                        clear: "both",
                        minHeight: "1em",
                        color: "rgb(51, 51, 51)",
                        fontFamily:
                          '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
                        fontSize: "17px",
                        letterSpacing: "0.544px",
                        textAlign: "justify",
                        whiteSpace: "normal",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}>
                      <span
                        style={{
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                          letterSpacing: "1px",
                          backgroundImage: "initial",
                          backgroundPosition: "initial",
                          backgroundSize: "initial",
                          backgroundRepeat: "initial",
                          backgroundAttachment: "initial",
                          backgroundOrigin: "initial",
                          backgroundClip: "initial",
                          fontSize: "14px",
                        }}>
                        Roadone Tire will be based on excellent tire quality,
                        docking the global tire market and creating a more
                        comprehensive and dense network of world tire markets.
                        Efforts will be made to create a new engine for economic
                        development and to create a new impetus for economic
                        development, so that "Tire Intelligent Manufacturing"
                        will be equated with "High-end Made in China" to create
                        a new "high-end Made in China" business card that will
                        never fade!
                      </span>
                    </p>
                  </div>

                  <NewDetailsButton />
                  <NewDetailsPreviousNext
                    prevText={"No information"}
                    nextLink="/news/295-80r22-5-hf21-truck-tire-test"
                    nextText={"295/80R22.5 HF21 Truck Tire Test"}
                  />
                  <NewDetailsRelatedNews ids="1,3,4,5,6,7,8,9,10,11,12" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDetails_27SEP19;

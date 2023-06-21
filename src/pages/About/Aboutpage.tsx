import React from "react";
import InnerBanner from "../../component/Banner/InnerBanner";
import SubMenu from "../../component/SubMenu/SubMenu";
import "./aboutpage.css";
import AboutBanner from "../../static/image/about/about-banner.webp";
import GroupProfile1 from "../../static/image/about/groupprofile-1.webp";
import GroupProfile2 from "../../static/image/about/groupprofile-2.webp";
import LocationImage1 from "../../static/image/about/location-1.webp";
import LocationImage2 from "../../static/image/about/location-2.webp";
import LocationImage3 from "../../static/image/about/location-3.webp";
import EventImage from "../../static/image/about/events.webp";
import IndustrialImage1 from "../../static/image/about/industrial-1.webp";
import IndustrialImage2 from "../../static/image/about/industrial-2.webp";
import EquipmentImage1 from "../../static/image/about/equipments-1.webp";
import EquipmentImage2 from "../../static/image/about/equipments-2.webp";
import EquipmentImage3 from "../../static/image/about/equipments-3.webp";
import EquipmentImage4 from "../../static/image/about/equipments-4.webp";
import EquipmentImage5 from "../../static/image/about/equipments-5.webp";
import EquipmentImage6 from "../../static/image/about/equipments-6.webp";
import ProductionImage1 from "../../static/image/about/production-1.webp";
import ProductionImage2 from "../../static/image/about/production-2.webp";
import ProductionImage3 from "../../static/image/about/production-3.webp";
import ProductionImage4 from "../../static/image/about/production-4.webp";
import ProductionImage5 from "../../static/image/about/production-5.webp";
import ProductionImage6 from "../../static/image/about/production-6.webp";
import ProductionImage7 from "../../static/image/about/production-7.webp";
import InnovationImage1 from "../../static/image/about/innovation-1.webp";
import InnovationImage2 from "../../static/image/about/innovation-2.webp";
import MarketImage from "../../static/image/about/market.webp";

const Aboutpage = () => {
  return (
    <>
      <InnerBanner bannerimage={AboutBanner} />

      <section>
        <div className="container container1">
          <div className="ejfl">Tongli Tyre Factory</div>
          <SubMenu currentpage="Tongli Tyre Factory" currentlink={"/about"} />
          <div className="main">
            <div className="pinfo">
              <p className="center">
                <span className="section-title-text">
                  <strong>Group Profile</strong>
                </span>
              </p>
              <p>
                <br />
              </p>
              <p className="content">
                <span className="text">
                  Tongli TyreCo,.Ltd is founded by Hixih&nbsp;
                  <span className="font-times-new-roman">
                    rubber industry group, at the Hixih Industry Park.
                  </span>
                </span>
              </p>
              <p className="content">
                <span className="text">
                  Hixih rubber industry group is an international, diversified
                  and innovative enterprise group with high performance tires
                  and high-end engineering rubber as the leading enterprise,
                  involving power, new energy, metal products, biological
                  engineering, real estate development, medical and health care,
                  capital operation and many other fields. Adhere to high-end
                  development direction of high quality and efficiency, the
                  implementation innovation drive, pulled open, big project
                  development strategy, promote mainland successively with
                </span>
                <span className="font-times-new-roman">pirelli</span>
                <span className="font-times-new-roman">
                  Italy, Germany, Belgium
                </span>
                <span className="font-times-new-roman">bekaert</span>
                <span className="font-times-new-roman">
                  special many fortune 500 companies cooperate with well-known
                  multinational company, to become the world's top
                </span>
                <span className="font-times-new-roman">tyre</span>
                <span className="text">
                  manufacturers and the largest production base of conveyor
                  belt. It has been ranked among "China's top 500 enterprises",
                  "China's top 500 manufacturing enterprises" and "shandong's
                  top 100 enterprises" for many consecutive years. In 2018,
                </span>
                <span className="font-times-new-roman">Hixih</span>
                <span className="text">
                  group achieved sales revenue of 43.9 billion yuan and profits
                  and taxes of 2.18 billion yuan.
                </span>
              </p>
              <p>
                <span className="font-times-new-roman"></span>
              </p>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="image-container">
                  <div>
                    <img
                      className="image"
                      src={GroupProfile1}
                      title="2.jpg"
                      alt="2.jpg"
                    />
                  </div>
                  <p>Gate</p>
                </div>
                <div className="image-container">
                  <div>
                    <img
                      className="image"
                      src={GroupProfile2}
                      title="1.jpg"
                      alt="1.jpg"
                    />
                  </div>
                  <p>Office Building</p>
                </div>
              </div>
              <fieldset className="border-top">
                <legend className="legend-title center">
                  <span className="title">
                    <strong>
                      <span className="subtitle">Locatio</span>
                      <span className="subtitle">n</span>
                    </strong>
                  </span>
                </legend>
              </fieldset>
              <div>
                <div>
                  <p>
                    <span className="content-text">Hixih</span>
                    <span className="content-text">Group Located in</span>
                    <span className="content-text">Yanzhou</span>
                    <span className="content-text">
                      Area, Jining City, Shandong Province
                    </span>
                  </p>
                </div>
                <p className="content-paragraph">
                  <span className="content-text">
                    This city has bullet train spot ,
                  </span>
                  <br />
                </p>
                <p className="content-paragraph">
                  <span className="content-text">
                    2 hours to Beijing, 3 hours to Shanghai ; 180 KM to Jinan
                    International Airport, 300 KM to Qingdao Port
                  </span>
                </p>
              </div>
              <p>
                <br />
              </p>
              <div className="image-gallery">
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage1}
                      className="gallery-image"
                      title=".png"
                      alt=".png"
                    />
                  </div>
                  <p>Location</p>
                </div>
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage2}
                      className="gallery-image"
                      title="3.jpg"
                      alt="3.jpg"
                    />
                  </div>
                  <p>Gate View</p>
                </div>
                <div className="gallery-item">
                  <div>
                    <img
                      src={LocationImage3}
                      className="gallery-image"
                      title="5.jpg"
                      alt="5.jpg"
                    />
                    Part of the Industry Park
                  </div>
                </div>
              </div>
              <p>
                <br />
              </p>
              <div className="event-container">
                <div className="event-image">
                  <img
                    src={EventImage}
                    className="event-image"
                    title=".jpg"
                    alt=".jpg"
                    width="509"
                    height="356"
                  />
                </div>
                <div className="event-description">
                  <p className="event-title">
                    <strong className="event-title-text">BIG EVENTS</strong>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      Tyre business started and ROADONE brand was registered by
                      Hixih Group in 2003
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2004.07, Established ROADONE Tyre TBR project with annual
                      12 million production capacity.
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2005.08, Established joint venture with an Italian world
                      top className brand tire.
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2010 The "high-level dialogue between China and the global
                      economy 2010 of huaqin group" was held. Former
                      <strong className="event-highlight">
                        US President George w. Bush (in the Picture)
                      </strong>{" "}
                      participated.
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2014.03, Restart ROADONE TBR project By Tongli Tyre Co.,
                      Ltd.
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2015.02, United with the German Continental to create the
                      world's largest conveyor belt production enterprise and
                      the world's first-className rubber tube manufacturing
                      plant;
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2015.03, With Belgium Bekaert strong alliance, to become
                      China's leading enterprises in steel wire products
                    </span>
                  </p>
                  <p className="event-text">
                    <span className="event-description-text">
                      2015.01, Tongli Tyre(Roadone) project was started, to
                      produce high-end truck &amp; bus radial tyres with 3
                      million sets production capacity.
                    </span>
                  </p>
                  <p className="event-text">
                    <br />
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>

              <fieldset className="section-fieldset">
                <legend className="section-legend center">
                  <span className="section-legend-text">
                    <strong className="section-legend-title">
                      <span className="title">
                        Industrial Park
                      </span>
                    </strong>
                  </span>
                  <span className="section-legend-subtitle">
                    <span className="section-subtitle-text">&nbsp;</span>
                  </span>
                </legend>
              </fieldset>
              <p className="content-paragraph">
                <span className="content-text">
                  Hixih industrial park covers an area of more than 7000 acres
                  (4.7 Million Square Meters), vigorously promoting the
                  construction of green factories, green manufacturing and green
                  parks, building a low-carbon, clean and efficient industrial
                  chain of circular economy, creating a modern and ecological
                  industrial park, which has been rated as one of the country's
                  first resource-saving and environment-friendly enterprises.
                </span>
              </p>
              <p className="content-center">
                <img
                  src={IndustrialImage1}
                  title="(1)"
                  alt="(1)"
                  className="content-image"
                />
              </p>
              <p className="content-paragraph">
                <span className="content-text">
                  The factory room occupies an area of 200 thousand square
                  meters. The steel frame of the factory is built by Butler USA
                  according to the FM approvals requirement which represents the
                  top level of tire factory establishment.
                </span>
              </p>
              <p className="content-paragraph">
                <span className="content-text">
                  Factory production equipment are purchased from the world's
                  first-className equipment suppliers, and customized according
                  to our requirements, to ensure the quality and performance of
                  Roadone tire products.
                </span>
              </p>
              <p className="content-center">
                <img
                  src={IndustrialImage2}
                  title="1.png"
                  alt="1.png"
                  className="content-image"
                />
              </p>
              <p className="content-paragraph">
                <br />
              </p>
              <p className="content-paragraph">
                <br />
              </p>
              <fieldset className="section-fieldset">
                <legend className="section-legend center">
                  <span className="section-legend-text">
                    <strong className="section-legend-title">
                      <span className="title">
                        EQUIPMENTS FROM THE WORLD
                      </span>
                    </strong>
                  </span>
                </legend>
              </fieldset>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage1}
                      alt="1.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">Internal Mixer—Krupp</span>
                      <span className="text-left">of</span>
                      <span className="text-left">Germany</span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage2}
                      alt="2.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">Wire extruder–</span>
                      <span className="text-left">BARTELL of</span>
                      <span className="text-left">Germany</span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage3}
                      alt="3.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">Rubber sheet</span>
                      <span className="text-left">calender</span>
                      <span className="text-left">machine—</span>
                      <span className="text-left">Berstorf</span>
                      <span className="text-left">of</span>
                      <span className="text-left">Germany</span>
                    </strong>
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <div className="flex-container">
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage4}
                      alt="4.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">
                        Curing press– most stable curing system
                      </span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage5}
                      alt="5.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">Wire</span>
                      <span className="text-left">calender</span>
                      <span className="text-left">machine–</span>
                      <span className="text-left">Rudolf of</span>
                      <span className="text-left">Italy</span>
                    </strong>
                  </p>
                </div>
                <div className="flex-item">
                  <div className="image-wrapper">
                    <img
                      src={EquipmentImage6}
                      alt="6.jpg"
                      className="max-width"
                    />
                  </div>
                  <p>
                    <strong>
                      <span className="text-left">Building machine---</span>
                      <span className="text-left">VMI of</span>
                      <span className="text-left">Netherland</span>
                    </strong>
                  </p>
                </div>
              </div>
              <fieldset className="border-container">
                <legend className="center">
                  <span className="legend-title-3">
                    <strong>Productions</strong>
                  </span>
                </legend>
              </fieldset>
              <p className="times-new-roman">
                ROADONE tyre was grandly launched once again after more than 10
                years' successful cooperation between Hixih Group and another
                World-wide Group. All the key equipment are famous
                world-className, and customized according to international
                standard. It adopts the global leading technology of all steel
                radial truck tyres from the European century enterprise,
                integrating the unique design to meet the demand of all road
                conditions. Through the engineering practice and market tests at
                the domestic and the overseas, the products are proved to be
                more advanced, more applicable and practicable which make them
                suitable for all kinds of road conditions and meet different
                market demands.
              </p>
              <br />
              <div className="image-container-2">
                <div className="image-item">
                  <img src={ProductionImage1} alt=".jpg" />
                  <p>
                    <strong>TRUCK TIRE</strong>
                  </p>
                </div>
                <div className="image-item">
                  <img src={ProductionImage2} alt="2.jpg" />
                  <p>
                    <strong>LIGHT TRUCK TIRE</strong>
                  </p>
                </div>
                <div className="image-item">
                  <img src={ProductionImage3} alt=".jpg" />
                  <p>
                    <strong>BUS TIRE</strong>
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="image-container-2">
                <div className="production-item">
                  <img src={ProductionImage4} alt="07.2.jpg" />
                  <p>
                    <strong>TUBE-IN TIRE</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage5} alt="07.3.jpg" />
                  <p>
                    <strong>TUBE-IN TIRE</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage6} alt="07.7.jpg" />
                  <p>
                    <strong>TUBELESS TIRE</strong>
                  </p>
                </div>
                <div className="production-item">
                  <img src={ProductionImage7} alt="07.10.jpg" />
                  <p>
                    <strong>TUBELESS TIRE</strong>
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="image-container-2">
                <div className="innovation-item">
                  <img src={InnovationImage1} />
                  <p>
                    <strong>INNOVATION</strong>
                  </p>
                </div>
                <div className="innovation-item">
                  <img src={InnovationImage2} />
                  <p>
                    <strong>INNOVATION</strong>
                  </p>
                </div>
              </div>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <fieldset className="border-container">
                <legend className="center">
                  <span className="legend-title-3">
                    <strong>Market</strong>
                  </span>
                </legend>
              </fieldset>
              <p>
                <img src={MarketImage} alt="1607306900(1)" />
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong className="times-new-roman">※ Production Market</strong>
                <br />
              </p>
              <p className="times-new-roman">
                Many product series including long distance standard loading,
                mid-long distance heavy loading, mid-short distance and mine
                application to meet varies demands from customers. Unique
                compound and unique structure and tread design makes the tire
                low wear and long miles, reduce the fuel consumption, ensure the
                driving comfort and safety.
              </p>
              <p className="times-new-roman">
                In heavy loading area, ROADONE has become the top player and in
                standard loading area ROADONE is the leading brand in China
                market. In 2017 the order quantity of ROADONE is more than one
                million and sixty thousand sets, sales income reached 1.72
                billion RMB, ranked top third in single brand sales amount, and
                exported many countries and regions in South America, Europe,
                Middle East and Southeast Asia. In 2018, ROADONE tire launch
                "350" project, we shall work harder to expand market to achieve
                annual sales target, the expected sales amount will beyond 3.6
                billion RMB.
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;

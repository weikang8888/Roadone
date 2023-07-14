import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBannerRoadOne from "../../../../static/image/products/product-banner-roadone.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";
import TruckTire from "../../../../static/image/products/truck-tire.webp";
import BusTire from "../../../../static/image/products/bus-tyre.webp";
import LightTruckTire from "../../../../static/image/products/light-truck-tire.webp";
import CommercialTire from "../../../../static/image/products/commercial-tyre.webp";

const RoadOneLightTruckTire = () => {
    const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=94")
      .then((response) => {
        setProductItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const productItem = productItems.length > 0 ? productItems[0] : null;

  return (
    <>
      <InnerBanner bannerimage={ProductBannerRoadOne} />
      <section>
        <div className="container container1">
          <SubMenu
            currentpage={"ROADONE TYRE DEMONSTRATION"}
            previouslink="/products"
            previouspage={t("submenu.product")}
          />
          <div className="main">
            <div className="row">
              {productItem && (
                <>
                  <div className="col-3 me-5">
                    <div id="preview" className="spec-preview">
                      <div className="jqzoom">
                        <img
                          src={require(`../../../../static/picture/${productItem.products_image}`)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <h1 className="pd-title">{t("product.title.1")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.1")}</p>
                    </div>
                    <a href="#F1" rel="nofollow" className="p_more mmv">
                      {t("other.sendInquiry")}
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="pinfo">
              <div className="share-btn-list mt-2">
                <div
                  className="share-btn facebook"
                  data-type="facebook"
                  title="Facebook"></div>
                <div
                  className="share-btn twitter"
                  data-type="twitter"
                  title="Twitter"></div>
                <div
                  className="share-btn linkedin"
                  data-type="linkedin"
                  title="Linkedin"></div>
                <div
                  className="share-btn pinterest"
                  data-type="pinterest"
                  title="Pinterest"></div>
                <div
                  className="share-btn print"
                  data-type="print"
                  title="Print"></div>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      Roadone Truck Tire Introduction:
                    </span>
                  </strong>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    Roadone truck tyre is a new high-performance commercial tyre
                    product launched by Hixih Rubber Industry Group. It relies
                    on Hixih Group's 30-year development experience and 15-year
                    technical accumulation of strong cooperation with the
                    world's top tyre giants to build a high-end tyre brand with
                    global competitiveness.
                  </span>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    Hixih Group has a world top class rubber radial tyre R&amp;D
                    center, leading tyre production technology and special
                    customized high-end equipment, which ensures the excellent
                    performance of Hixih tyre with high load, high mileage, high
                    driving force and low wear, low emission and low rolling
                    resistance. Unique formula, structure and tread design,
                    reduce fuel consumption and carbon dioxide emissions during
                    driving, improve driving comfort and safety under complex
                    road conditions, the product has outstanding advantages of
                    green, safe and durable, renewable.
                  </span>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    Facing the rapid development of China's local automobile
                    industry and the deepening reform of supply side structure,
                    Hixih Group upholds the spirit of "craftsman", unswervingly
                    develops its own industry, builds its own national brand,
                    provides international high-end class tyres to the market,
                    breaks the long-term monopoly of middle and high-end tyre
                    market ruled by foreign brands, and takes the lead to be the{" "}
                  </span>
                  <span>
                    world famous tyre brand of China’s truck tyre industry!
                  </span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      History of Roadone Truck tyre Factory{" "}
                    </span>
                  </strong>
                </p>
                <p>
                  <span>
                    1989.07 - Yanzhou Huaxi Rubber Belt Factory founded, entered
                    the field of conveyor belt production
                  </span>
                </p>
                <p>
                  <span>
                    2003.07 - Roadone Tyre Co.,Ltd started, entered the field of
                    tyre production{" "}
                  </span>
                </p>
                <p>
                  <span>
                    2005.08 - Establishment of a Joint Venture with Pirelli
                    Company of Italy
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2007.11 - Establishment of Shandong Aneng Conveyor Belt
                    Rubber Co., Ltd. Jointly with Goodyear Engineering Rubber
                    Group
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2009.03 - Establish Hixih Investment Company in Shanghai and
                    enter the field of capital operation
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2010.08 - Hixih Real Estate Co., Ltd. was established. It is
                    estimated that more than 10,000 housing units have been
                    built and the building area exceeds 2 million square meters.
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2011.06 - Purchased of Yanzhou Jiuyi Hospital and Entry into
                    Medical and Health Field
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2013.06 - Holding the share of Yanzhou People's Hospital
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2015.02 - German Continental Group purchased conveyor belt
                    business, Shandong Aneng Conveyor Belt Rubber Co., Ltd.
                    renamed Kangditake Engineering Rubber Co., Ltd.
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2015.03 - Belgium Bekaert Group purchased steel cord
                    business, Huayi Cord Co., Ltd. renamed Bekaert (Jining)
                    Steel Cord Co., Ltd.
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2015.06 - TONGLI TYRE CO.,LTD (Roadone) is put into
                    production to provide high-grade products for China and
                    international markets
                  </span>
                </p>{" "}
                <p>
                  <span>
                    2018.01 - Jining Shenzhou Tyre Co., Ltd. officially put into
                    production
                  </span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">Road Conditions of Truck Tire:</span>
                  </strong>
                </p>
                <p>
                  <span>Highway Truck Tire </span>
                </p>
                <p>
                  <span>Mid- short distance Truck Tire </span>
                </p>
                <p>
                  <span>Mine Truck Tire</span>
                </p>
                <p>
                  <span>Light Truck Tyre</span>
                </p>
                <p>
                  <span>Heavy-Loading Truck Tyre</span>
                </p>
              </div>
              <div className="d-flex align-center">
                <div
                  style={{
                    width: "23.5%",
                    padding: "5px",
                    border: "1px solid #eee",
                  }}>
                  <div>
                    <img src={TruckTire} />
                  </div>
                  <p>
                    <span>Truck Tire</span>
                  </p>
                </div>
                <div
                  style={{
                    width: "23.5%",
                    padding: "5px",
                    border: "1px solid #eee",
                  }}>
                  <div>
                    <img src={BusTire} />
                  </div>
                  <p>
                    <span>Bus Tyre</span>
                  </p>
                </div>
                <div
                  style={{
                    width: "23.5%",
                    padding: "5px",
                    border: "1px solid #eee",
                  }}>
                  <div>
                    <img src={LightTruckTire} />
                  </div>
                  <p>
                    <span>Light Truck tire</span>
                  </p>
                </div>
                <div
                  style={{
                    width: "23.5%",
                    padding: "5px",
                    border: "1px solid #eee",
                  }}>
                  <div>
                    <img src={CommercialTire} />
                  </div>
                  <p>
                    <span>Commercial Tire</span>
                  </p>
                </div>
              </div>{" "}
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">Productions Included :</span>
                  </strong>
                </p>
                <p>
                  <span>Truck Tire / Truck Tyre</span>
                </p>
                <p>
                  <span>Light Truck tyre / Light Truck tire</span>
                </p>
                <p>
                  <span>Bus Tyre / Bus Tire</span>
                </p>
                <p>
                  <span>Commercial Tyre / Commercial Tire</span>
                </p>
                <p>
                  <span>Radial Tire / Radial Tire&nbsp;</span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">Size of Truck Tire:</span>
                  </strong>
                </p>{" "}
                <p>
                  <span>6.50R16LT Truck Tire</span>
                </p>{" "}
                <p>
                  <span>7.00R16LT Truck Tire</span>
                </p>{" "}
                <p>
                  <span>7.50R16LT Truck Tire</span>
                </p>{" "}
                <p>
                  <span>8.25R16LT Truck Tire</span>
                </p>{" "}
                <p>
                  <span>8.25R20 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>9.00R20 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>10.00R20 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>9R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>10R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>11.00R20 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>11R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>12.00R20 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>12.00R24 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>12R22.5 Truck Tire</span>
                </p>
                <p>
                  <span>13R22.5 Truck Tire</span>
                </p>
                <p>
                  <span>215/75R17.5 Truck Tire</span>
                </p>
                <p>
                  <span>235/75R17.5 Truck Tire</span>
                </p>
                <p>
                  <span>245/70R19.5 Truck Tire</span>
                </p>
                <p>
                  <span>265/70R19.5 Truck Tire</span>
                </p>
                <p>
                  <span>275/70R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>295/60R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>295/80R22.5Truck Tire</span>
                </p>{" "}
                <p>
                  <span>315/60R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>315/70R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>315/80R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>385/65R22.5 Truck Tire</span>
                </p>{" "}
                <p>
                  <span>425/65R22.5 Truck Tire</span>
                </p>
                <p>
                  <span>14.00R20 Truck Tire</span>
                </p>
              </div>
              <DetailsPreviousNext
                prevText={"Truck Tire"}
                prevLink="/products/roadone-tyre-demonstration/truck-tire"
                nextText={"Bus Tire"}
                nextLink="/products/roadone-tyre-demonstration/bus-tire"
              />
              <p className="productsTags">
                Hot Tags: light truck tire, China, suppliers, manufacturers, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="93,33,13,51,59" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadOneLightTruckTire;

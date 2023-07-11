import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GD09MidShort = () => {
    const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=40")
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
      <InnerBanner bannerimage={ProductBanner2} />
      <section>
        <div className="container container1">
          <SubMenu
            currentpage={"Truck Tire"}
            previouslink="/products"
            previouspage="Product"
            typepage="Mid-Short distance Heavy Load"
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
                    <h1 className="pd-title">{productItem.products_name}</h1>
                    <div className="pcon_info">
                      <p>{productItem.products_description}</p>
                    </div>
                    <a href="#F1" rel="nofollow" className="p_more mmv">
                      Send Inquiry
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
              <p>
                <span className="table-text">
                  <span
                    style={{
                      fontFamily: "calibri",
                      color: "rgb(229, 51, 51)",
                    }}>
                    &gt;
                  </span>
                  Strong drive, heat-dissipation, shoulder rip-proof
                  reinforcement joints provide strong driving performance,
                  effectively prevent cracking, smashing, and suppress deformed
                  wear.
                </span>
              </p>
              <p>
                <span className="table-text">
                  <span
                    style={{
                      fontFamily: "calibri",
                      color: "rgb(229, 51, 51)",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}>
                    &gt;
                  </span>
                  Specific tread for mid-short distance transport and low
                  heating recipe, high wear resistance, low heating, tear
                  resistance and block resistance,effectively reduces the
                  quality risk of shoulder explosion, chipping, groove splitting
                  and crown removal.
                </span>
              </p>
              <p>
                <span className="table-text">
                  <span
                    style={{
                      fontFamily: "calibri",
                      color: "rgb(229, 51, 51)",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}>
                    &gt;
                  </span>
                  Cap zero belt explosion proof design, effectively improve the
                  cap loading capacity, enhancing the puncture resistance and
                  explosion proof perforamce under mixed conditions.
                </span>
              </p>
              <p>
                <span className="table-text">
                  <span
                    style={{
                      fontFamily: "calibri",
                      color: "rgb(229, 51, 51)",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}>
                    &gt;
                  </span>
                  Reinforced carcass and bead structure,tyre toe adopts tubeless
                  heavy load tech,improves the fatigue and shear resistance of
                  tyre toe under ultra-high and heavy load conditions,reduce
                  quality risks of the tyre toe open, crack or explosion.
                </span>
              </p>

              <table width="100%" className="table mt-3">
                <tbody>
                  <tr className="firstRow">
                    <td>
                      <span className="table-text">{t("tableHeaders.size")}</span>
                    </td>
                    <td>
                      <span className="table-text">{t("tableHeaders.plyRating")}</span>
                    </td>
                    <td>
                      <span className="table-text">
                        <span className="table-text">{t("tableHeaders.maxLoad")}</span>
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.loadIndex")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">{t("tableHeaders.speedRating")}</span>
                    </td>
                    <td>
                      <span className="table-text">Overall Diameter (mm)</span>
                    </td>
                    <td>
                      <span className="table-text">Section Width (mm)</span>
                    </td>
                    <td>
                      <span className="table-text">
                        Standard Inflation Pressure(kPa)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">Standard Rim(inch)</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4000/3650 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">156/153 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1125</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-text">12R22.5 </span>
                    </td>
                    <td>
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td>
                      <span className="table-text">1088</span>
                    </td>
                    <td>
                      <span className="table-text">300</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td>
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"China Zigzag Tyre"}
                prevLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga98-china-zigzag"
                nextText={"No Information"}
              />
              <p className="productsTags">
                Hot Tags: Mid-short Distance Heavy-duty Truck Tire, China,
                suppliers, manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="22,11,33" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GD09MidShort;

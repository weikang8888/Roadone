import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GD08TruckTire = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/products/products.php?ids=38")
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
            currentpage={t("submenu.truck-tire")}
            previouslink="/products"
            previouspage={t("submenu.product")}
            typepage={t("submenu.mid-short-distance-heavy-load")}
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
                    <h1 className="pd-title">{t("product.title.38")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.38")}</p>
                    </div>
   <a href="/contact" rel="nofollow" className="p_more mmv">
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
              <p>
                <span className="table-text">
                  <span
                    style={{
                      fontFamily: "calibri",
                      color: "rgb(229, 51, 51)",
                    }}>
                    &gt;
                  </span>
                  {t(
                    "product.productDetaildescriptions.productDetaildescriptions31"
                  )}
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
                  {t(
                    "product.productDetaildescriptions.productDetaildescriptions30"
                  )}
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
                  {t(
                    "product.productDetaildescriptions.productDetaildescriptions29"
                  )}
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
                  {t(
                    "product.productDetaildescriptions.productDetaildescriptions5"
                  )}
                </span>
              </p>

              <table width="100%" className="table mt-3">
                <tbody>
                  <tr className="firstRow">
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.size")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.plyRating")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        <span className="table-text">
                          {t("tableHeaders.maxLoad")}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.loadIndex")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.speedRating")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.overallDiameter")}{" "}
                        {t("tableHeaders.mm")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.sectionWidth")} {t("tableHeaders.mm")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.standardInflationPressure")}
                        {t("tableHeaders.kpa")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.standardRim")}
                        {t("tableHeaders.inch")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">235/75R17.5</span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2000/1850</span>
                    </td>
                    <td width="115">
                      <span className="table-text">132/129</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">803</span>
                    </td>
                    <td width="88">
                      <span className="table-text">233</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="72">
                      <span className="table-text">6.75</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-text">235/75R17.5</span>
                    </td>
                    <td>
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2725/2575</span>
                    </td>
                    <td width="115">
                      <span className="table-text">143/141</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td>
                      <span className="table-text">803</span>
                    </td>
                    <td>
                      <span className="table-text">233</span>
                    </td>
                    <td width="72">
                      <span className="table-text">875</span>
                    </td>
                    <td>
                      <span className="table-text">6.75</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">9.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2800/2650</span>
                    </td>
                    <td width="115">
                      <span className="table-text">144/142</span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1023</span>
                    </td>
                    <td width="88">
                      <span className="table-text">259</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">10.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3250/3000</span>
                    </td>
                    <td width="115">
                      <span className="table-text">149/146</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1054</span>
                    </td>
                    <td width="88">
                      <span className="table-text">278</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">11.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★*</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3550/3250</span>
                    </td>
                    <td width="115">
                      <span className="table-text">152/149</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1091</span>
                    </td>
                    <td width="88">
                      <span className="table-text">293</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR★*</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4000/3650</span>
                    </td>
                    <td width="115">
                      <span className="table-text">156/153</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1127</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-text">12.00R24</span>
                    </td>
                    <td>
                      <span className="table-text">20PR★*</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4500/4125</span>
                    </td>
                    <td width="115">
                      <span className="table-text">160/157</span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1128</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.55</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-text">12.00R24</span>
                    </td>
                    <td>
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4500/4125</span>
                    </td>
                    <td width="115">
                      <span className="table-text">160/157</span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1128</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.55</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"GA665 High End Heavy Load Tyre"}
                prevLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga665-high-end"
                nextText={"China Zigzag Tyre"}
                nextLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga98-china-zigzag"
              />
              <p className="productsTags">
                Hot Tags: gd08 truck tire , truck tire , bus tire, commercial
                tire， radial tyre tyre, light truck tyre , truck tyre , bus
                tyre, commercial tyre， radial tyre tbr, China, suppliers,
                manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="30,29,70,37,91,40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GD08TruckTire;

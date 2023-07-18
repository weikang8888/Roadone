import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const HF31 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=1")
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
            typepage={t("submenu.long-haul-wearable-tyre")}
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
                    "product.productDetaildescriptions.productDetaildescriptions1"
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
                    "product.productDetaildescriptions.productDetaildescriptions2"
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
                    "product.productDetaildescriptions.productDetaildescriptions3"
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
                    "product.productDetaildescriptions.productDetaildescriptions4"
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
                        {t("tableHeaders.maxLoadKg")}
                        <br />
                        {t("tableHeaders.singleDual")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.loadIndex")} <br />
                        {t("tableHeaders.singleDual")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.speed")}
                        <br />
                        {t("tableHeaders.rating")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.overallDiameter")} <br />
                        {t("tableHeaders.mm")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.sectionWidth")} <br />
                        {t("tableHeaders.mm")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.standardInflationPressure")}
                        <br />
                        {t("tableHeaders.kpa")}
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        {t("tableHeaders.standardRim")}
                        <br />
                        {t("tableHeaders.inch")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">11.00R20</span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3350/3075</span>
                    </td>
                    <td width="131">
                      <span className="table-text">150/147</span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1082</span>
                    </td>
                    <td width="95">
                      <span className="table-text">293</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">12R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3550/3250</span>
                    </td>
                    <td width="131">
                      <span className="table-text">152/149</span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1083</span>
                    </td>
                    <td width="95">
                      <span className="table-text">300</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">315/80R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3750/3450</span>
                    </td>
                    <td width="131">
                      <span className="table-text">154/151</span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1080</span>
                    </td>
                    <td width="95">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">315/80R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3750/3450</span>
                    </td>
                    <td width="131">
                      <span className="table-text">154/151</span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1080</span>
                    </td>
                    <td width="95">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">315/80R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">4125/3750</span>
                    </td>
                    <td width="131">
                      <span className="table-text">157/154</span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1080</span>
                    </td>
                    <td width="95">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={t("other.noInformation")}
                nextText={"HF21"}
                nextLink="/products/truck-tire/highway-truck-tire/hf21"
              />
              <p className="productsTags">
                Hot Tags: hHF31,Tyre, Light Truck Tyre , Truck Tyre , Bus Tyre,
                Commercial Tyre， Radial Tyre Tyre, Light Truck Tyre , Truck
                Tyre , Bus Tyre, Commercial Tyre， Radial Tyre TBR, LTR, Brand
                tryck tyre
              </p>
              <DetailsRelatedProducts ids="23,43" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HF31;
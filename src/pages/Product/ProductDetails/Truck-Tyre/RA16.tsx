import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const RA16 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=15")
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
 typepage={t("submenu.mid-long-distance-wearable")}          />
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
                    <h1 className="pd-title">{t("product.title.15")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.15")}</p>
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
                    "product.productDetaildescriptions.productDetaildescriptions13"
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
                    "product.productDetaildescriptions.productDetaildescriptions22"
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
                    "product.productDetaildescriptions.productDetaildescriptions18"
                  )}
                </span>
              </p>{" "}
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
                      <span className="table-text">12.00R24</span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">4500/4125 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">160/154 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1226 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">12.00R20 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">4000/3650 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">156/153 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1123 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">11.00R20</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1091 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">293</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
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
                      <span className="table-text">18PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">152/149</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1085 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">300</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"RF66"}
                prevLink="/products/truck-tire/long-distance-standard-load-truck-tire/rf66"
                nextText={"RF12"}
                nextLink="/products/truck-tire/long-distance-standard-load-truck-tire/rf12"
              />
              <p className="productsTags">
                Hot Tags: RA16 Middle End Mid-long Distance Wearable Tyre,
                China, suppliers, manufacturers, factory, wholesale,
                high-quality
              </p>
              <DetailsRelatedProducts ids="66" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RA16;
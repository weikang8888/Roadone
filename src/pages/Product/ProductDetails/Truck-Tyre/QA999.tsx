import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const QA999 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/products/products.php?ids=48")
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
            typepage={t("submenu.high-end-off-road-tyre")}
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
                    <h1 className="pd-title">{t("product.title.48")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.48")}</p>
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
                    "product.productDetaildescriptions.productDetaildescriptions45"
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
                    "product.productDetaildescriptions.productDetaildescriptions46"
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
                    "product.productDetaildescriptions.productDetaildescriptions47"
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
                    <td width="54">
                      <span className="table-text">8.25R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="54">
                      <span className="table-text">2430/2300</span>
                    </td>
                    <td width="54">
                      <span className="table-text">139/137</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">982</span>
                    </td>
                    <td width="54">
                      <span className="table-text">236</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">6.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">9.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="54">
                      <span className="table-text">2800/2650</span>
                    </td>
                    <td width="54">
                      <span className="table-text">144/142</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1028</span>
                    </td>
                    <td width="54">
                      <span className="table-text">259</span>
                    </td>
                    <td width="54">
                      <span className="table-text">900</span>
                    </td>
                    <td width="54">
                      <span className="table-text">7.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">10.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">18PR★*</span>
                    </td>
                    <td width="54">
                      <span className="table-text">3250/3000</span>
                    </td>
                    <td width="54">
                      <span className="table-text">149/146</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1063</span>
                    </td>
                    <td width="54">
                      <span className="table-text">278</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">11.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">18PR★**</span>
                    </td>
                    <td width="54">
                      <span className="table-text">3550/3250</span>
                    </td>
                    <td width="54">
                      <span className="table-text">152/149</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1105</span>
                    </td>
                    <td width="54">
                      <span className="table-text">293</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">20PR★**</span>
                    </td>
                    <td width="54">
                      <span className="table-text">4000/3650</span>
                    </td>
                    <td width="54">
                      <span className="table-text">156/153</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1140</span>
                    </td>
                    <td width="54">
                      <span className="table-text">315</span>
                    </td>
                    <td width="54">
                      <span className="table-text">900</span>
                    </td>
                    <td width="54">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={"QA905"}
                prevLink="/products/truck-tire/high-end-off-road-tyre/qa905"
                nextText={"QA919"}
                nextLink="/products/truck-tire/high-end-off-road-tyre/qa919"
              />
              <p className="productsTags">
                Hot Tags: QA905, China, Quarry tyre, commercial tyre, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="21,15,78,74,22,66" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QA999;

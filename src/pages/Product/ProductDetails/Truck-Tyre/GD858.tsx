import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GD858 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/products/products?ids=51")
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
            typepage={t("submenu.high-end-heavy-loading-tyre")}
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
                    <h1 className="pd-title">{t("product.title.51")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.51")}</p>
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
                    "product.productDetaildescriptions.productDetaildescriptions49"
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
                    "product.productDetaildescriptions.productDetaildescriptions48"
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
                  )}{" "}
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
                    "product.productDetaildescriptions.productDetaildescriptions25"
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
                    "product.productDetaildescriptions.productDetaildescriptions44"
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
                    <td width="115" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">12R22.5</span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="115" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1093 </span>
                    </td>
                    <td width="88" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">300</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">295/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1058 </span>
                    </td>
                    <td width="88">
                      <span className="table-text">298 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4125/3750 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">157/154 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1089</span>
                    </td>
                    <td width="88">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"GD708"}
                prevLink="/products/truck-tire/high-end-heavy-loading-tyres/gd708"
                nextText={"GD888"}
                nextLink="/products/truck-tire/high-end-heavy-loading-tyres/gd888"
              />
              <p className="productsTags">
                Hot Tags: GD858, China, suppliers, manufacturers, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="6,69,70,28,78,9" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GD858;

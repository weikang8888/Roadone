import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner from "../../../../static/image/products/product-banner.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const R251600 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/products/products?ids=82")
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
      <InnerBanner bannerimage={ProductBanner} />
      <section>
        <div className="container container1">
          <SubMenu
            currentpage={t("submenu.radial-otr-tire")}
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
                    <h1 className="pd-title">{t("product.title.82")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.82")}</p>
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
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}>
                    &gt;
                  </span>
                  {t(
                    "product.productDetaildescriptions.productDetaildescriptions70"
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
                    "product.productDetaildescriptions.productDetaildescriptions71"
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
                    "product.productDetaildescriptions.productDetaildescriptions72"
                  )}{" "}
                </span>
              </p>
              {/* <table width="100%" className="table mt-3">
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
                      <span className="table-text">14.00R25	</span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">1800/1600</span>
                    </td>
                    <td width="131">
                      <span className="table-text">128/124</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1370 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">375</span>
                    </td>
                    <td width="72">
                      <span className="table-text">770 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">6.50</span>
                    </td>
                  </tr>
                </tbody>
              </table> */}
              <DetailsPreviousNext
                prevText={t("other.noInformation")}
                nextText={t('product.title.83')}
                nextLink="/products/radial-otr-tires/14-00r25"
              />
              <p className="productsTags">
                Hot Tags: 16.00r25 all steel wide body dump truck tire, China,
                suppliers, manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="83,62,98,100,25,66" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default R251600;

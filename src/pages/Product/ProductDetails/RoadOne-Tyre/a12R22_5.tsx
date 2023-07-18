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

const A12R22_5 = () => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/products/products.php?ids=87")
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
            currentpage={t("submenu.roadone-tyre-demonstration")}
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
                    <h1 className="pd-title">{t("product.title.87")}</h1>
                    <div className="pcon_info">
                      <p>{t("product.description.87")}</p>
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
                      {t(
                        "product.productDetaildescriptions.truckTireIndroduction"
                      )}
                    </span>
                  </strong>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    {t(
                      "product.productDetaildescriptions.productDetaildescriptions79"
                    )}
                  </span>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    {t(
                      "product.productDetaildescriptions.productDetaildescriptions80"
                    )}
                  </span>
                </p>
                <p style={{ textIndent: "32px" }}>
                  <span>
                    {t(
                      "product.productDetaildescriptions.productDetaildescriptions81"
                    )}
                  </span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      {t(
                        "product.productDetaildescriptions.truckTireFactoryTitle"
                      )}
                    </span>
                  </strong>
                </p>
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory1")}
                  </span>
                </p>
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory2")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory3")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory4")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory5")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory6")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory7")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory8")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory9")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory10")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory11")}
                  </span>
                </p>{" "}
                <p>
                  <span>
                    {t("product.productDetaildescriptions.truckTireFactory12")}
                  </span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      {t(
                        "product.productDetaildescriptions.truckTireConditions"
                      )}
                    </span>
                  </strong>
                </p>
                <p>
                  <span>{t("submenu.highway-truck-tire")} </span>
                </p>
                <p>
                  <span>{t("submenu.mid-short-distance-heavy-load")} </span>
                </p>
                <p>
                  <span>{t("submenu.mine-truck-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.light-truck-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.high-end-heavy-loading-tyre")}</span>
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
                    <span>{t("submenu.truck-tire")}</span>
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
                    <span>{t("submenu.bus-tire")}</span>
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
                    <span>{t("submenu.light-truck-tire")}</span>
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
                    <span>{t("submenu.commercial-tire")}</span>
                  </p>
                </div>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      {t(
                        "product.productDetaildescriptions.productionsIncluded"
                      )}
                    </span>
                  </strong>
                </p>
                <p>
                  <span>{t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.light-truck-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.bus-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.commercial-tire")}</span>
                </p>
                <p>
                  <span>{t("submenu.radial-otr-tire")}</span>
                </p>
              </div>
              <div className="my-3">
                <p>
                  <strong>
                    <span className="fs-3">
                      {t("product.productDetaildescriptions.truckTireSize")}
                    </span>
                  </strong>
                </p>
                <p>
                  <span>9.00R20 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>10.00R20 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>9R22.5 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>10R22.5 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>11.00R20 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>11R22.5 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>12.00R20 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>12.00R24 {t("submenu.truck-tire")}</span>
                </p>
                <p>
                  <span>12R22.5 {t("submenu.truck-tire")}</span>
                </p>
              </div>
              <DetailsPreviousNext
                prevText={
                  "China Factory 11.00R20、12.00R20 QA99 PURE MINE HIGH QUALITY TYRE"
                }
                prevLink="China Factory 11.00R20、12.00R20 QA99 PURE MINE HIGH QUALITY TYRE"
                nextText={"385/65R22.5 Truck Tyre"}
                nextLink="/products/roadone-tyre-demonstration/385-65R22-5"
              />
              <p className="productsTags">
                Hot Tags: 11r22.5 295/80r22.5 mid-long distance truck tire tbr,
                China, suppliers, manufacturers, factory, wholesale,
                high-quality
              </p>
              <DetailsRelatedProducts ids="95,96,94,93,32,97" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default A12R22_5;

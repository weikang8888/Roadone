import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBannerBus from "../../../../static/image/products/product-banner-bus.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const CA10City = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=68")
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
      <InnerBanner bannerimage={ProductBannerBus} />
      <section>
        <div className="container container1">
          <SubMenu
            currentpage={"Bus Tire"}
            previouslink="/products"
            previouspage="Product"
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
                  The specific bus pattern design ensures a strong wet grip and
                  ensures excellent braking performance.
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
                  Specific steel sheet fine grain design ensures uniform wear of
                  the cap under frequent brakes.
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
                  The thickened sidewall and scratch-resistant to prevent
                  premature damage to the tire by scratching the sidewall.
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
                  The special reinforcement design of the toe ensures the
                  braking and bead bearing and aging performance of the brakes.
                </span>
              </p>
              <table width="100%" className="table mt-3">
                <tbody>
                  <tr className="firstRow">
                    <td>
                      <span className="table-text">Size</span>
                    </td>
                    <td>
                      <span className="table-text">Ply Rating</span>
                    </td>
                    <td>
                      <span className="table-text">
                        Max. Load (Kg)
                        <br />
                        (Single/Dual)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Load Index <br />
                        (Single/Dual)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Speed
                        <br />
                        Rating
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Overall Diameter <br />
                        (mm)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Section Width <br />
                        (mm)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Standard Inflation Pressure
                        <br />
                        (kPa)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Standard Rim
                        <br />
                        (inch)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">275/70R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">2800/2575 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">144/141 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="88">
                      <span className="table-text">970 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">276</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.25</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">275/70R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">3000/2725 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">146/143 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="88">
                      <span className="table-text">970 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">276</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.25</span>
                    </td>
                  </tr>{" "}
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"RF22 City-City Bus Tire"}
                prevLink="/products/bus-tire/rf22-city"
                nextText={"CA10 Inter-City Bus Tyre"}
                nextLink="/products/bus-tire/ca10-inter-city"
              />
              <p className="productsTags">
                Hot Tags: inter-CA10 Inter-City Bus Tyre, China, suppliers,
                manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="32" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CA10City;

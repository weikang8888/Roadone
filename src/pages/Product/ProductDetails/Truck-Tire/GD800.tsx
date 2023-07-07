import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GD800 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=53")
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
            typepage="High End Heavy Loading Tyre"
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
                  Unique horizontal and vertical blocks, puncture resistance
                  bottom design and stone ejection design provide strong drive
                  and braking performance.
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
                  Wearable tread recipe and widening and deepening the tread
                  pattern design effectively ensures a longer service life.
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
                  Extremely low heating recipe effectively reduces the quality
                  risk of shoulder explosion, chipping, groove splitting and
                  crown removal under overload and overspeed conditions.
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
                  Reinforced steel wire structure and special design of
                  explosion-proof cap belt can effectively ensure the heavy
                  load-bearing performance of cap,and improve the anti-stab
                  performance of tire in complex road conditions.
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
                  Reinforced carcass and bead structure,tyre bead adopts III+
                  generation heavy load tech,improves the fatigue and shear
                  resistance of tyre bead under ultra-high and heavy load
                  conditions,reduce quality risks of the bead seperation, crack
                  or explosion.
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
                        Max. Load (Kg)(Single/Dual)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">
                        Load Index (Single/Dual)
                      </span>
                    </td>
                    <td>
                      <span className="table-text">SpeedRating</span>
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
                    <td width="115" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">8.25R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="107" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">2430/2300 </span>
                    </td>
                    <td width="115" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">139/137 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">978 </span>
                    </td>
                    <td width="88" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">236</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">6.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">9.00R20 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2800/2650 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">144/142 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1024 </span>
                    </td>
                    <td width="88">
                      <span className="table-text">259 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.0</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="115">
                      <span className="table-text">10.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3250/3000 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">149/146 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1058 </span>
                    </td>
                    <td width="88">
                      <span className="table-text">278 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"GD888"}
                prevLink="/products/truck-tire/high-end-heavy-loading-tyres/gd888"
                nextText={"RA625"}
                nextLink="/products/truck-tire/high-end-heavy-loading-tyres/ra625"
              />
              <p className="productsTags">
                Hot Tags: GD800, China, suppliers, manufacturers, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="68,31,67,79,32,16" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GD800;

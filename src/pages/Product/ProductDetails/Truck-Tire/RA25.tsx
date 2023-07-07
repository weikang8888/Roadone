import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const RA25 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=17")
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
            typepage="Mid-long Distance Wearable"
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
                  Unique three-line longitudinal groove, optimized steel sheet
                  design, ensure excellent grip performance and driving and
                  braking performance in different positions.
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
                  Super high strength steel wire structure and explosion proof
                  cap belt design, effectively improve the cap loading capacity,
                  enhancing the puncture resistance and explosion proof
                  perforamce under complex conditions.
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
                  Reinforced carcass and bead structure,tyre bead adopts heavy
                  load tech,improves the fatigue and shear resistance ,reduce
                  quality risks of the bead seperation, crack or explosion.
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
                      <span className="table-text">12R22.5 </span>
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
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1090 </span>
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
                prevText={"RF12"}
                prevLink="/products/truck-tire/long-distance-standard-load-truck-tire/rf12"
                nextText={"RD65"}
                nextLink="/products/truck-tire/long-distance-standard-load-truck-tire/rd65"
              />
              <p className="productsTags">
                Hot Tags: Middle End Mid-long Distance Wearable Tire, China,
                suppliers, manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="23,24,15" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RA25;

import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const HF21 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=2")
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
            typepage="Long Haul Wearable Tyre"
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
                  Designed for long-distance transportation on smooth and
                  straight highway
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
                  Special tread compound and four-layer belts design, enhancing
                  wear resistance, providing longer mileage.
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
                  Stone ejection design, reducing groove cracking.
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
                  Special shoulder design, avoiding irregular wear.
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
                      <span className="table-text">11R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3000/2725 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">146/143 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">M </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1053</span>
                    </td>
                    <td width="95">
                      <span className="table-text">279</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.25</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">11R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3250/3000 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">149/146</span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1083</span>
                    </td>
                    <td width="95">
                      <span className="table-text">279</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.25</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">295/80R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3550/3250</span>
                    </td>
                    <td width="131">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1050</span>
                    </td>
                    <td width="95">
                      <span className="table-text">298</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127" style={{ wordBreak: "break-all" }}>
                      <span className="table-text">235/75R17.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">2000/1850</span>
                    </td>
                    <td width="131">
                      <span className="table-text">132/129 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="88">
                      <span className="table-text">800</span>
                    </td>
                    <td width="95">
                      <span className="table-text">233</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="111">
                      <span className="table-text">6.75</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={"HF31"}
                prevLink="/products/truck-tire/highway-truck-tire/hf31"
                nextText={"HF82"}
                nextLink="/products/truck-tire/highway-truck-tire/hf82"
              />
              <p className="productsTags">
                Hot Tags: hHF31,Tire, Light Truck Tire , Truck Tire , Bus Tire,
                Commercial Tire， Radial Tyre Tyre, Light Truck Tyre , Truck
                Tyre , Bus Tyre, Commercial Tyre， Radial Tyre TBR, LTR, Brand
                tryck tyre
              </p>
              <DetailsRelatedProducts ids="0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HF21;

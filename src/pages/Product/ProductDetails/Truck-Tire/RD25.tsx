import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const RD25 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=10")
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
                  The special single-direction block design provides superior
                  driving force and wet grip, safe, durable and powerful.
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
                  Widened and deepened driving surface,optimized profile
                  design,special super wear-resistant tread formula for
                  high-speed drive, ensure higher mileage in mixed road
                  conditions such as high-way and national road.
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
                  Special cap structure and specific 4 belt cap design, low
                  heating recipe, optimised shoulder desigh, inhibiting deformed
                  wear,ensure multiple retreading of tires.
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
                      <span className="table-text">11R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR </span>
                    </td>
                    <td width="143">
                      <span className="table-text">3000/2725 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">146/143 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1066 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">279 </span>
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
                      <span className="table-text">11R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR </span>
                    </td>
                    <td width="143">
                      <span className="table-text">3250/3000 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">149/146 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1066 </span>
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
                      <span className="table-text">12R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR </span>
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
                      <span className="table-text">1092 </span>
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
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR </span>
                    </td>
                    <td width="143">
                      <span className="table-text">4125/3750 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">157/154 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1094 </span>
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
                prevText={"RA95"}
                prevLink="/products/truck-tire/long-distance-standard-load-truck-tire/ra92"
                nextText={"RA36"}
                nextLink="/products/truck-tire/long-distance-standard-load-truck-tire/ra36"
              />
              <p className="productsTags">
                Hot Tags: rd25, China, suppliers, manufacturers, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="25,16,15,14,8,24" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RD25;

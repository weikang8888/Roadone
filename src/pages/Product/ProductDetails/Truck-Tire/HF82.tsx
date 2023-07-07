import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const HF82 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=42")
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
                  Optimized profile design, stone ejection treatment at the
                  bottom groove, provide excellent anti-biasing performance and
                  better stone ejection effect in different road conditions.
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
                  The high-speed special super wearable tread recipe design
                  ensures higher mileage in mixed road conditions such as high
                  speed and national road.
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
                  Special steel structure and specific 4 belt cap design, low
                  heating recipe, optimised shoulder desigh, inhibiting deformed
                  wear,ensure multiple retreading of tires.
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
                  Environmental protection material formula,new pattern design
                  and overall optimization of material distribution design
                  technology, realize low rolling resistance while taking into
                  account the wet and slippery performance.
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
                      <span className="table-text">16PR★</span>
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
                      <span className="table-text">1050</span>
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
                      <span className="table-text">12R22.5</span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">M</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1080</span>
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
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">295/80R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3350/3075 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">150/147 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">924</span>
                    </td>
                    <td width="95">
                      <span className="table-text">292</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">315/60R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3650/3350 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">153/150 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">953</span>
                    </td>
                    <td width="95">
                      <span className="table-text">313</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.75</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">315/70R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="143">
                      <span className="table-text">3750/3450 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">154/151 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">1014</span>
                    </td>
                    <td width="95">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={"HF21"}
                prevLink="/products/truck-tire/highway-truck-tire/hf21"
                nextText={"HF01"}
                nextLink="/products/truck-tire/highway-truck-tire/hf01"
              />
              <p className="productsTags">
                Hot Tags: HF81 （HF82）, China, suppliers, manufacturers,
                factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="9,22,1,24,43,23" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HF82;

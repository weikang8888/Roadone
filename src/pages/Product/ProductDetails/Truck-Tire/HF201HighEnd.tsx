import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const HF201HighEnd = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=26")
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
                  ●Optimized profile design, unique longitudinal pattern,
                  providing excellent anti-biasing adaptability for different
                  wheel positions and different road conditions.
                </span>
              </p>{" "}
              <p>
                <span className="table-text">
                  ●High-speed specific wearable tread recipe, to ensure higher
                  mileage in highway, national roads, provincial roads and other
                  mixed road conditions.
                </span>
              </p>{" "}
              <p>
                <span className="table-text">
                  ●Reinforced cap structure and specific 4 belt cap design, low
                  heat generation recipe, optimised shoulder desigh, inhibiting
                  deformed wear and reducing the quality risk as should cap
                  explosion, cap off etc.
                </span>
              </p>{" "}
              <p>
                <span className="table-text">
                  ●Reinforced carcass and bead structure,Improve the toe fatigue
                  fracture resistance, reduce the quality risk of the toe
                  opening, cracking, explosion, etc., and providing multiple
                  retreading.
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
                      <span className="table-text">12R22.5</span>
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
                      <span className="table-text">M </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1086 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">300</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"RF202 High End Wearable Tire"}
                prevLink="/products/truck-tire/long-distance-standard-load-truck-tire/rf202-high-end"
                nextText={"No Information"}
              />
              <p className="productsTags">
                Hot Tags: RF202 High End Wearable Highway Tire, Long distance on
                highway tire
              </p>
              <DetailsRelatedProducts ids="13,33,23,31,51,5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HF201HighEnd;

import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const QA999 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=48")
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
                  Optimize the contour, groove bottom anti stabbing stone relief
                  platform, widen the driving surface, deepen the pattern groove
                  and large pattern design, enhance the adaptability of the
                  product in the industrial and mining and other non paved
                  roads, and ensure the longer service life of the product.
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
                  Extra thick sidewall and thickened groove bottom design
                  enhancing impact and puncture resistance on unpaved road.
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
                  0°structure cap,reinforced carcass and bead structure,
                  specific heavy loading technology enhancing impact,
                  puncture,pressure and load resistance under heavy load
                  conditions.
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
                  Extremely low heating tread recipe,provides better perofrmance
                  of anti-tear、low heating,reducing shoulder/crown separation
                  effectively on paved road driving fast.
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
                    <td width="54">
                      <span className="table-text">8.25R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="54">
                      <span className="table-text">2430/2300</span>
                    </td>
                    <td width="54">
                      <span className="table-text">139/137</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">982</span>
                    </td>
                    <td width="54">
                      <span className="table-text">236</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">6.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">9.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="54">
                      <span className="table-text">2800/2650</span>
                    </td>
                    <td width="54">
                      <span className="table-text">144/142</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1028</span>
                    </td>
                    <td width="54">
                      <span className="table-text">259</span>
                    </td>
                    <td width="54">
                      <span className="table-text">900</span>
                    </td>
                    <td width="54">
                      <span className="table-text">7.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">10.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">18PR*</span>
                    </td>
                    <td width="54">
                      <span className="table-text">3250/3000</span>
                    </td>
                    <td width="54">
                      <span className="table-text">149/146</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1063</span>
                    </td>
                    <td width="54">
                      <span className="table-text">278</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">11.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">18PR**</span>
                    </td>
                    <td width="54">
                      <span className="table-text">3550/3250</span>
                    </td>
                    <td width="54">
                      <span className="table-text">152/149</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1105</span>
                    </td>
                    <td width="54">
                      <span className="table-text">293</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="54">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="54">
                      <span className="table-text">20PR**</span>
                    </td>
                    <td width="54">
                      <span className="table-text">4000/3650</span>
                    </td>
                    <td width="54">
                      <span className="table-text">156/153</span>
                    </td>
                    <td width="54">
                      <span className="table-text">F</span>
                    </td>
                    <td width="54">
                      <span className="table-text">1140</span>
                    </td>
                    <td width="54">
                      <span className="table-text">315</span>
                    </td>
                    <td width="54">
                      <span className="table-text">900</span>
                    </td>
                    <td width="54">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={"QA905"}
                prevLink="/products/truck-tire/high-end-off-road-tyre/qa905"
                nextText={"QA919"}
                nextLink="/products/truck-tire/high-end-off-road-tyre/qa919"
              />
              <p className="productsTags">
                Hot Tags: QA905, China, Quarry tyre, commercial tyre, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="21,15,78,74,22,66" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QA999;

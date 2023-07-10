import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBannerRoadOne from "../../../../static/image/products/product-banner-roadone.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const A11R22_5 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=84")
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
            currentpage={"ROADONE TYRE DEMONSTRATION"}
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
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}>
                    &gt;
                  </span>
                  Reinforced bead with nylon and strong carcass design for sizes
                  with ★ , 0 degree structure on shoulder, providing high
                  quality and performance under heavy load conditions.
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
                  Low heat generation tread recipe, open shoulder design,
                  reducing shoulder separation effectively.
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
                  Optimized cap profile, durable tread formula, providing
                  excellent sevice mileage on paved roads, cost-effective.
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
                      <span className="table-text">265/70R19.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">2725/2575 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">143/141 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">868 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">262 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">12.00R20 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">20PR★ </span>
                    </td>
                    <td width="143">
                      <span className="table-text">4000/3650 </span>
                    </td>
                    <td width="131">
                      <span className="table-text">156/153 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1123 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">315 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">11.00R20 </span>
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
                      <span className="table-text">K </span>
                    </td>
                    <td width="88">
                      <span className="table-text">1091 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">293 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">295/80R22.5 </span>
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
                      <span className="table-text">1049 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">295 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">900 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="127">
                      <span className="table-text">11R22.5 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">18PR★ </span>
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
                      <span className="table-text">930 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">272 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">930 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">8.3</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"No Information"}
                nextText={"CHINA HIGH QUALITY QA19 OFF ROAD TRUCK TYRE FACTORY"}
                nextLink="/products/roadone-tyre-demonstration/china-hight-quality-qa19"
              />
              <p className="productsTags">
                Hot Tags: 11r22.5 295/80r22.5 mid-long distance truck tire tbr,
                China, suppliers, manufacturers, factory, wholesale,
                high-quality
              </p>
              <DetailsRelatedProducts ids="92,87,98,93,38,97" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default A11R22_5;
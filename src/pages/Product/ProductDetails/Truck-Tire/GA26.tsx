import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GA26 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=31")
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
            typepage="Mid-Short distance Heavy Load"
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
                  Zigzag circumferential continuous pattern and the transverse
                  block groove ensure the grip performance on wet road condition
                  and the driving performance under mixed road conditions.
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
                  Low heating tread recipe and heat-dissipating shoulder pattern
                  design, effectively reducing the risk of shoulder quality
                  under heavy load.
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
                  Super high strength steel wire structure can effectively
                  guarantee the bearing capacity of the product.
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
                  Reinforced carcass and bead structure,tyre bead adopts heavy
                  load tech,improves the fatigue and shear resistance ,reduce
                  quality risks of the tyre bead open, crack or explosion.
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
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="107" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">3750/3450 </span>
                    </td>
                    <td width="115" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">154/151 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1083</span>
                    </td>
                    <td width="88" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="72" style={{ wordBreak: "break-word" }}>
                      <span className="table-text">9.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4125/3750 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">157/154 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1083</span>
                    </td>
                    <td width="88">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td width="115">
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">22PR★</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3750/3450 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">160/157 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1083</span>
                    </td>
                    <td width="88">
                      <span className="table-text">312</span>
                    </td>
                    <td width="72">
                      <span className="table-text">950</span>
                    </td>
                    <td width="72">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"GD09"}
                prevLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/gd09"
                nextText={"GA98"}
                nextLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga98"
              />
              <p className="productsTags">
                Hot Tags: GA26, China, suppliers, manufacturers, factory,
                wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="23,11,33" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GA26;

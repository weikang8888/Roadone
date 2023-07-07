import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const QA919 = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=49")
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
            typepage="HIGH END OFF-ROAD TYRE"
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
                  Unique horizontal and vertical ditch, widened and deepened
                  tread pattern design, and enhanced the applicable performance
                  of the product in the industrial and mining and other non
                  paved roads.
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
                  Latest explosion-proof & puncture resistance design, Extra
                  thick sidewall and thickened groove bottom design enhancing
                  impact and puncture resistance on unpaved road.
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
                  Low heating tread recipe designed for soft mining and mixed
                  road conditions,provides better perofrmance of
                  anti-stab、anti-tear、low heating, reducing shoulder/crown
                  separation effectively.
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
                      <span className="table-text">12R22.5 </span>
                    </td>
                    <td width="54">
                      <span className="table-text">18PR★</span>
                    </td>
                    <td width="54">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="54">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="54">
                      <span className="table-text">J </span>
                    </td>
                    <td width="54">
                      <span className="table-text">1103</span>
                    </td>
                    <td width="54">
                      <span className="table-text">300</span>
                    </td>
                    <td width="54">
                      <span className="table-text">930</span>
                    </td>
                    <td width="54">
                      <span className="table-text">9.0</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DetailsPreviousNext
                prevText={"QA999"}
                prevLink="/products/truck-tire/high-end-off-road-tyre/qa999"
                nextText={"No Informtaion"}
              />
              <p className="productsTags">
                Hot Tags: QA919, Mine Tyre, Quarry Tire
              </p>
              <DetailsRelatedProducts ids="15,76,77,9,46,43" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QA919;

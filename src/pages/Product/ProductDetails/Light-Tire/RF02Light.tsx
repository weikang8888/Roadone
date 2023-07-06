import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBannerLight from "../../../../static/image/products/product-banner-light.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const RF02Light = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=4")
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
      <InnerBanner bannerimage={ProductBannerLight} />
      <section>
        <div className="container container1">
          <SubMenu
            currentpage={"Light Truck Tire"}
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
                  Four zigzag grooves and solid longitudinal rib pattern block
                  design, special crown groove treatment, ensure strong grip on
                  wet and slippery road, safety, comfort and fuel saving.
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
                  Optimized cap profile,light truck special low heat, high
                  wear-resistant tread formula to ensure a longer service life.
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
                      <span className="table-text">8.25R16 LT</span>
                    </td>
                    <td width="72">
                      <span className="table-text">16PR </span>
                    </td>
                    <td width="143">
                      <span className="table-text">1800/1600</span>
                    </td>
                    <td width="131">
                      <span className="table-text">128/124</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L </span>
                    </td>
                    <td width="88">
                      <span className="table-text">852 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">235</span>
                    </td>
                    <td width="72">
                      <span className="table-text">770 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">6.50</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">7.50R16 LT</span>
                    </td>
                    <td width="72">
                      <span className="table-text">14PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">1500/1320</span>
                    </td>
                    <td width="131">
                      <span className="table-text">122/118</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">802 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">215</span>
                    </td>
                    <td width="72">
                      <span className="table-text">770 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">6.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">7.00R16 LT</span>
                    </td>
                    <td width="72">
                      <span className="table-text">14PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">1320/1180</span>
                    </td>
                    <td width="131">
                      <span className="table-text">118/114</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">772</span>
                    </td>
                    <td width="95">
                      <span className="table-text">200</span>
                    </td>
                    <td width="72">
                      <span className="table-text">770 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">5.50</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="127">
                      <span className="table-text">6.50R16 LT</span>
                    </td>
                    <td width="72">
                      <span className="table-text">12PR</span>
                    </td>
                    <td width="143">
                      <span className="table-text">1060/925</span>
                    </td>
                    <td width="131">
                      <span className="table-text">110/105</span>
                    </td>
                    <td width="72">
                      <span className="table-text">L</span>
                    </td>
                    <td width="88">
                      <span className="table-text">750 </span>
                    </td>
                    <td width="95">
                      <span className="table-text">185</span>
                    </td>
                    <td width="72">
                      <span className="table-text">670 </span>
                    </td>
                    <td width="111">
                      <span className="table-text">5.50</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"No Information"}
                nextText={"RA85 Light Truck Tire"}
                nextLink="/products/light-truck-tire/ra85-light"
              />
              <p className="productsTags">
                Hot Tags: RF02 Light Truck Tire, China, suppliers,
                manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="71,75,80,72,78,70" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RF02Light;
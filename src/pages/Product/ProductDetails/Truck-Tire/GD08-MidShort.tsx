import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../../../component/Banner/InnerBanner";
import ProductBanner2 from "../../../../static/image/products/product-banner-2.webp";
import SubMenu from "../../../../component/SubMenu/SubMenu";
import "../productdetails.css";
import DetailsPreviousNext from "../../../../component/DetailsReused.tsx/DetailsPreviousNext";
import DetailsRelatedProducts from "../../../../component/DetailsReused.tsx/DetailsRelatedProducts";

const GD08_MidShort = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?ids=36")
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
                  Strong drive, heat-dissipation, shoulder rip-proof
                  reinforcement joints provide strong driving performance,
                  effectively prevent cracking, smashing, and suppress deformed
                  wear.
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
                  Specific tread for mid-short distance transport and low
                  heating recipe, high wear resistance, low heating, tear
                  resistance and block resistance,effectively reduces the
                  quality risk of shoulder explosion, chipping, groove splitting
                  and crown removal.
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
                  Tube-in products 0°structure explosion proof cap design,
                  effectively improve the cap loading capacity, enhancing the
                  puncture resistance and explosion proof perforamce under
                  complex conditions.
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
                    <td width="115">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4500/4125 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">160/157 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1128</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.55</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">12.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4500/4125 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">160/157 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1128</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.55</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">12.00R20 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4000/3650 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">156/153 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1127</span>
                    </td>
                    <td width="88">
                      <span className="table-text">315</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">11.00R20 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3550/3250 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">152/149 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1091</span>
                    </td>
                    <td width="88">
                      <span className="table-text">293</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72">
                      <span className="table-text">8.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">10.00R20 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">3250/3000 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">149/146 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1054</span>
                    </td>
                    <td width="88">
                      <span className="table-text">278</span>
                    </td>
                    <td width="72">
                      <span className="table-text">930</span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.5</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">9.00R20</span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2800/2650 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">144/142 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K</span>
                    </td>
                    <td width="84">
                      <span className="table-text">1023</span>
                    </td>
                    <td width="88">
                      <span className="table-text">259</span>
                    </td>
                    <td width="72">
                      <span className="table-text">900</span>
                    </td>
                    <td width="72">
                      <span className="table-text">7.0</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">235/75R17.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">16PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2000/1850 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">132/129 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">803</span>
                    </td>
                    <td width="88">
                      <span className="table-text">233</span>
                    </td>
                    <td width="72">
                      <span className="table-text">830</span>
                    </td>
                    <td width="72">
                      <span className="table-text">6.75</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">235/75R17.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">18PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">2725/2575 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">143/141</span>
                    </td>
                    <td width="72">
                      <span className="table-text">J </span>
                    </td>
                    <td width="84">
                      <span className="table-text">803</span>
                    </td>
                    <td width="88">
                      <span className="table-text">233</span>
                    </td>
                    <td width="72">
                      <span className="table-text">875</span>
                    </td>
                    <td width="72">
                      <span className="table-text">6.75</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="115">
                      <span className="table-text">315/80R22.5 </span>
                    </td>
                    <td width="68">
                      <span className="table-text">20PR</span>
                    </td>
                    <td width="107">
                      <span className="table-text">4125/3750 </span>
                    </td>
                    <td width="115">
                      <span className="table-text">157/154 </span>
                    </td>
                    <td width="72">
                      <span className="table-text">K </span>
                    </td>
                    <td width="84">
                      <span className="table-text">1085</span>
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
                  </tr>
                </tbody>
              </table>
              <DetailsPreviousNext
                prevText={"GA36 Neumáticos Para Camiones "}
                prevLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga36-neumaticos"
                nextText={"GA665 High End Heavy Load Tire"}
                nextLink="/products/truck-tire/medium-and-short-distance-hybrid-truck-tires/ga665-high-end"
              />
              <p className="productsTags">
                Hot Tags: china wholesale ga36 neumáticos para camiones factory
                - ga36 ga36 neumáticos para
                camiones,neumático,4011200090,275/70r19.5 385/65r22.5 , 11r22.5
                , 12r22.5 , 7.50r16 , spectrum analyzer , rueda, 401020, China,
                suppliers, manufacturers, factory, wholesale, high-quality
              </p>
              <DetailsRelatedProducts ids="35,29,70,30,31,34" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GD08_MidShort;
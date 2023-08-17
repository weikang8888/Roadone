import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";

const RA85 = () => {
  const [productsItems, setProductsItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const fieldVisibility = {
    fullName: true,
    telephone: true,
    email: true,
    address: true,
  };

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/products/products?id=36")
      .then((response) => {
        setProductsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <ProductHeader />
      <div className="container cd_main clearfix">
        <div className="cd_rt">
          <div className="cp_fl">
            <div className="typebox">
              <ul className="clearfix">
                <li>
                  <NavLink to="/products" className={"cpfl2"}>
                    Truck Tyres
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className={"cpfl2"}>
                    Middle & Long Distance
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="tab2">
              <div className="ct_xq">
                {productsItems.map((products, index) => (
                  <div className="ct_xq_d1 clearfix" key={index}>
                    <div className="ct_xq_lt fl">
                      <div className="ct_xq1">
                        <em>TYRE MODEL-</em>
                        <span>{products.products_name}</span>
                      </div>
                      <div className="ct_xqq">
                        <div
                          className="ct_xq2"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-easing="ease-out-back">
                          <div>{products.products_description}</div>
                        </div>
                        <div
                          className="ct_xq3"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-easing="ease-out-back">
                          <img
                            className="ct_xq3_img1"
                            src={require(`../../../../static/assets/picture/${products.products_lorry_image}`)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="ct_xq_rt fr"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out-back">
                      <img
                        src={require(`../../../../static/assets/picture/${products.products_image}`)}
                      />
                    </div>
                  </div>
                ))}

                <div className="ct_xq_d2">
                  <div
                    className="ct_xq_4 clearfix"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-back">
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Unique three-line longitudinal groove, variable angle
                      profile contour design, anti-cracking, anti-grooving,
                      puncture resistance, anti-smashing block, inhibiting
                      deformed grinding.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Specific tread for heavy load and low heating recipe, high
                      wear resistance, low heating, tear resistance and block
                      resistance,effectively reduces the quality risk of
                      shoulder explosion, chipping, groove splitting and crown
                      removal under overload and overspeed conditions.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      0°structure explosion proof cap design, effectively
                      improve the cap loading capacity, enhancing the puncture
                      resistance and explosion proof perforamce under complex
                      conditions.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Reinforced carcass and bead structure,tyre bead adopts
                      heavy load tech,improves the fatigue and shear resistance
                      ,reduce quality risks of the bead seperation, crack or
                      explosion.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <br />
                    </p>
                    <p></p>
                    <table>
                      <tbody>
                        <tr className="firstRow">
                          <td>Size</td>
                          <td>Ply Rating</td>
                          <td style={{ wordBreak: "break-all" }}>
                            Max. Load (Kg)
                            <br />
                            (Single/Dual)
                          </td>
                          <td>
                            Load Index&nbsp;
                            <br />
                            (Single/Dual)
                          </td>
                          <td>
                            Speed
                            <br />
                            Rating
                          </td>
                          <td>
                            Overall Diameter&nbsp;
                            <br />
                            (mm)
                          </td>
                          <td>
                            Section Width&nbsp;
                            <br />
                            (mm)
                          </td>
                          <td>
                            Standard Inflation Pressure
                            <br />
                            (kPa)
                          </td>
                          <td>
                            Standard Rim
                            <br />
                            (inch)
                          </td>
                        </tr>
                        <tr>
                          <td width="133">8.25R20</td>
                          <td width="72">16PR</td>
                          <td width="143">2430/2300</td>
                          <td width="121">139/137</td>
                          <td width="72">K</td>
                          <td width="88">972</td>
                          <td width="92">236</td>
                          <td width="72">930</td>
                          <td width="96">6.5</td>
                        </tr>
                        <tr>
                          <td width="133">9.00R20</td>
                          <td width="72">16PR</td>
                          <td width="143">2800/2650</td>
                          <td width="121">144/142</td>
                          <td width="72">K</td>
                          <td width="88">1019</td>
                          <td width="92">259</td>
                          <td width="72">900</td>
                          <td width="96">7.0</td>
                        </tr>
                        <tr>
                          <td width="133">10.00R20</td>
                          <td width="72">18PR</td>
                          <td width="143">3250/3000</td>
                          <td width="121">149/146</td>
                          <td width="72">K</td>
                          <td width="88">1055</td>
                          <td width="92">278</td>
                          <td width="72">930</td>
                          <td width="96">7.5</td>
                        </tr>
                        <tr>
                          <td>12R22.5</td>
                          <td>18PR*</td>
                          <td width="143">3550/3250</td>
                          <td width="121">152/149</td>
                          <td width="72">K</td>
                          <td width="88">1090</td>
                          <td width="92">300</td>
                          <td width="72">930</td>
                          <td width="96">9.00</td>
                        </tr>
                        <tr>
                          <td width="133" style={{ wordBreak: "break-all" }}>
                            13R22.5
                          </td>
                          <td width="72">18PR</td>
                          <td width="143">3750/3450</td>
                          <td width="121">154/151</td>
                          <td width="72">K</td>
                          <td width="88">1121</td>
                          <td width="92">320</td>
                          <td width="72">830</td>
                          <td width="96">9.75</td>
                        </tr>
                      </tbody>
                    </table>
                    <p></p>
                  </div>
                  <AdvanceButton
                    advanceButtonText={"Advance"}
                    advanceButtonClass={"ct_xq_d4 "}
                    handleOpenModal={handleOpenModal}
                  />

                  {isModalOpen && (
                    <ModalRoadone
                      clodeModal={handleCloseModal}
                      fieldVisibility={fieldVisibility}
                    />
                  )}
                </div>

                <SwipperProduct ids={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RA85;

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";
import ProductTypeBox from "../../ProductTypeBox";
import ProductMainBox from "../../ProductMainBox";
import ProductTypeMobile from "../../ProductTypeBoxMobile";

const GD08 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=27")
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
      <div className="container">
        <div className=" cd_main clearfix">
          <div className="col-lg-2">
            <div className="cd_lt fl">
              <ProductMainBox activeLink="truck" />
            </div>
          </div>
          <div className="col-lg-10 ps-4">
            <div className="tabs1 fr">
              <div className="cd_rt">
                <div className="cp_fl cp_fl2">
                  <ProductTypeBox
                    activeLink="middle-short-distance"
                    showTruckList={true}
                    showBusList={false}
                  />

                  <ProductTypeMobile showTruckList={true} showBusList={false} />
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
                            Strong drive, heat-dissipation, shoulder rip-proof
                            reinforcement joints provide strong driving
                            performance, effectively prevent cracking, smashing,
                            and suppress deformed wear.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Specific tread for mid-short distance transport and
                            low heating recipe, high wear resistance, low
                            heating, tear resistance and block
                            resistance,effectively reduces the quality risk of
                            shoulder explosion, chipping, groove splitting and
                            crown removal.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Tube-in products 0°structure explosion proof cap
                            design, effectively improve the cap loading
                            capacity, enhancing the puncture resistance and
                            explosion proof perforamce under complex conditions.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Reinforced carcass and bead structure,tyre bead
                            adopts heavy load tech,improves the fatigue and
                            shear resistance ,reduce quality risks of the tyre
                            bead open, crack or explosion.
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
                                <td width="115">235/75R17.5</td>
                                <td width="68">16PR</td>
                                <td width="107">2000/1850</td>
                                <td width="115">132/129</td>
                                <td width="72">J</td>
                                <td width="84">803</td>
                                <td width="88">233</td>
                                <td width="72">830</td>
                                <td width="72">6.75</td>
                              </tr>
                              <tr>
                                <td>235/75R17.5</td>
                                <td>18PR</td>
                                <td width="107">2725/2575</td>
                                <td width="115">143/141</td>
                                <td width="72">J</td>
                                <td>803</td>
                                <td>233</td>
                                <td width="72">875</td>
                                <td>6.75</td>
                              </tr>
                              <tr>
                                <td width="115">9.00R20</td>
                                <td width="68">16PR</td>
                                <td width="107">2800/2650</td>
                                <td width="115">144/142</td>
                                <td width="72">K</td>
                                <td width="84">1023</td>
                                <td width="88">259</td>
                                <td width="72">900</td>
                                <td width="72">7.0</td>
                              </tr>
                              <tr>
                                <td width="115">10.00R20</td>
                                <td width="68">18PR</td>
                                <td width="107">3250/3000</td>
                                <td width="115">149/146</td>
                                <td width="72">J</td>
                                <td width="84">1054</td>
                                <td width="88">278</td>
                                <td width="72">930</td>
                                <td width="72">7.5</td>
                              </tr>
                              <tr>
                                <td width="115">11.00R20</td>
                                <td width="68">18PR*</td>
                                <td width="107">3550/3250</td>
                                <td width="115">152/149</td>
                                <td width="72">J</td>
                                <td width="84">1091</td>
                                <td width="88">293</td>
                                <td width="72">930</td>
                                <td width="72">8.0</td>
                              </tr>
                              <tr>
                                <td width="115">12.00R20</td>
                                <td width="68">20PR*</td>
                                <td width="107">4000/3650</td>
                                <td width="115">156/153</td>
                                <td width="72">J</td>
                                <td width="84">1127</td>
                                <td width="88">315</td>
                                <td width="72">900</td>
                                <td width="72">8.5</td>
                              </tr>
                              <tr>
                                <td>12.00R24</td>
                                <td>20PR*</td>
                                <td width="107">4500/4125</td>
                                <td width="115">160/157</td>
                                <td width="72">K</td>
                                <td width="84">1128</td>
                                <td width="88">315</td>
                                <td width="72">900</td>
                                <td width="72">8.55</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  12.00R24
                                </td>
                                <td>20PR</td>
                                <td width="107">4500/4125</td>
                                <td width="115">160/157</td>
                                <td width="72">K</td>
                                <td width="84">1128</td>
                                <td width="88">315</td>
                                <td width="72">900</td>
                                <td width="72">8.55</td>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SwipperProduct ids={[53, 28, 52, 46, 58, 14, 22, 40, 35]} />

      </div>
    </>
  );
};

export default GD08;

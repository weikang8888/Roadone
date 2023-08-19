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

const GD800 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=16")
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
                    activeLink="high-end-heavy-loading"
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
                            Optimized profile design, unique horizontal and
                            vertical blocks, puncture resistance bottom design
                            and stone ejection design suppresses the abnormal
                            wear and provide strong drive and braking
                            performance.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Wearable tread recipe and widening and deepening the
                            tread pattern design effectively ensures a longer
                            service life.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Extremely low heating recipe effectively reduces the
                            quality risk of shoulder explosion, chipping, groove
                            splitting and crown removal under overload and
                            overspeed conditions.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Reinforced steel wire structure and special design
                            of explosion-proof cap belt can effectively ensure
                            the heavy load-bearing performance of cap,and
                            improve the anti-stab performance of tire in complex
                            road conditions.
                          </p>{" "}
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Reinforced carcass and bead structure,tyre bead
                            adopts heavy load tech,improves the fatigue and
                            shear resistance of tyre bead under ultra-high and
                            heavy load conditions,reduce quality risks of the
                            bead seperation, crack or explosion.
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
                                <td
                                  width="54"
                                  style={{ wordBreak: "break-all" }}>
                                  8.25R20
                                </td>
                                <td width="54">16PR</td>
                                <td width="54">2430/2300</td>
                                <td width="54">139/137</td>
                                <td width="54">J</td>
                                <td width="54">978</td>
                                <td width="54">236</td>
                                <td width="54">930</td>
                                <td width="54">6.5</td>
                              </tr>
                              <tr>
                                <td width="54">9.00R20</td>
                                <td width="54">16PR</td>
                                <td width="54">2800/2650</td>
                                <td width="54">144/142</td>
                                <td width="54">J</td>
                                <td width="54">1024</td>
                                <td width="54">259</td>
                                <td width="54">900</td>
                                <td width="54">7.0</td>
                              </tr>
                              <tr>
                                <td
                                  width="54"
                                  style={{ wordBreak: "break-all" }}>
                                  10.00R20
                                </td>
                                <td width="54">18PR*</td>
                                <td width="54">3250/3000</td>
                                <td width="54">149/146</td>
                                <td width="54">J</td>
                                <td width="54">1058</td>
                                <td width="54">278</td>
                                <td width="54">930</td>
                                <td width="54">7.5</td>
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

export default GD800;

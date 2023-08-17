import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";

const RA16 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=45")
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
                      Optimized profile design, unique longitudinal pattern,
                      providing excellent anti-biasing performance for different
                      wheel positions.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      High-speed specific wearable tread design, widening tread
                      surface to ensure higher mileage.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Special cap structure and specific 4 belt cap design, low
                      heating recipe, optimised shoulder desigh, inhibiting
                      deformed wear and reducing the quality risk as shoulder
                      cap explosion, cap off etc.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Reinforced carcass and bead structure, high performance
                      steel cord compound formula,ensure multiple retreading of
                      tires.
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
                          <td width="133">12.00R24</td>
                          <td width="72">20PR</td>
                          <td width="143">4500/4125</td>
                          <td width="121">160/154</td>
                          <td width="72">K</td>
                          <td width="88">1226</td>
                          <td width="92">315</td>
                          <td width="72">900</td>
                          <td width="96">8.5</td>
                        </tr>
                        <tr>
                          <td width="133">12.00R20</td>
                          <td width="72">20PR</td>
                          <td width="143">4000/3650</td>
                          <td width="121">156/153</td>
                          <td width="72">K</td>
                          <td width="88">1123</td>
                          <td width="92">315</td>
                          <td width="72">900</td>
                          <td width="96">8.5</td>
                        </tr>
                        <tr>
                          <td width="133">11.00R20</td>
                          <td width="72">18PR</td>
                          <td width="143">3550/3250</td>
                          <td width="121">152/149</td>
                          <td width="72">K</td>
                          <td width="88">1091</td>
                          <td width="92">293</td>
                          <td width="72">930</td>
                          <td width="96">8.0</td>
                        </tr>
                        <tr>
                          <td width="133" style={{ wordBreak: "break-all" }}>
                            12R22.5
                          </td>
                          <td width="72">18PR</td>
                          <td width="143">3550/3250</td>
                          <td width="121">152/149</td>
                          <td width="72">L</td>
                          <td width="88">1085</td>
                          <td width="92">300</td>
                          <td width="72">930</td>
                          <td width="96">9.00</td>
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

export default RA16;

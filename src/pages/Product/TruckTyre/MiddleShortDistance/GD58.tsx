import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";

const GD58 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=25")
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
                    Middle & Short Distance
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
                      Sturdy shoulder block pattern and optimized lateral groove
                      design for powerful drive and braking performance.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Widening and deepening the tread pattern design
                      effectively suppresses the abnormal wear of the tire and
                      ensures a longer service life.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Specific tread for mid-short distance transport and low
                      heating recipe, high wear resistance, low heating, tear
                      resistance and block resistance,effectively reduces the
                      quality risk of shoulder explosion, chipping, groove
                      splitting and crown removal.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Ply with "*" products' super structure of crown and design
                      technology of special explosion-proof crown belt,
                      effectively improve the cap loading capacity, enhancing
                      the puncture resistance and explosion proof perforamce
                      under complex conditions.
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
                          <td width="115">12R22.5</td>
                          <td width="68">18PR*</td>
                          <td width="107">3550/3250</td>
                          <td width="115">152/149</td>
                          <td width="72">J</td>
                          <td width="84">1093</td>
                          <td width="88">300</td>
                          <td width="72">930</td>
                          <td width="72">9.00</td>
                        </tr>
                        <tr>
                          <td width="115">295/80R22.5</td>
                          <td width="68">18PR</td>
                          <td width="107">3550/3250</td>
                          <td width="115">152/149</td>
                          <td width="72">J</td>
                          <td width="84">1058</td>
                          <td width="88">298</td>
                          <td width="72">900</td>
                          <td width="72">9.00</td>
                        </tr>
                        <tr>
                          <td width="115">315/80R22.5</td>
                          <td width="68">20PR</td>
                          <td width="107">4125/3750</td>
                          <td width="115">157/154</td>
                          <td width="72">J</td>
                          <td width="84">1089</td>
                          <td width="88">312</td>
                          <td width="72">900</td>
                          <td width="72">9.00</td>
                        </tr>
                        <tr>
                          <td width="115" style={{ wordBreak: "break-all" }}>
                            315/80R22.5
                          </td>
                          <td width="68">22PR</td>
                          <td width="107">4500/4125</td>
                          <td width="115">160/157</td>
                          <td width="72">J</td>
                          <td width="84">1089</td>
                          <td width="88">312</td>
                          <td width="72">950</td>
                          <td width="72">9.00</td>
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

export default GD58;

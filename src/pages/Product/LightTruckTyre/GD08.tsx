import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../component/Modal/ModalRoadone";
import ProductHeader from "../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../component/Swiper/SwipperProduct";

const GD08Light = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=57")
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
                    Light Truck Tyres
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
                            src={require(`../../../static/assets/picture/${products.products_lorry_image}`)}
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
                        src={require(`../../../static/assets/picture/${products.products_image}`)}
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
                      Unique horizontal and vertical blocks and stone ejection
                      design providing powerful drive and braking performance.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Widening and deepening the tread pattern design
                      effectively suppresses the abnormal wear of the tire and
                      ensures a longer service life of the product.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Specific tread low heating recipe effectively reduces the
                      quality risk of shoulder explosion, chipping, groove
                      splitting and crown removal.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Reinforced carcass and bead structure,tyre bead adopts
                      light truck heavy load tech,enhancing load, impact and
                      puncture resistance.
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
                          <td width="54" style={{ wordBreak: "break-all" }}>
                            7.00R16 &nbsp;LT
                          </td>
                          <td width="54">14PR</td>
                          <td width="54">1320/1180</td>
                          <td width="54">118/114</td>
                          <td width="54">L</td>
                          <td width="54">780</td>
                          <td width="54">200</td>
                          <td width="54">770</td>
                          <td width="54">5.50F</td>
                        </tr>
                        <tr>
                          <td width="54">7.50R16 LT</td>
                          <td width="54">14PR</td>
                          <td width="54">1500/1320</td>
                          <td width="54">122/118</td>
                          <td width="54">L</td>
                          <td width="54">810</td>
                          <td width="54">215</td>
                          <td width="54">770</td>
                          <td width="54">6.00G</td>
                        </tr>
                        <tr>
                          <td width="54" style={{ wordBreak: "break-all" }}>
                            8.25R16 LT
                          </td>
                          <td width="54">18PR</td>
                          <td width="54">2000/1800</td>
                          <td width="54">132/128</td>
                          <td width="54">J</td>
                          <td width="54">863</td>
                          <td width="54">235</td>
                          <td width="54">870</td>
                          <td width="54">6.50H</td>
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

export default GD08Light;

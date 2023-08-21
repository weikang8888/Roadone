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

const CA10 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=61")
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
              <ProductMainBox activeLink="bus" />
            </div>
          </div>
          <div className="col-lg-10 ps-4">
            <div className="tabs1 fr">
              <div className="cd_rt">
                <div className="cp_fl cp_fl2">
                  <ProductTypeBox
                    activeLink="inter-city"
                    showTruckList={false}
                    showBusList={true}
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
                            The specific bus pattern design ensures a strong wet
                            grip and ensures excellent braking performance.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Specific steel sheet fine grain design ensures
                            uniform wear of the cap under frequent brakes.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            The thickened sidewall and scratch-resistant to
                            prevent premature damage to the tire by scratching
                            the sidewall.F
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            The special reinforcement design of the bead ensures
                            the braking and bead bearing and aging performance
                            of the brakes.
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
                                <td width="115">275/70R22.5</td>
                                <td width="72">16PR</td>
                                <td width="107">2800/2575</td>
                                <td width="143">144/141</td>
                                <td width="72">J</td>
                                <td width="95">970</td>
                                <td width="89">276</td>
                                <td width="72">830</td>
                                <td width="72">8.25</td>
                              </tr>
                              <tr>
                                <td width="115">275/70R22.5</td>
                                <td width="72">18PR</td>
                                <td width="107">3000/2725</td>
                                <td width="143">146/143</td>
                                <td width="72">J</td>
                                <td width="95">970</td>
                                <td width="89">276</td>
                                <td width="72">900</td>
                                <td width="72">8.25</td>
                              </tr>
                              <tr>
                                <td width="115">11R22.5</td>
                                <td width="72">16PR</td>
                                <td width="107">3000/2725</td>
                                <td width="143">146/143</td>
                                <td width="72">J</td>
                                <td width="95">1058</td>
                                <td width="89">276</td>
                                <td width="72">830</td>
                                <td width="72">8.25</td>
                              </tr>
                              <tr>
                                <td
                                  width="115"
                                  style={{ wordBreak: "break-all" }}>
                                  11R22.5
                                </td>
                                <td width="72">18PR</td>
                                <td width="107">3250/3000</td>
                                <td width="143">149/146</td>
                                <td width="72">J</td>
                                <td width="95">1058</td>
                                <td width="89">276</td>
                                <td width="72">930</td>
                                <td width="72">8.25</td>
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

export default CA10;

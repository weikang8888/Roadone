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

const GA06 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=30")
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
                            The serrated circumferential groove pattern design
                            ensures good traction and provides excellent grip.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Low heat-generating tread recipe and
                            heat-dissipating shoulder pattern design,
                            effectively reducing the risk of shoulder quality
                            under heavy load.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            0°structure explosion proof cap design, effectively
                            improve the cap loading capacity, enhancing the
                            puncture resistance and explosion proof perforamce
                            under complex conditions.
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
                                <td style={{ wordBreak: "break-all" }}>
                                  11.00R20
                                </td>
                                <td style={{ wordBreak: "break-all" }}>
                                  18PR&nbsp;
                                </td>
                                <td>3550/3250</td>
                                <td>152/149</td>
                                <td>K</td>
                                <td style={{ wordBreak: "break-all" }}>1088</td>
                                <td>295</td>
                                <td>930</td>
                                <td>8.0</td>
                              </tr>
                              <tr>
                                <td>12.00R20</td>
                                <td style={{ wordBreak: "break-all" }}>
                                  18PR&nbsp;
                                </td>
                                <td>3750/3450</td>
                                <td>154/151</td>
                                <td style={{ wordBreak: "break-all" }}>K</td>
                                <td style={{ wordBreak: "break-all" }}>1125</td>
                                <td>315</td>
                                <td>830</td>
                                <td>8.5</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  12.00R24
                                </td>
                                <td>20PR</td>
                                <td>4500/4125</td>
                                <td>160/157</td>
                                <td style={{ wordBreak: "break-all" }}>K</td>
                                <td style={{ wordBreak: "break-all" }}>1125</td>
                                <td>310</td>
                                <td>900</td>
                                <td>8.5</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  12.00R24
                                </td>
                                <td style={{ wordBreak: "break-all" }}>
                                  20PR&nbsp;★
                                </td>
                                <td>4500/4125</td>
                                <td>160/157</td>
                                <td style={{ wordBreak: "break-all" }}>K</td>
                                <td style={{ wordBreak: "break-all" }}>1125</td>
                                <td>310</td>
                                <td>900</td>
                                <td>8.5</td>
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

export default GA06;

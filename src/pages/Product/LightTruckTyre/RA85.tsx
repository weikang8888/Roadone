import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../component/Modal/ModalRoadone";
import ProductHeader from "../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../component/Swiper/SwipperProduct";
import ProductTypeBox from "../ProductTypeBox";
import ProductMainBox from "../ProductMainBox";
import ProductTypeMobile from "../ProductTypeBoxMobile";

const RA85Light = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=59")
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
              <ProductMainBox activeLink="light-truck" />
            </div>
          </div>
          <div className="col-lg-10 ps-4">
            <div className="tabs1 fr">
              <div className="cd_rt">
                <div className="cp_fl cp_fl2">
                  <ProductTypeBox
                    activeLink=""
                    showTruckList={false}
                    showBusList={false}
                  />

                  <ProductTypeMobile showTruckList={false} showBusList={false} />
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
                            Unique three-line longitudinal groove, variable
                            angle profile contour design, anti-cracking,
                            anti-grooving, puncture resistance, anti-smashing
                            block, inhibiting deformed grinding.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Light truck special low heat, high wear-resistant
                            tread formula to ensure a longer service life.
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
                                <td>7.00R16LT</td>
                                <td>14PR</td>
                                <td>1320/1180</td>
                                <td>118/114</td>
                                <td>L</td>
                                <td>775</td>
                                <td>200</td>
                                <td>770</td>
                                <td>5.50F</td>
                              </tr>
                              <tr>
                                <td>7.50R16LT</td>
                                <td>14PR</td>
                                <td>1500/1320</td>
                                <td>122/118</td>
                                <td>L</td>
                                <td>805</td>
                                <td>215</td>
                                <td>770</td>
                                <td>6.00G</td>
                              </tr>
                              <tr>
                                <td>8.25R16LT</td>
                                <td>16PR</td>
                                <td>1800/1600</td>
                                <td>128/124</td>
                                <td>L</td>
                                <td>855</td>
                                <td>235</td>
                                <td>770</td>
                                <td>6.50H</td>
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

export default RA85Light;

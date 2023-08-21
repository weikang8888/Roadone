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

const GA26 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=31")
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
                            Zigzag circumferential continuous pattern and the
                            transverse block groove ensure the grip performance
                            on wet road condition and the driving performance
                            under mixed road conditions.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Low heating tread recipe and heat-dissipating
                            shoulder pattern design, effectively reducing the
                            risk of shoulder quality under heavy load.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Super high strength steel wire structure can
                            effectively guarantee the bearing capacity of the
                            product.
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
                                  315/80R22.5
                                </td>
                                <td>18PR</td>
                                <td>3750/3450</td>
                                <td>154/151</td>
                                <td>K</td>
                                <td style={{ wordBreak: "break-all" }}>1083</td>
                                <td style={{ wordBreak: "break-all" }}>312</td>
                                <td>830</td>
                                <td>9.00</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  315/80R22.5
                                </td>
                                <td style={{ wordBreak: "break-all" }}>20PR</td>
                                <td style={{ wordBreak: "break-all" }}>
                                  4125/3750
                                </td>
                                <td style={{ wordBreak: "break-all" }}>
                                  157/154
                                </td>
                                <td>K</td>
                                <td style={{ wordBreak: "break-all" }}>1083</td>
                                <td style={{ wordBreak: "break-all" }}>312</td>
                                <td style={{ wordBreak: "break-all" }}>900</td>
                                <td>9.00</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  315/80R22.5
                                </td>
                                <td style={{ wordBreak: "break-all" }}>22PR</td>
                                <td style={{ wordBreak: "break-all" }}>
                                  3750/3450
                                </td>
                                <td style={{ wordBreak: "break-all" }}>
                                  160/157
                                </td>
                                <td style={{ wordBreak: "break-all" }}>K</td>
                                <td style={{ wordBreak: "break-all" }}>1083</td>
                                <td style={{ wordBreak: "break-all" }}>312</td>
                                <td style={{ wordBreak: "break-all" }}>950</td>
                                <td style={{ wordBreak: "break-all" }}>9.00</td>
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

export default GA26;

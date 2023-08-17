import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";

const RD65 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=34")
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
                      Four longitudinal grooves are designed with inclined
                      transverse grooves to provide super driving force and wet
                      grip, safe, comfortable and fuel saving.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Optimized profile design, special super wear-resistant
                      tread formula for high-speed drive, ensure higher mileage
                      in mixed road conditions such as high-way and national
                      road.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Reinforced and flexible carcass and bead structure, high
                      performance steel cord compound formula,ensure multiple
                      retreading of tires.
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
                          <td width="100" style={{ wordBreak: "break-all" }}>
                            12R22.5
                          </td>
                          <td width="54">18PR</td>
                          <td width="107">3550/3250</td>
                          <td width="91">152/149</td>
                          <td width="54">L</td>
                          <td width="66">1090</td>
                          <td width="69">300</td>
                          <td width="54">930</td>
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

export default RD65;

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

const HF81 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=50")
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
                    activeLink="long-haul-wearable"
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
                            Optimized profile design, stone ejection treatment
                            at the bottom groove, provide excellent anti-biasing
                            performance and better stone ejection effect in
                            different road conditions.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            The high-speed special super wearable tread recipe
                            design ensures higher mileage in mixed road
                            conditions such as high speed and national road.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Special steel structure and specific 4 belt cap
                            design, low heating recipe, optimised shoulder
                            desigh, inhibiting deformed wear,ensure multiple
                            retreading of tires.
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            Environmental protection material formula,new
                            pattern design and overall optimization of material
                            distribution design technology, realize low rolling
                            resistance while taking into account the wet and
                            slippery performance.
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
                                <td width="127">11R22.5</td>
                                <td width="72">16PR</td>
                                <td width="143">3000/2725</td>
                                <td width="131">146/143</td>
                                <td width="72">M</td>
                                <td width="88">1050</td>
                                <td width="95">279</td>
                                <td width="72">830</td>
                                <td width="111">8.25</td>
                              </tr>
                              <tr>
                                <td width="127">12R22.5</td>
                                <td width="72">18PR</td>
                                <td width="143">3550/3250</td>
                                <td width="131">152/149</td>
                                <td width="72">M</td>
                                <td>1080</td>
                                <td width="95">300</td>
                                <td width="72">930</td>
                                <td width="111">9.00</td>
                              </tr>
                              <tr>
                                <td width="127">295/60R22.5</td>
                                <td>18PR</td>
                                <td>3350/3075</td>
                                <td>150/147</td>
                                <td width="72">L</td>
                                <td>924</td>
                                <td>292</td>
                                <td>900</td>
                                <td>9.00</td>
                              </tr>
                              <tr>
                                <td>315/60R22.5</td>
                                <td>20PR</td>
                                <td width="143">3650/3350</td>
                                <td width="131">153/150</td>
                                <td width="72">L</td>
                                <td width="88">953</td>
                                <td width="95">313</td>
                                <td width="72">900</td>
                                <td width="111">9.75</td>
                              </tr>
                              <tr>
                                <td style={{ wordBreak: "break-all" }}>
                                  315/70R22.5
                                </td>
                                <td>20PR</td>
                                <td width="143">3750/3450</td>
                                <td width="131">154/151</td>
                                <td width="72">L</td>
                                <td width="88">1014</td>
                                <td width="95">312</td>
                                <td width="72">930</td>
                                <td width="111">9.00</td>
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

export default HF81;

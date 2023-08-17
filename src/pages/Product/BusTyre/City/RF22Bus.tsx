import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { NavLink } from "react-router-dom";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";

const RF22Bus = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=4")
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
                    Bus Tyres
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className={"cpfl2"}>
                    Inter-city Bus
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
                      Optimized profile design, special fine pattern treatment,
                      improve the grip of slippery road, safe, comfortable and
                      fuel saving.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      High-speed specific wearable tread design for bus, ensure
                      higher mileage.
                    </p>
                    <p style={{ whiteSpace: "normal" }}>
                      <span>&gt;</span>
                      Reinforced cap specific 4 belt cap design, low heat
                      generation recipe, optimised shoulder desigh, inhibiting
                      reduce the rolling resistance of driving,environmental
                      protection,suitable for multiple retreading of tires.
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
                          <td width="115">9R22.5</td>
                          <td width="72">14PR</td>
                          <td width="107">2240/2120</td>
                          <td width="143">136/134</td>
                          <td width="72">L</td>
                          <td width="95">972</td>
                          <td width="89">229</td>
                          <td width="72">830</td>
                          <td width="72">6.75</td>
                        </tr>
                        <tr>
                          <td width="115">10R22.5</td>
                          <td width="72">16PR</td>
                          <td width="107">2800/2650</td>
                          <td width="143">144/142</td>
                          <td width="72">L</td>
                          <td width="95">1018</td>
                          <td width="89">254</td>
                          <td width="72">900</td>
                          <td width="72">7.50</td>
                        </tr>
                        <tr>
                          <td width="115" style={{ wordBreak: "break-all" }}>
                            215/75R17.5
                          </td>
                          <td width="72">16PR</td>
                          <td width="107">1750/1600</td>
                          <td width="143">127/124</td>
                          <td width="72">K</td>
                          <td width="95">773</td>
                          <td width="89">215</td>
                          <td width="72">830</td>
                          <td width="72">6.00</td>
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

export default RF22Bus;

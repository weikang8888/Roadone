import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";
import ProductHeader from "../../ProductHeader";
import { useTranslation } from "react-i18next";
import SwipperProduct from "../../../../component/Swiper/SwipperProduct";
import ProductTypeBox from "../../ProductTypeBox";
import ProductMainBox from "../../ProductMainBox";
import ProductTypeMobile from "../../ProductTypeBoxMobile";

const GD08 = () => {
  const { t } = useTranslation();

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
      .get("http://localhost:8080/api_roadone/products/products?id=27")
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
                                <div>
                                  {t("products.products_description.27")}
                                </div>
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
                            {t("truck.middleShortDistance.GD08.content1")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.middleShortDistance.GD08.content2")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.middleShortDistance.GD08.content3")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.middleShortDistance.GD08.content4")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <br />
                          </p>
                          <p></p>
                          <table>
                            <tbody>
                              <tr className="firstRow">
                                <td className="tdWidth">{t("products.size")}</td>
                                <td className="tdWidth">{t("products.plyRating")}</td>
                                <td className="tdWidth">{t("products.maxLoadSingleDual")}</td>
             <td className="tdWidth">{t("products.loadIndexSingleDual")}</td>
                               <td className="tdWidth">{t("products.speedRating")}</td>

                                <td className="tdWidth">{t("products.overallDiameter")}</td>

                                                               <td className="tdWidth">{t("products.sectionWidth")}</td>

                                                <td className="tdWidth">{t("products.standardInflationPressure")}</td>

                                         <td className="tdWidth">{t("products.standardRim")}</td>

                              </tr>
                              <tr>
                                <td >235/75R17.5</td>
                                <td >16PR</td>
                                <td >2000/1850</td>
                                <td >132/129</td>
                                <td >J</td>
                                <td >803</td>
                                <td >233</td>
                                <td >830</td>
                                <td >6.75</td>
                              </tr>
                              <tr>
                                <td>235/75R17.5</td>
                                <td>18PR</td>
                                <td >2725/2575</td>
                                <td >143/141</td>
                                <td >J</td>
                                <td>803</td>
                                <td>233</td>
                                <td >875</td>
                                <td>6.75</td>
                              </tr>
                              <tr>
                                <td >9.00R20</td>
                                <td >16PR</td>
                                <td >2800/2650</td>
                                <td >144/142</td>
                                <td >K</td>
                                <td >1023</td>
                                <td >259</td>
                                <td >900</td>
                                <td >7.0</td>
                              </tr>
                              <tr>
                                <td >10.00R20</td>
                                <td >18PR</td>
                                <td >3250/3000</td>
                                <td >149/146</td>
                                <td >J</td>
                                <td >1054</td>
                                <td >278</td>
                                <td >930</td>
                                <td >7.5</td>
                              </tr>
                              <tr>
                                <td >11.00R20</td>
                                <td >18PR*</td>
                                <td >3550/3250</td>
                                <td >152/149</td>
                                <td >J</td>
                                <td >1091</td>
                                <td >293</td>
                                <td >930</td>
                                <td >8.0</td>
                              </tr>
                              <tr>
                                <td >12.00R20</td>
                                <td >20PR*</td>
                                <td >4000/3650</td>
                                <td >156/153</td>
                                <td >J</td>
                                <td >1127</td>
                                <td >315</td>
                                <td >900</td>
                                <td >8.5</td>
                              </tr>
                              <tr>
                                <td>12.00R24</td>
                                <td>20PR*</td>
                                <td >4500/4125</td>
                                <td >160/157</td>
                                <td >K</td>
                                <td >1128</td>
                                <td >315</td>
                                <td >900</td>
                                <td >8.55</td>
                              </tr>
                              <tr>
                                <td >
                                  12.00R24
                                </td>
                                <td>20PR</td>
                                <td >4500/4125</td>
                                <td >160/157</td>
                                <td >K</td>
                                <td >1128</td>
                                <td >315</td>
                                <td >900</td>
                                <td >8.55</td>
                              </tr>
                            </tbody>
                          </table>
                          <p></p>
                        </div>
                        <AdvanceButton
                          advanceButtonText={t("products.advanced")}
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

export default GD08;

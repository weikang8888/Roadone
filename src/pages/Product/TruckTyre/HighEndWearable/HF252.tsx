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

const HF252 = () => {
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
      .get("https://backend.roadone.com.my/api_roadone/products/products?id=1")
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
                    activeLink="high-end-wearable"
                    showTruckList={true}
                    showBusList={false}
                  />

                  <ProductTypeMobile showTruckList={true} showBusList={false} />
                  <div className="tab2">
                    <div className="ct_xq">
                      {productsItems.map((products, index) => (
                        <div className="ct_xq_d1 clearfix" key={index}>
                          <div className="col-md-9 col-6">
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
                                    {t("products.products_description.1")}
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
                          </div>
                          <div className="col-md-3 col-6">
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
                            {t("truck.highEndWearable.HF252.content1")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.highEndWearable.HF252.content2")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.highEndWearable.HF252.content3")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <span>&gt;</span>
                            {t("truck.highEndWearable.HF252.content4")}
                          </p>
                          <p style={{ whiteSpace: "normal" }}>
                            <br />
                          </p>
                          <p></p>
                          <div style={{ overflowX: "auto", width: "100%" }}>
                            <table>
                              <tbody>
                                <tr className="firstRow">
                                  <td className="tdWidth">
                                    {t("products.size")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.plyRating")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.maxLoadSingleDual")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.loadIndexSingleDual")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.speedRating")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.overallDiameter")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.sectionWidth")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.standardInflationPressure")}
                                  </td>
                                  <td className="tdWidth">
                                    {t("products.standardRim")}
                                  </td>
                                </tr>
                                <tr>
                                  <td>245/70R19.5</td>
                                  <td>16PR</td>
                                  <td>2180/2060</td>
                                  <td>135/133</td>
                                  <td>M</td>
                                  <td>839</td>
                                  <td>248</td>
                                  <td>830</td>
                                  <td>7.50</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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

export default HF252;

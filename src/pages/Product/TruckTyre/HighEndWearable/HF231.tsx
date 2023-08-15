import React, { useEffect, useState } from "react";
import axios from "axios";
import AdvanceButton from "../../../../component/Button/AdvanceButton";
import ModalRoadone from "../../../../component/Modal/ModalRoadone";

const HF231 = () => {
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
      .get("http://localhost:8080/api_roadone/products/products?id=2")
      .then((response) => {
        setProductsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="ct_xq">
        {productsItems.map((products, index) => (
          <div className="ct_xq_d1 clearfix">
            <div className="ct_xq_lt fl">
              <div className="ct_xq1">
                <em>TYRE MODEL-</em>
                <span>{products.products_name}</span>
              </div>
              <div className="ct_xqq">
                <div className="ct_xq2" data-aos="zoom-in">
                  <div>{products.products_description}</div>
                </div>
                <div className="ct_xq3" data-aos="zoom-in">
                  <img
                    className="ct_xq3_img1"
                    src={require(`../../../../static/assets/picture/${products.products_lorry_image}`)}
                  />
                </div>
              </div>
            </div>
            <div className="ct_xq_rt fr" data-aos="zoom-in">
              <img
                src={require(`../../../../static/assets/picture/${products.products_image}`)}
              />
            </div>
          </div>
        ))}
        <div className="ct_xq_d2">
          <div className="ct_xq_4 clearfix" data-aos="zoom-in">
            <p style={{ whiteSpace: "normal" }}>
              <span>&gt;</span>
              The new optimized contour design, the angle traction pattern
              groove wall design and the unique pattern steel sheet structure
              provide good traction performance and excellent grip performance.
            </p>
            <p style={{ whiteSpace: "normal" }}>
              <span>&gt;</span>
              Super wearable tread formula design ensures higher mileage.
            </p>
            <p style={{ whiteSpace: "normal" }}>
              <span>&gt;</span>
              New environment protection series formula system design,
              lightweight material distribution design, lower rolling
              resistance, excellent oil saving performance.
            </p>
            <p style={{ whiteSpace: "normal" }}>
              <span>&gt;</span>
              Super strong flexible steel wire structure ensures the good
              load-bearing safety performance of the tire under the light weight
              and low rolling resistance design conditions, and realizes
              multiple retreading.
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
                  <td width="101" style={{ wordBreak: "break-all" }}>
                    245/70R19.5
                  </td>
                  <td width="56">16PR</td>
                  <td width="88">2180/2060</td>
                  <td width="107">135/133</td>
                  <td width="65">M</td>
                  <td width="74">839</td>
                  <td width="66">248</td>
                  <td width="68">830</td>
                  <td width="67">7.50</td>
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
    </>
  );
};

export default HF231;

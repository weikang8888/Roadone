import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductBanner from "../../static/image/products/product-banner.webp";
import HotProductImage1 from "../../static/picture/hotproductImage1.webp";
import HotProductImage2 from "../../static/picture/hotproductImage2.webp";
import InnerBanner from "../../component/Banner/InnerBanner";
import SubMenu from "../../component/SubMenu/SubMenu";
const Productpage = () => {
  const [showFirstSubMenu, setShowFirstSubMenu] = useState(true);
  const [showSecondSubMenu, setShowSecondSubMenu] = useState(false);

  const [menuState, setMenuState] = useState({
    previousLink: "",
    previousPage: "",
    currentPage: "Product",
    currentLink: "/products",
    typePage: "",
    typeLink: "",
  });
  const handleTruckTireClick = (event, currentPage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: "Product",
      currentPage: currentPage,
    }));

    if (currentPage === "Truck Tire") {
      setShowFirstSubMenu(false);
      setShowSecondSubMenu(true);
    } else {
      setShowFirstSubMenu(true);
      setShowSecondSubMenu(false);
    }
  };

  const handleSecondDivClick = (event, typePage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: "Product",
      typePage: typePage,
    }));
  };

  return (
    <>
      {" "}
      <InnerBanner bannerimage={ProductBanner} />
      <section>
        <div className="container">
          <div className="ejfl">Product Categories</div>
          <SubMenu
            previouslink={menuState.previousLink}
            previouspage={menuState.previousPage}
            currentpage={menuState.currentPage}
            currentlink={menuState.currentLink}
            typelink=""
            typepage={menuState.typePage}
          />
          <div className="main">
            <div
              className="prosubmenu clearfix"
              style={{ display: showFirstSubMenu ? "block" : "none" }}>
              <ul className="d-flex flex-wrap">
                <li
                  className="LiProCateOne"
                  id="LiProCate1"
                  onClick={(event) =>
                    handleTruckTireClick(event, "Truck Tire")
                  }>
                  <a href="">+Truck Tire</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate2"
                  onClick={(event) => handleTruckTireClick(event, "Bus Tire")}>
                  <a href="https://www.roadone-hixih.com/bus-tire/">
                    +Bus Tire
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate3"
                  onClick={(event) =>
                    handleTruckTireClick(event, "Light Truck Tire")
                  }>
                  <a href="https://www.roadone-hixih.com/light-truck-tire/">
                    +Light Truck Tire
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate4"
                  onClick={(event) =>
                    handleTruckTireClick(event, "RADIAL OTR TIRES")
                  }>
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/">
                    +RADIAL OTR TIRES
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate5"
                  onClick={(event) =>
                    handleTruckTireClick(event, "ROADONE TYRE DEMONSTRATION")
                  }>
                  <a href="https://www.roadone-hixih.com/roadone-tyre-demonstration/">
                    +ROADONE TYRE DEMONSTRATION
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="prosubmenu clearfix"
              style={{ display: showSecondSubMenu ? "block" : "none" }}>
              <ul className="d-flex flex-wrap">
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "Quarry & Building Sites")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/mine-truck-tire/">
                    Quarry &amp; Building Sites
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "Mid-long Distance Wearable")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/long-distance-standard-load-truck-tire/">
                    Mid-long Distance Wearable
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "Mid-Short distance Heavy Load")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/medium-and-short-distance-hybrid-truck-tires/">
                    Mid-Short distance Heavy Load
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "Long Haul Wearable Tyre")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/highway-truck-tire/">
                    Long Haul Wearable Tyre
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "HIGH END OFF-ROAD TYRE")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-off-road-tyre/">
                    HIGH END OFF-ROAD TYRE
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "High End Heavy Loading Tyres")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-heavy-loading-tyres/">
                    High End Heavy Loading Tyres
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "HIGH END WEARABLE TYRE")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-wearable-tyre/">
                    HIGH END WEARABLE TYRE
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleSecondDivClick(event, "12R22.5 QA919")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/12r22-5-qa919/">
                    12R22.5 QA919
                  </a>
                </li>
              </ul>
            </div>
            <div className="row mx-0 justify-content-between">
              <div className="pro-bigbox d-flex align-items-center">
                <div className="bigboximg col-4 me-4">
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html">
                    <img
                      src={HotProductImage1}
                      alt="16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE"
                    />
                  </a>
                </div>
                <div className="bigboxword col-6">
                  {" "}
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html">
                    <h3>16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE</h3>
                  </a>
                  <p>
                    ROADONE 14.00R25 ， 16.00R25 RADIAL TIRES FOR WIDE BODY DUMP
                    TRUCK SUIT FOR SOFT MINE AND HARD MINES
                  </p>
                  <div className="bigboxmore">
                    <a
                      href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html"
                      rel="nofollow">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="pro-bigbox d-flex align-items-center">
                <div className="bigboximg col-4 me-4">
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html">
                    <img
                      src={HotProductImage2}
                      alt="16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE"
                    />
                  </a>
                </div>
                <div className="bigboxword col-6">
                  {" "}
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html">
                    <h3>16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE</h3>
                  </a>
                  <p>
                    ROADONE 14.00R25 ， 16.00R25 RADIAL TIRES FOR WIDE BODY DUMP
                    TRUCK SUIT FOR SOFT MINE AND HARD MINES
                  </p>
                  <div className="bigboxmore">
                    <a
                      href="https://www.roadone-hixih.com/radial-otr-tires/16-00r25-all-steel-wide-body-dump-truck-tire.html"
                      rel="nofollow">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productpage;

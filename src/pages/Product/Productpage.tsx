import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductBanner from "../../static/image/products/product-banner.webp";
import InnerBanner from "../../component/Banner/InnerBanner";
import SubMenu from "../../component/SubMenu/SubMenu";

const Productpage = () => {
  const [showFirstSubMenu, setShowFirstSubMenu] = useState(true);
  const [showSecondSubMenu, setShowSecondSubMenu] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api_roadone/products/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [menuState, setMenuState] = useState({
    previousLink: "",
    previousPage: "",
    currentPage: "Product",
    currentLink: "/products",
    typePage: "",
    typeLink: "",
  });

  const handleProductTypeClick = (event, currentPage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: "Product",
      currentPage: currentPage,
    }));

    const pageToProductsTypeMap = {
      "Truck Tire": "truck-tire",
      "Bus Tire": "bus-tire",
      "Light Truck Tire": "light-truck-tire",
      "RADIAL OTR TIRES": "radial-otr-tires",
      "ROADONE TYRE DEMONSTRATION": "roadone-tyre-demonstration",
    };

    if (pageToProductsTypeMap.hasOwnProperty(currentPage)) {
      const productsType = pageToProductsTypeMap[currentPage];

      // Fetch the data from the API again
      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          // Filter the retrieved data based on the selected product type
          const filteredProducts = response.data.filter(
            (product) => product.products_type === productsType
          );
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (currentPage === "Truck Tire") {
        setShowFirstSubMenu(false);
        setShowSecondSubMenu(true);
      } else {
        setShowFirstSubMenu(true);
        setShowSecondSubMenu(false);
      }
    }
  };

  const handleTruckTireClick = (event, typePage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: "Product",
      typePage: typePage,
    }));

    const pageToTruckTireTypeMap = {
      "Quarry & Building Sites": "quarry-building-sites",
      "Mid-long Distance Wearable": "mid-long-distance-wearable",
      "Mid-Short distance Heavy Load": "mid-short-distance-heavy-load",
      "Long Haul Wearable Tyre": "long-haul-wearable-tyre",
      "HIGH END OFF-ROAD TYRE": "high-end-off-read-tyre",
      "High End Heavy Loading Tyre": "high-end-heavy-loading-tyre",
      "HIGH END WEARABLE TYRE": "high-end-wearable-tyre",
      "12R22.5 QA919": "12r22-5-qa919",
    };
    if (pageToTruckTireTypeMap.hasOwnProperty(typePage)) {
      const productsType = pageToTruckTireTypeMap[typePage];
      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          // Filter the retrieved data based on the selected product type
          const filteredProducts = response.data.filter(
            (product) => product.products_truck_tire_type === productsType
          );
          setProducts(filteredProducts);
          console.log(filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (typePage) {
        setShowSecondSubMenu(false);
      } else {
        setShowSecondSubMenu(true);
      }
    }
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
                    handleProductTypeClick(event, "Truck Tire")
                  }>
                  <a href="">+Truck Tire</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate2"
                  onClick={(event) =>
                    handleProductTypeClick(event, "Bus Tire")
                  }>
                  <a href="https://www.roadone-hixih.com/bus-tire/">
                    +Bus Tire
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate3"
                  onClick={(event) =>
                    handleProductTypeClick(event, "Light Truck Tire")
                  }>
                  <a href="https://www.roadone-hixih.com/light-truck-tire/">
                    +Light Truck Tire
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate4"
                  onClick={(event) =>
                    handleProductTypeClick(event, "RADIAL OTR TIRES")
                  }>
                  <a href="https://www.roadone-hixih.com/radial-otr-tires/">
                    +RADIAL OTR TIRES
                  </a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate5"
                  onClick={(event) =>
                    handleProductTypeClick(event, "ROADONE TYRE DEMONSTRATION")
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
                    handleTruckTireClick(event, "Quarry & Building Sites")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/mine-truck-tire/">
                    Quarry &amp; Building Sites
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "Mid-long Distance Wearable")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/long-distance-standard-load-truck-tire/">
                    Mid-long Distance Wearable
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "Mid-Short distance Heavy Load")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/medium-and-short-distance-hybrid-truck-tires/">
                    Mid-Short distance Heavy Load
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "Long Haul Wearable Tyre")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/highway-truck-tire/">
                    Long Haul Wearable Tyre
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "HIGH END OFF-ROAD TYRE")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-off-road-tyre/">
                    HIGH END OFF-ROAD TYRE
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "High End Heavy Loading Tyres")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-heavy-loading-tyres/">
                    High End Heavy Loading Tyres
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "HIGH END WEARABLE TYRE")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-wearable-tyre/">
                    HIGH END WEARABLE TYRE
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireClick(event, "12R22.5 QA919")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/12r22-5-qa919/">
                    12R22.5 QA919
                  </a>
                </li>
              </ul>
            </div>
            <div className="row mx-0 justify-content-between">
              {products.map((product, index) => (
                <div
                  className="pro-bigbox d-flex align-items-center"
                  key={index}>
                  <div className="bigboximg col-4 me-4">
                    <a href={product.products_url}>
                      <img
                        src={require(`../../static/picture/${product.products_image}`)}
                      />
                    </a>
                  </div>
                  <div className="bigboxword col-6">
                    <a href={product.products_url}>
                      <h3>{product.products_name}</h3>
                    </a>
                    <p>{product.products_description}</p>
                    <div className="bigboxmore">
                      <a href={product.products_url} rel="nofollow">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productpage;

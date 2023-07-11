import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ProductBanner from "../../static/image/products/product-banner.webp";
import InnerBanner from "../../component/Banner/InnerBanner";
import SubMenu from "../../component/SubMenu/SubMenu";

const Productpage = () => {
  const { t } = useTranslation();
  const [showFirstSubMenu, setShowFirstSubMenu] = useState(true);
  const [showSecondSubMenu, setShowSecondSubMenu] = useState(false);
  const [showQA919, setShowQA919] = useState(false);

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentPage] = useState(1);
  const [newsPerProduct] = useState(12);

  const indexOfLastNews = currentProduct * newsPerProduct;
  const indexOfFirstNews = indexOfLastNews - newsPerProduct;
  const currentNews = products.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentProduct === 1;
  const isLastPage =
    currentProduct === Math.ceil(products.length / newsPerProduct);

  const [menuState, setMenuState] = useState({
    previousPage: t("submenu.product"),
    currentPage: "",
    typePage: "",
  });

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

  const handleSubMenuClick = (event, previousPage, currentPage, typePage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: previousPage,
      currentPage: currentPage !== previousPage ? currentPage : "",
      typePage: previousPage !== currentPage ? null : typePage,
    }));

    const pageToProductsTypeMap = {
      "Truck Tire": "truck-tire",
      "Bus Tire": "bus-tire",
      "Light Truck Tire": "light-truck-tire",
      "RADIAL OTR TIRES": "radial-otr-tires",
      "ROADONE TYRE DEMONSTRATION": "roadone-tyre-demonstration",
      卡车轮胎: "truck-tire",
      巴士轮胎: "bus-tire",
      轻型卡车轮胎: "light-truck-tire",
      工程子午线轮胎: "radial-otr-tires",
      "ROADONE 轮胎演示": "roadone-tyre-demonstration",
    };
    if (previousPage && !currentPage) {
      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      setShowFirstSubMenu(true);
      setShowSecondSubMenu(false);
      setShowQA919(false);
    }
    if (pageToProductsTypeMap.hasOwnProperty(currentPage)) {
      const productsType = pageToProductsTypeMap[currentPage];

      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          if (currentPage === "Truck Tire" || currentPage === "卡车轮胎") {
            setShowFirstSubMenu(false);
            setShowSecondSubMenu(true);
            setShowQA919(false);
          } else {
            setShowFirstSubMenu(true);
            setShowSecondSubMenu(false);
            setShowQA919(false);
          }

          const filteredProducts = response.data.filter(
            (product) => product.products_type === productsType
          );
          setProducts(filteredProducts);
          console.log(filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleProductTypeClick = (event, currentPage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: t("submenu.product"),
      currentPage: currentPage,
    }));

    const pageToProductsTypeMap = {
      "Truck Tire": "truck-tire",
      "Bus Tire": "bus-tire",
      "Light Truck Tire": "light-truck-tire",
      "RADIAL OTR TIRES": "radial-otr-tires",
      "ROADONE TYRE DEMONSTRATION": "roadone-tyre-demonstration",
      卡车轮胎: "truck-tire",
      巴士轮胎: "bus-tire",
      轻型卡车轮胎: "light-truck-tire",
      工程子午线轮胎: "radial-otr-tires",
      "ROADONE 轮胎演示": "roadone-tyre-demonstration",
    };

    if (pageToProductsTypeMap.hasOwnProperty(currentPage)) {
      const productsType = pageToProductsTypeMap[currentPage];

      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          const filteredProducts = response.data.filter(
            (product) => product.products_type === productsType
          );
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (currentPage === "Truck Tire" || currentPage === "卡车轮胎") {
        setShowFirstSubMenu(false);
        setShowSecondSubMenu(true);
      } else {
        setShowFirstSubMenu(true);
        setShowSecondSubMenu(false);
      }
    }
  };

  const handleTruckTireTypeClick = (event, typePage) => {
    event.preventDefault();

    setMenuState((prevState) => ({
      ...prevState,
      previousLink: "/products",
      previousPage: t("submenu.product"),
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
      采石场和建筑工地: "quarry-building-sites",
      中远距离穿戴: "mid-long-distance-wearable",
      中短距离重载: "mid-short-distance-heavy-load",
      长途耐磨轮胎: "long-haul-wearable-tyre",
      高端越野轮胎: "high-end-off-read-tyre",
      高端重载轮胎: "high-end-heavy-loading-tyre",
      高端耐磨轮胎: "high-end-wearable-tyre",
    };
    if (pageToTruckTireTypeMap.hasOwnProperty(typePage)) {
      const truckTireType = pageToTruckTireTypeMap[typePage];
      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          const filteredProducts = response.data.filter(
            (product) => product.products_truck_tire_type === truckTireType
          );
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (typePage) {
        setShowSecondSubMenu(false);
      } else {
        setShowSecondSubMenu(true);
      }

      if (typePage === "12R22.5 QA919") {
        setShowQA919(true);
      } else {
        setShowQA919(false);
      }
    }
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(products.length / newsPerProduct);

    return (
      <div className="pages">
        <button
          onClick={() => paginate(1)}
          disabled={isFirstPage}
          className={isFirstPage ? "disabled" : ""}>
          First
        </button>
        <button
          onClick={() => paginate(currentProduct - 1)}
          disabled={isFirstPage}
          className={isFirstPage ? "disabled" : ""}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={currentProduct === pageNumber ? "active" : ""}>
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => paginate(currentProduct + 1)}
          disabled={isLastPage}
          className={isLastPage ? "disabled" : ""}>
          Next
        </button>
        <button
          onClick={() => paginate(Math.ceil(products.length / newsPerProduct))}
          disabled={isLastPage}
          className={isLastPage ? "disabled" : ""}>
          Last
        </button>
        <span className="pageInfo">
          {currentProduct}/{totalPages}
        </span>
      </div>
    );
  };

  return (
    <>
      {" "}
      <InnerBanner bannerimage={ProductBanner} />
      <section>
        <div className="container">
          <div className="ejfl">Product Categories</div>
          <SubMenu
            previouspage={menuState.previousPage}
            currentpage={menuState.currentPage}
            typepage={menuState.typePage}
            onSubMenuClick={handleSubMenuClick}
            className="pointer"
          />
          <div className="main">
            <div
              className="plist"
              style={{ display: showQA919 ? "block" : "none" }}>
              <div className="pro-body">QA919</div>
              <div className="pro-list"></div>

              <div className="proIntro">
                We're professional 12r22.5 qa919 manufacturers and suppliers in
                China, providing bulk products for sale. Welcome to wholesale
                high-quality 12r22.5 qa919 in stock here from our factory.
              </div>
            </div>
            <div
              className="prosubmenu clearfix"
              style={{ display: showFirstSubMenu ? "block" : "none" }}>
              <ul className="d-flex flex-wrap">
                <li
                  className="LiProCateOne"
                  id="LiProCate1"
                  onClick={(event) =>
                    handleProductTypeClick(event, t("submenu.truck-tire"))
                  }>
                  <a href="">+{t("submenu.truck-tire")}</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate2"
                  onClick={(event) =>
                    handleProductTypeClick(event, t("submenu.bus-tire"))
                  }>
                  <a>+{t("submenu.bus-tire")}</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate3"
                  onClick={(event) =>
                    handleProductTypeClick(event, t("submenu.light-truck-tire"))
                  }>
                  <a>+{t("submenu.light-truck-tire")}</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate4"
                  onClick={(event) =>
                    handleProductTypeClick(event, t("submenu.radial-otr-tire"))
                  }>
                  <a>+{t("submenu.radial-otr-tire")}</a>
                </li>
                <li
                  className="LiProCateOne"
                  id="LiProCate5"
                  onClick={(event) =>
                    handleProductTypeClick(
                      event,
                      t("submenu.roadone-tyre-demonstration")
                    )
                  }>
                  <a>+{t("submenu.roadone-tyre-demonstration")}</a>
                </li>
              </ul>
            </div>
            <div
              className="prosubmenu clearfix"
              style={{ display: showSecondSubMenu ? "block" : "none" }}>
              <ul className="d-flex flex-wrap">
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.quarry-buidling-sites")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/mine-truck-tire/">
                    {t("submenu.quarry-buidling-sites")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.mid-long-distance-wearable")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/long-distance-standard-load-truck-tire/">
                    {t("submenu.mid-long-distance-wearable")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.mid-short-distance-heavy-load")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/medium-and-short-distance-hybrid-truck-tires/">
                    {t("submenu.mid-short-distance-heavy-load")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.long-haul-wearable-tyre")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/highway-truck-tire/">
                    {t("submenu.long-haul-wearable-tyre")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-off-road-tyre")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-off-road-tyre/">
                    {t("submenu.high-end-off-road-tyre")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-heavy-loading-tyre")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-heavy-loading-tyres/">
                    {t("submenu.high-end-heavy-loading-tyre")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-wearable-tyre")
                    )
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/high-end-wearable-tyre/">
                    {t("submenu.high-end-wearable-tyre")}
                  </a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(event, "12R22.5 QA919")
                  }>
                  <a href="https://www.roadone-hixih.com/truck-tire/12r22-5-qa919/">
                    12R22.5 QA919
                  </a>
                </li>
              </ul>
            </div>
            <div className="row mx-0 justify-content-between">
              {currentNews.map((product, index) => (
                <div className="pro-bigbox align-items-center" key={index}>
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
            {renderPageNumbers()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productpage;

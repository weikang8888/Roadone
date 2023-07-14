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
    currentPage: "",
    typePage: "",
  });

  const pageToProductsTypeMap = {
    [t("submenu.truck-tire")]: "truck-tire",
    [t("submenu.bus-tire")]: "bus-tire",
    [t("submenu.light-truck-tire")]: "light-truck-tire",
    [t("submenu.radial-otr-tire")]: "radial-otr-tires",
    [t("submenu.roadone-tyre-demonstration")]: "roadone-tyre-demonstration",
  };

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
    setCurrentPage(1); // Reset the current page to 1 when a filter is applied

    setMenuState((prevState) => ({
      ...prevState,
      currentPage: currentPage !== previousPage ? currentPage : "",
      typePage: previousPage !== currentPage ? null : typePage,
    }));

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
          if (currentPage === t("submenu.truck-tire")) {
            setShowFirstSubMenu(false);
            setShowSecondSubMenu(true);
            setShowQA919(false);
          } else {
            setShowFirstSubMenu(false);
            setShowSecondSubMenu(false);
            setShowQA919(false);
          }

          const filteredProducts = response.data.filter(
            (product) => product.products_type === productsType
          );
          setProducts(filteredProducts);
          console.log("filteredProducts:", filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleProductTypeClick = (event, currentPage) => {
    event.preventDefault();
    setCurrentPage(1); // Reset the current page to 1 when a filter is applied

    setMenuState((prevState) => ({
      ...prevState,
      currentPage: currentPage,
    }));

    if (pageToProductsTypeMap.hasOwnProperty(currentPage)) {
      const productsType = pageToProductsTypeMap[currentPage];

      axios
        .get("http://localhost:8080/api_roadone/products/products")
        .then((response) => {
          const filteredProducts = response.data.filter(
            (product) => product.products_type === productsType
          );
          setProducts(filteredProducts);
          console.log("filteredProducts:", filteredProducts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (currentPage === t("submenu.truck-tire")) {
        setShowFirstSubMenu(false);
        setShowSecondSubMenu(true);
      } else {
        setShowFirstSubMenu(false);
        setShowSecondSubMenu(false);
      }
    }
  };

  const handleTruckTireTypeClick = (event, typePage) => {
    event.preventDefault();
    setCurrentPage(1); // Reset the current page to 1 when a filter is applied

    setMenuState((prevState) => ({
      ...prevState,
      typePage: t(typePage),
    }));

    const pageToTruckTireTypeMap = {
      [t("submenu.quarry-buidling-sites")]: "quarry-building-sites",
      [t("submenu.mid-long-distance-wearable")]: "mid-long-distance-wearable",
      [t("submenu.mid-short-distance-heavy-load")]:
        "mid-short-distance-heavy-load",
      [t("submenu.long-haul-wearable-tyre")]: "long-haul-wearable-tyre",
      [t("submenu.high-end-off-road-tyre")]: "high-end-off-road-tyre",
      [t("submenu.high-end-heavy-loading-tyre")]: "high-end-heavy-loading-tyre",
      [t("submenu.high-end-wearable-tyre")]: "high-end-wearable-tyre",
      "12R22.5 QA919": "12R22.5 QA919",
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
          <div className="ejfl">{t("product.productCategories")}</div>

          <SubMenu
            previouspage={t("submenu.product")}
            currentpage={t(menuState.currentPage)}
            typepage={t(menuState.typePage)}
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
              {t("product.12r22.5")}
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
                  <a>{t("submenu.quarry-buidling-sites")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.mid-long-distance-wearable")
                    )
                  }>
                  <a>{t("submenu.mid-long-distance-wearable")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.mid-short-distance-heavy-load")
                    )
                  }>
                  <a>{t("submenu.mid-short-distance-heavy-load")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.long-haul-wearable-tyre")
                    )
                  }>
                  <a>{t("submenu.long-haul-wearable-tyre")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-off-road-tyre")
                    )
                  }>
                  <a>{t("submenu.high-end-off-road-tyre")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-heavy-loading-tyre")
                    )
                  }>
                  <a>{t("submenu.high-end-heavy-loading-tyre")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(
                      event,
                      t("submenu.high-end-wearable-tyre")
                    )
                  }>
                  <a>{t("submenu.high-end-wearable-tyre")}</a>
                </li>
                <li
                  onClick={(event) =>
                    handleTruckTireTypeClick(event, "12R22.5 QA919")
                  }>
                  <a>12R22.5 QA919</a>
                </li>
              </ul>
            </div>
            <div className="row mx-0 justify-content-between">
              {currentNews.map((product, index) => {
                const translationIndex = parseInt(product.id, 10);

                return (
                  <div
                    className="pro-bigbox align-items-center"
                    key={product.id}>
                    <div className="bigboximg col-4 me-4">
                      <a href={product.products_url}>
                        <img
                          src={require(`../../static/picture/${product.products_image}`)}
                        />
                      </a>
                    </div>
                    <div className="bigboxword col-6">
                      <a href={product.products_url}>
                        <h3>{t(`product.title.${translationIndex}`)}</h3>
                      </a>
                      <p>{t(`product.description.${translationIndex}`)}</p>
                      <div className="bigboxmore">
                        <a href={product.products_url} rel="nofollow">
                          {t("other.readMore")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {renderPageNumbers()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productpage;

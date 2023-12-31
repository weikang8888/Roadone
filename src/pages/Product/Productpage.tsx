import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Type28 from "../../static/assets/picture/type_28.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import axios from "axios";
import ProductHeader from "./ProductHeader";
SwiperCore.use([Navigation, Pagination]);

const Productpage = () => {
  const { t } = useTranslation();

  const [productsItems, setProductsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
  const [selectedTruckCategory, setSelectedTruckCategory] = useState(""); // State to track selected category
  const [selectedBusCategory, setSelectedBusCategory] = useState(""); // State to track selected category
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [filteredPaginatedProducts, setFilteredPaginatedProducts] = useState(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const itemsPerPage = 10;

  const { category, subcategory } = useParams(); // Get the category and subcategory parameters from the URL
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTruckCategory("");
    setSelectedBusCategory("");
    setCurrentPage(1);
    setShowPagination(true);
    navigate(`/products/${category}`);
  };

  const handleShowSpecifyProduct = (
    productId,
    category,
    truckCategory,
    busCategory
  ) => {
    if (productId) {
      setShowPagination(true); // Show pagination when hiding the product details
    } else {
      setSelectedCategory(category);
      setSelectedTruckCategory(truckCategory);
      setSelectedBusCategory(busCategory);
      setShowPagination(false); // Hide pagination when showing the product details
    }
  };

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/api_roadone/products/products")
      .then((response) => {
        setProductsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    let filtered = productsItems;

    if (selectedCategory === "truck") {
      filtered = selectedTruckCategory
        ? productsItems.filter(
            (product) => product.products_truck_type === selectedTruckCategory
          )
        : productsItems.filter((product) => product.products_type === "truck");
    } else if (selectedCategory === "bus") {
      filtered = selectedBusCategory
        ? productsItems.filter(
            (product) => product.products_bus_type === selectedBusCategory
          )
        : productsItems.filter((product) => product.products_type === "bus");
    } else if (selectedCategory !== "") {
      filtered = productsItems.filter(
        (product) => product.products_type === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [
    selectedCategory,
    selectedTruckCategory,
    selectedBusCategory,
    productsItems,
  ]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    setFilteredPaginatedProducts(paginatedProducts);
  }, [filteredProducts, currentPage]);
  useEffect(() => {
    setSelectedCategory(category || "");
    setSelectedTruckCategory(subcategory || "");
    setSelectedBusCategory(subcategory || "");
    setCurrentPage(1);
    setShowPagination(true);
  }, [category, subcategory]);
  return (
    <>
      <ProductHeader />
      <div className="container">
        <div className="cd_main clearfix">
          <div className="col-lg-2">
            <div className="cd_lt fl">
              <ul>
                {[
                  { id: "truck", label: t("header.truckTyre") },
                  { id: "light-truck", label: t("header.lightTruckTyre") },
                  { id: "bus", label: t("header.busTyre") },
                ].map((category) => (
                  <li key={category.id}>
                    <a
                      onClick={() => {
                        handleCategoryClick(category.id);
                      }}
                      className={` ${
                        selectedCategory === category.id ? "cd_fl" : ""
                      }`}>
                      {category.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-10 ps-4">
            <div className="tabs1 fr">
              <div className="cd_rt">
                <div className="cp_fl cp_fl2">
                  <div className="typebox">
                    {selectedCategory === "truck" && (
                      <ul className="clearfix">
                        {[
                          {
                            id: "long-haul-wearable",
                            label: t("products.longHaulWearable"),
                          },
                          {
                            id: "middle-long-distance",
                            label: t("products.middleLongDistance"),
                          },
                          {
                            id: "middle-short-distance",
                            label: t("products.middleShortDistance"),
                          },
                          {
                            id: "quarry-building-site",
                            label: t("products.quarryBuidlingSites"),
                          },
                          {
                            id: "high-end-off-road",
                            label: t("products.highEndOffRoad"),
                          },
                          {
                            id: "high-end-heavy-loading",
                            label: t("products.highEndHeavyLoading"),
                          },
                          {
                            id: "high-end-wearable",
                            label: t("products.highEndWearable"),
                          },
                        ].map((subcategory) => (
                          <li
                            key={subcategory.id}
                            onClick={
                              () =>
                                navigate(`/products/truck/${subcategory.id}`) // Update the URL dynamically
                            }>
                            <a
                              className={` ${
                                selectedTruckCategory === subcategory.id
                                  ? "cpfl2"
                                  : ""
                              }`}>
                              {subcategory.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {selectedCategory === "light-truck" && (
                      <div className="ct_img">
                        <img
                          src={Type28}
                          title="Light Truck Tyres"
                          alt="Light Truck Tyres"
                        />
                      </div>
                    )}
                    {selectedCategory === "bus" && (
                      <ul className="category-content clearfix">
                        {[
                          {
                            id: "inter-city",
                            label: t("products.interCityBus"),
                          },
                          {
                            id: "city-bus",
                            label: t("products.cityCityBus"),
                          },
                        ].map((subcategory) => (
                          <li
                            key={subcategory.id}
                            onClick={
                              () => navigate(`/products/bus/${subcategory.id}`) // Update the URL dynamically
                            }>
                            <a
                              className={` ${
                                selectedBusCategory === subcategory.id
                                  ? "cpfl2"
                                  : ""
                              }`}>
                              {subcategory.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="typebox_m">
                    {selectedCategory === "truck" && (
                      <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        className="swiper-container"
                        id="banner">
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/long-haul-wearable`);
                            }}>
                            {t("products.longHaulWearable")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/middle-long-distance`);
                            }}>
                            {t("products.middleLongDistance")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/middle-short-distance`);
                            }}>
                            {t("products.middleShortDistance")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/quarry-building-site`);
                            }}>
                            {t("products.quarryBuidlingSites")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/high-end-off-road`);
                            }}>
                            {t("products.highEndOffRoad")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(
                                `/products/truck/high-end-heavy-loading`
                              );
                            }}>
                            {t("products.highEndHeavyLoading")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/truck/high-end-wearable`);
                            }}>
                            {t("products.highEndWearable")}
                          </a>
                        </SwiperSlide>
                      </Swiper>
                    )}
                    {selectedCategory === "bus" && (
                      <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        className="swiper-container"
                        id="banner">
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/bus/inter-city`);
                            }}>
                            {t("products.interCityBus")}
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() => {
                              navigate(`/products/bus/city-bus`);
                            }}>
                            {t("products.cityCityBus")}
                          </a>
                        </SwiperSlide>
                      </Swiper>
                    )}
                  </div>

                  <div className="tabs2">
                    <div className="ct_list">
                      <ul>
                        {filteredPaginatedProducts.map((products, index) => {
                          const translationIndex = parseInt(products.id);
                          return (
                            <li className="clearfix" key={index}>
                              <div className="col-lg-9">
                                <div className="ct_d1 fl clearfix">
                                  <div className="cp_intro clearfix">
                                    <a
                                      className="col-lg-4"
                                      href={products.products_url}
                                      onClick={() =>
                                        handleShowSpecifyProduct(
                                          products.id,
                                          products.products_type,
                                          products.products_truck_type,
                                          products.products_bus_type
                                        )
                                      }>
                                      <div
                                        className="cp_tit fl"
                                        data-aos="zoom-in-right"
                                        data-aos-easing="ease-out-back"
                                        data-aos-duration="1000">
                                        <em>TYRE MODEL-</em>
                                        <span>{products.products_name}</span>
                                        <i></i>
                                      </div>
                                    </a>
                                    <div
                                      className="fl cp_ms col-lg-6"
                                      data-aos="zoom-in-left"
                                      data-aos-easing="ease-out-back"
                                      data-aos-duration="1000">
                                      <div>
                                        {t(
                                          `products.products_description.${translationIndex}`
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ct_do">
                                    <div
                                      className="cp_img3"
                                      data-aos="zoom-in-left"
                                      data-aos-easing="ease-out-back"
                                      data-aos-duration="1000">
                                      <img
                                        className="ct_img_c1"
                                        src={require(`../../static/assets/picture/${products.products_lorry_image}`)}
                                      />
                                    </div>
                                    <div
                                      className="cp_img2"
                                      data-aos="zoom-in-left"
                                      data-aos-easing="ease-out-back"
                                      data-aos-duration="1000">
                                      <a
                                        href={products.products_url}
                                        onClick={() =>
                                          handleShowSpecifyProduct(
                                            products.id,
                                            products.products_type,
                                            products.products_truck_type,
                                            products.products_bus_type
                                          )
                                        }>
                                        {t("homepage.viewDetails")}
                                        <span>{">"}</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                <div
                                  className="ct_d2"
                                  data-aos="slide-up"
                                  data-aos-easing="ease-out-back"
                                  data-aos-duration="1000">
                                  <img
                                    src={require(`../../static/assets/picture/${products.products_image}`)}
                                    title="HF252"
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {showPagination && (
                      <div className="pagination" id="pages">
                        {currentPage > 1 && (
                          <a
                            className="first"
                            onClick={() => setCurrentPage(1)}>
                            {"<<"}
                          </a>
                        )}
                        {currentPage > 1 && (
                          <a
                            className="prev"
                            onClick={() => setCurrentPage(currentPage - 1)}>
                            {"<"}
                          </a>
                        )}
                        {Array.from({
                          length: Math.ceil(
                            filteredProducts.length / itemsPerPage
                          ),
                        }).map((_, index) => (
                          <a
                            key={index}
                            className={
                              currentPage === index + 1 ? "active" : ""
                            }
                            onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                          </a>
                        ))}
                        {currentPage <
                          Math.ceil(filteredProducts.length / itemsPerPage) && (
                          <a
                            className="next"
                            onClick={() => setCurrentPage(currentPage + 1)}>
                            {">"}
                          </a>
                        )}
                        {currentPage <
                          Math.ceil(filteredProducts.length / itemsPerPage) && (
                          <a
                            className="last"
                            onClick={() =>
                              setCurrentPage(
                                Math.ceil(
                                  filteredProducts.length / itemsPerPage
                                )
                              )
                            }>
                            {">>"}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;

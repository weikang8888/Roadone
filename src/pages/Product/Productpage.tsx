import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Type28 from "../../static/assets/picture/type_28.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import axios from "axios";
import ProductHeader from "./ProductHeader";
SwiperCore.use([Navigation, Pagination]);

const Productpage = () => {
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

  const handleTruckCategoryClick = (truckCategory) => {
    setSelectedTruckCategory(truckCategory);
    setCurrentPage(1);
    setShowPagination(true);
  };
  const handleBusCategoryClick = (busCategory) => {
    setSelectedBusCategory(busCategory);
    setCurrentPage(1);
    setShowPagination(true);
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
      .get("http://localhost:8080/api_roadone/products/products")
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
    // Update the selected category and subcategory states based on the URL parameters
    setSelectedCategory(category || "");
    setSelectedTruckCategory(subcategory || "");
    setSelectedBusCategory("");
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
                  { id: "truck", label: "Truck Tyres" },
                  { id: "light-truck", label: "Light Truck Tyres" },
                  { id: "bus", label: "Bus Tyres" },
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
                            label: "Long Haul Wearable Tyres",
                          },
                          {
                            id: "middle-long-distance",
                            label: "Middle & Long Distance",
                          },
                          {
                            id: "middle-short-distance",
                            label: "Middle & Short Distance",
                          },
                          {
                            id: "quarry-building-site",
                            label: "Quarry & Building Sites",
                          },
                          {
                            id: "high-end-off-road",
                            label: "High End Off-road Tyres",
                          },
                          {
                            id: "high-end-heavy-loading",
                            label: "High End Heavy Loading Tyres",
                          },
                          {
                            id: "high-end-wearable",
                            label: "HIGH END WEARABLE TYRE",
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
                          { id: "inter-city", label: "Inter-city Bus" },
                          { id: "city-bus", label: "City-city Bus" },
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
                            onClick={() =>
                              handleTruckCategoryClick("long-haul-wearable")
                            }>
                            Long Haul Wearable Tyres
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("middle-long-distance")
                            }>
                            Middle & Long Distance
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("middle-short-distance")
                            }>
                            Middle & Short Distance
                          </a>
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("quarry-building-site")
                            }>
                            Quarry & Building Sites
                          </a>
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("high-end-off-road")
                            }>
                            High End Off-road Tyres
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("high-end-heavy-loading")
                            }>
                            High End Heavy Loading Tyres
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a
                            onClick={() =>
                              handleTruckCategoryClick("high-end-wearable")
                            }>
                            HIGH END WEARABLE TYRE
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
                            onClick={() =>
                              handleBusCategoryClick("inter-city")
                            }>
                            Inter-city Bus
                          </a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a onClick={() => handleBusCategoryClick("city-bus")}>
                            City-city Bus{" "}
                          </a>
                        </SwiperSlide>
                      </Swiper>
                    )}
                  </div>

                  <div className="tabs2">
                    <div className="ct_list">
                      <ul>
                        {filteredPaginatedProducts.map((products, index) => (
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
                                    <div>{products.products_description}</div>
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
                                      View details
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
                        ))}
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

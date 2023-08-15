import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Swipper from "../../component/Swiper/Swipper";
import LogoOther from "../../static/assets/main/cd_logo.png";
import ProductImage1 from "../../static/assets/image/inside_pro_1.jpg";
import ProductImage2 from "../../static/assets/image/inside_pro_2.jpg";
import ProductImage3 from "../../static/assets/image/inside_pro_3.jpg";
import ProductMobileImage1 from "../../static/assets/m/inside_pro_1.jpg";
import ProductMobileImage2 from "../../static/assets/m/inside_pro_2.jpg";
import ProductMobileImage3 from "../../static/assets/m/inside_pro_3.jpg";
import Type28 from "../../static/assets/picture/type_28.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import axios from "axios";
import HF252 from "./TruckTyre/HighEndWearable/HF252";
import HF231 from "./TruckTyre/HighEndWearable/HF231";
SwiperCore.use([Navigation, Pagination]);

const Productpage = () => {
  const [productsItems, setProductsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
  const [selectedTruckCategory, setSelectedTruckCategory] = useState(""); // State to track selected category
  const [selectedBusCategory, setSelectedBusCategory] = useState(""); // State to track selected category
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clickedProductId, setClickedProductId] = useState(null);

  const swiperTopSlides = [
    { image: ProductImage1 },
    { image: ProductImage2 },
    { image: ProductImage3 },
  ];
  const swiperTopMobileSlides = [
    { image: ProductMobileImage1 },
    { image: ProductMobileImage2 },
    { image: ProductMobileImage3 },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTruckCategory("");
    setClickedProductId("");
    setSelectedBusCategory("");
  };

  const handleTruckCategoryClick = (truckCategory) => {
    setSelectedTruckCategory(truckCategory);
    setClickedProductId("");
  };
  const handleBusCategoryClick = (busCategory) => {
    setSelectedBusCategory(busCategory);
    setClickedProductId("");
  };

  const handleShowSpecifyProduct = (
    productId,
    category,
    truckCategory,
    busCategory
  ) => {
    if (clickedProductId === productId) {
      setClickedProductId(null);
    } else {
      setClickedProductId(productId);
      setSelectedCategory(category);
      setSelectedTruckCategory(truckCategory);
      setSelectedBusCategory(busCategory);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
    if (selectedCategory === "") {
      setFilteredProducts(productsItems);
    } else if (selectedCategory === "truck") {
      if (selectedTruckCategory === "") {
        const truckFiltered = productsItems.filter(
          (product) => product.products_type === "truck"
        );
        setFilteredProducts(truckFiltered);
      } else {
        const filtered = productsItems.filter(
          (product) => product.products_truck_type === selectedTruckCategory
        );
        setFilteredProducts(filtered);
      }
    } else if (selectedCategory === "bus") {
      if (selectedBusCategory === "") {
        const busFiltered = productsItems.filter(
          (product) => product.products_type === "bus"
        );
        setFilteredProducts(busFiltered);
      } else {
        const filtered = productsItems.filter(
          (product) => product.products_bus_type === selectedBusCategory
        );
        setFilteredProducts(filtered);
      }
    } else {
      const filtered = productsItems.filter(
        (product) => product.products_type === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [
    selectedCategory,
    selectedTruckCategory,
    selectedBusCategory,
    productsItems,
  ]);
  const componentMap = {
    1: HF252,
    2: HF231,
  };

  return (
    <>
      {windowWidth <= 990 ? (
        <>
          <Header_m />
          <Swipper_m
            swiperImage={swiperTopMobileSlides.map((slide) => slide.image)}
            paginationTF={false}
            loopTF={true}
          />
        </>
      ) : (
        <div className="container banner cd">
          <div className="banner_box cd_box">
            <div className="banner_box cd_box">
              <Swipper
                swiperImage={swiperTopSlides.map((slide) => slide.image)}
                imageClassName={"cd_banner2"}
              />
            </div>
            <Header
              logo={LogoOther}
              logoClassName={""}
              logoDivClassName={"nav_left nav_left1 fl"}
            />
          </div>
        </div>
      )}

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
                            onClick={() =>
                              handleTruckCategoryClick(subcategory.id)
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
                            onClick={() =>
                              handleBusCategoryClick(subcategory.id)
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
                    {!clickedProductId && (
                      <div className="ct_list">
                        <ul>
                          {filteredProducts.map((products, index) => (
                            <li className="clearfix" key={index}>
                              <div className="col-lg-9">
                                <div className="ct_d1 fl clearfix">
                                  <div className="cp_intro clearfix">
                                    <a
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
                                      className="fl cp_ms"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {clickedProductId && componentMap[clickedProductId] && (
          <React.Fragment key={`component-${clickedProductId}`}>
            {React.createElement(componentMap[clickedProductId])}
          </React.Fragment>
        )}
      </div>
    </>
  );
};

export default Productpage;

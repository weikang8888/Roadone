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

SwiperCore.use([Navigation, Pagination]);

const Productpage = () => {
  const [productsItems, setProductsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
  const [selectedTruckCategory, setSelectedTruckCategory] = useState(""); // State to track selected category
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products

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
  };
  const handleTruckCategoryClick = (category) => {
    setSelectedTruckCategory(category);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    // Filter products based on the selected category
    if (selectedCategory === "") {
      setFilteredProducts(productsItems);
    } else {
      const filtered = productsItems.filter(
        (product) => product.products_type === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, productsItems]);
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

      <div className="container cd_main clearfix">
        <div className="col-lg-2">
          <div className="cd_lt fl">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryClick("truck")}
                  className={` ${selectedCategory === "truck" ? "cd_fl" : ""}`}>
                  Truck Tyres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryClick("light-truck")}
                  className={` ${
                    selectedCategory === "light-truck" ? "cd_fl" : ""
                  }`}>
                  Light Truck Tyres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryClick("bus")}
                  className={`${selectedCategory === "bus" ? "cd_fl" : ""}`}>
                  Bus Tyres
                </a>
              </li>
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
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("long-haul-wearable")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "long-haul-wearable"
                              ? "cpfl2"
                              : ""
                          }`}>
                          Long Haul Wearable Tyres
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("middle-long-distance")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "middle-long-distance"
                              ? "cpfl2"
                              : ""
                          }`}>
                          Middle & Long Distance
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("middle-short-distance")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "middle-short-distance"
                              ? "cpfl2"
                              : ""
                          }`}>
                          Middle & Short Distance
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("quarry-building-site")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "quarry-building-site"
                              ? "cpfl2"
                              : ""
                          }`}>
                          Quarry & Building Sites
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("high-end-off-road")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "high-end-off-road"
                              ? "cpfl2"
                              : ""
                          }`}>
                          High End Off-road Tyres
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("high-end-heavy-loading")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "high-end-heavy-loading"
                              ? "cpfl2"
                              : ""
                          }`}>
                          High End Heavy Loading Tyres
                        </a>
                      </li>
                      <li
                        onClick={() =>
                          handleTruckCategoryClick("high-end-wearable")
                        }>
                        <a
                          className={` ${
                            selectedTruckCategory === "high-end-wearable"
                              ? "cpfl2"
                              : ""
                          }`}>
                          HIGH END WEARABLE TYRE
                        </a>
                      </li>
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
                      <li>
                        <a href="truck-tyres.html">Inter-city Bus</a>
                      </li>
                      <li>
                        <a href="light-truck-series.html">City-City Bus </a>
                      </li>{" "}
                    </ul>
                  )}
                </div>
                <div className="typebox_m">
                  <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    className="swiper-container"
                    id="banner">
                    <SwiperSlide>
                      <a href="">Long Haul Wearable Tyres</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="">Middle & Long Distance</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="">Middle & Short Distance</a>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <a href="">Quarry & Building Sites</a>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <a href="">High End Off-road Tyres</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="">High End Heavy Loading Tyres</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="">HIGH END WEARABLE TYRE</a>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="tabs2">
                  <div className="ct_list">
                    <ul>
                      {filteredProducts.map((products, index) => (
                        <li className="clearfix" key={index}>
                          <div className="col-lg-9">
                            <div className="ct_d1 fl clearfix">
                              <div className="cp_intro clearfix">
                                <a href="HF252.html" title="HF252">
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
                                    title="HF252"
                                  />
                                </div>
                                <div
                                  className="cp_img2"
                                  data-aos="zoom-in-left"
                                  data-aos-easing="ease-out-back"
                                  data-aos-duration="1000">
                                  <a href="HF252.html">
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
                  {/* <div aos="zoom-in-left" id="pages">
                <a className="prev"><<</a>
                <a className="active">1</a>
                <a href="list-21.html">2</a>
                <a href="list-31.html">3</a>
                <a href="list-41.html">4</a>
                <a href="list-51.html">5</a>
                <a href="list-61.html">6</a>
                <a href="list-7.html">7</a>
                <a href="list-21.html" className="next">></a>
                <a href="list-7.html" className="next">>></a>
              </div> */}
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

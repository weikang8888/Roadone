import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./swipperproduct.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwipperProduct = ({ ids }) => {
  const [productsItems, setProductsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get(`http://localhost:8080/api_roadone/products/products?id=${ids}`)
      .then((response) => {
        setProductsItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const groupedProducts = [];
  for (let i = 0; i < productsItems.length; i += 3) {
    groupedProducts.push(productsItems.slice(i, i + 3));
  }
  return (
    <div className="zj">
      <div className="zj_hd">Recommendation</div>
      <div className="zj_box">
        <Swiper loop={true} navigation={true} className="swiper-container">
          {groupedProducts.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <ul className="clearfix">
                {group.map((product, index) => (
                  <li className="clearfix" key={index}>
                    <div className="zj_lt fl">
                      <img
                        src={require(`../../static/assets/picture/${product.products_image}`)}
                        alt=""
                      />
                    </div>
                    <div className="zj_rt fr">
                      <a href="">
                        <div className="zj_rt_d1">
                          <em>TYRE MODEL-</em>
                          <span>{product.products_name}</span>
                        </div>
                      </a>
                      <div className="zj_rt_d2">
                        {product.products_description}
                      </div>
                      <div className="zj_rt_d4">
                        <a href="">
                          View details
                          <span>{">"}</span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperProduct;

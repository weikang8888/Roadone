import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SwipperOptions {
  products: {
    id: number;
    products_image: string;
    products_title: string;
    products_description: string;
    url: string;
  }[];
}

const SwipperProduct = ({ products }: SwipperOptions) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      className="swiper-container">
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ul className="clearfix">
            <li className="clearfix">
              <div className="zj_lt fl">
                <img src={product.products_image} alt={`Product ${product.id}`} />
              </div>
              <div className="zj_rt fr">
                <a href={product.url} title={product.products_title}>
                  <div className="zj_rt_d1">
                    <em>TYRE MODEL-</em>
                    <span>{product.products_title}</span>
                  </div>
                </a>
                <div className="zj_rt_d2">{product.products_description}</div>
                <div className="zj_rt_d4">
                  <a href={product.url}>
                    View details
                    <span>{">"}</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperProduct;

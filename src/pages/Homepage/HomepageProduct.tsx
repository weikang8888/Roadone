import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import ButtonMain from "../../component/Button/ButtonMain";

const HomepageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api_roadone/products/products?ids=82,83,84,85,86,4,69,70"
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <section className="info-box">
        <div className="prices-title wow bounceIn">Hot Products</div>
        <div className="container clearfix">
          <ul className="info-list case-list wow bounceInDown ProductTopHotList">
            {products.map((product, index) => (
              <li key={index}>
                <a href={product.products_url} className="pic">
                  <img
                    src={require(`../../static/picture/${product.products_image}`)}
                    width="300"
                    height="300"
                  />
                </a>
                <div className="h3">
                  <a href={product.products_url}>{product.products_name}</a>
                </div>
                <p>{product.products_description}</p>
                <ButtonMain href={product.products_url} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomepageProduct;

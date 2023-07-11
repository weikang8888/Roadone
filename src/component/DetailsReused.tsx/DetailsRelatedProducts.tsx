import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DetailsRelatedNews = ({ ids }) => {
  const { t } = useTranslation();

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get(`http://localhost:8080/api_roadone/products/products?ids=${ids}`)
      .then((response) => {
        setProductItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [ids]);
  return (
    <>
      <div className="ptit">Related Products</div>
      <ul className="rollPro1">
        {productItems.map((item, index) => (
          <li key={index}>
            <div className="pbox">
              <a href={item.products_url}>
                <img
                  src={require(`../../static/picture/${item.products_image}`)}
                />
              </a>
            </div>
            <p>
              <a href="">{item.products_name}</a>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default DetailsRelatedNews;

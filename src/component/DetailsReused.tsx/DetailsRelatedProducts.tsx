import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsRelatedNews = ({ ids }) => {
  const [productItems, setproductItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get(`http://localhost:8080/api_roadone/products/products?ids=${ids}`)
      .then((response) => {
        setproductItems(response.data);
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

import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsRelatedNews = ({ ids }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get(`http://localhost:8080/api_roadone/news/news?ids=${ids}`)
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [ids]);

  return (
    <>
      <div className="rnews clearfix">
        <h3>Related News</h3>
        <ul>
          {newsItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailsRelatedNews;

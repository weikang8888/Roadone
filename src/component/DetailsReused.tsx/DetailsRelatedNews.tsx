import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DetailsRelatedNews = ({ ids }) => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get(`https://backend.roadone.com.my/news/news.php?ids=${ids}`)
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
        <h3>{t("other.relatedNews")}</h3>
        <ul>
          {newsItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {t(`new.title.${index}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailsRelatedNews;

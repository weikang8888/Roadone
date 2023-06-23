import React, { useEffect, useState } from "react";
import axios from "axios";

import InnerBanner from "../../component/Banner/InnerBanner";
import NewsBanner from "../../static/image/news/news-banner.webp";
import SubMenu from "../../component/SubMenu/SubMenu";
import Bigbox from "../../component/Bigbox/Bigbox";

const TyreTest = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(20);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/news?ids=2,3,9")
      .then((response) => {
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Pagination
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsItems.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(newsItems.length / newsPerPage);

  return (
    <>
      <InnerBanner bannerimage={NewsBanner} />

      <section>
        <div className="container">
          <div className="ejfl">News</div>
          <SubMenu
            previouspage="News"
            previouslink="/news"
            currentpage={"Tyre Test"}
            currentlink={"/news/tyretest"}
          />
          <div className="main">
            <ul className="news_message clearfix">
              <div className="newslist">
                {currentNews.map((item, index) => (
                  <Bigbox
                    key={index}
                    daymonth={item.daymonth}
                    year={item.year}
                    href={item.href}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TyreTest;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import InnerBanner from "../../component/Banner/InnerBanner";
import NewsBanner from "../../static/image/news/news-banner.webp";
import SubMenu from "../../component/SubMenu/SubMenu";
import Bigbox from "../../component/Bigbox/Bigbox";

const Newpage = () => {
  const { t } = useTranslation();

  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(20);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("https://backend.roadone.com.my/news/news.php")
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

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(newsItems.length / newsPerPage);

    return (
      <div className="pages">
        <button
          onClick={() => paginate(1)}
          disabled={isFirstPage}
          className={isFirstPage ? "disabled" : ""}>
          First
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={isFirstPage}
          className={isFirstPage ? "disabled" : ""}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}>
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={isLastPage}
          className={isLastPage ? "disabled" : ""}>
          Next
        </button>
        <button
          onClick={() => paginate(Math.ceil(newsItems.length / newsPerPage))}
          disabled={isLastPage}
          className={isLastPage ? "disabled" : ""}>
          Last
        </button>
        <span className="pageInfo">
          {currentPage}/{totalPages}
        </span>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>News - Tongli Tyre Co.,Ltd</title>
      </Helmet>
      <InnerBanner bannerimage={NewsBanner} />

      <section>
        <div className="container">
          <div className="ejfl">{t("submenu.new")}</div>
          <SubMenu currentpage={t("submenu.new")} currentlink={"/news"} />
          <div className="main">
            <ul className="news_message clearfix">
              <div className="newslist">
                {currentNews.map((item, index) => (
                  <Bigbox
                    key={index}
                    daymonth={item.daymonth}
                    year={item.year}
                    href={item.href}
                    title={t(`new.title.${indexOfFirstNews + index}`)}
                    description={t(
                      `new.description.${indexOfFirstNews + index}`
                    )}
                  />
                ))}
              </div>
            </ul>
            {renderPageNumbers()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Newpage;

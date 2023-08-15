import React from "react";
import UpImage from "../../static/assets/picture/up.jpg";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };

  return (
    <div className="news_up">
      <div className="up_n" onClick={scrollToTop}>
        <img src={UpImage} alt="Scroll to Top" />
        <span>TOP</span>
      </div>
    </div>
  );
};

export default TopButton;

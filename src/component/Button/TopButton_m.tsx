import React from "react";
import UpImage from "../../static/assets/picture/up.jpg";
import "./topbutton_m.css";

const TopButton_m = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  return (
    <>
      <div className="top top1" onClick={scrollToTop}>
        <img src={UpImage} />
      </div>
    </>
  );
};

export default TopButton_m;

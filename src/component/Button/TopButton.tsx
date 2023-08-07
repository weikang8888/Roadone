import React from "react";
import UpImage from "../../static/assets/picture/up.jpg";

const TopButton = () => {
  return (
    <>
      {" "}
      <div className="news_up">
        <div className="up_n">
          <img src={UpImage} />
          <span>TOP</span>
        </div>
      </div>
    </>
  );
};

export default TopButton;

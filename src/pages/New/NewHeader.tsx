import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import NewBanner from "../../static/assets/m/xw_banner.png";

const NewHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopMobileSlides = [{ image: NewBanner }];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      
      {windowWidth <= 990 ? (
        <>
          <Header_m />
          <Swipper_m
            swiperImage={swiperTopMobileSlides.map((slide) => slide.image)}
            paginationTF={false}
            loopTF={false}
          />
        </>
      ) : (
        <div className="container banner cd news">
          <div className="banner_box news_box">
            <Header
              logo={LogoOther}
              logoClassName={""}
              logoDivClassName={"nav_left nav_left1 fl"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NewHeader;

import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import Swipper from "../../component/Swiper/Swipper";
import ProductImage1 from "../../static/assets/image/inside_pro_1.jpg";
import ProductImage2 from "../../static/assets/image/inside_pro_2.jpg";
import ProductImage3 from "../../static/assets/image/inside_pro_3.jpg";
import ProductMobileImage1 from "../../static/assets/m/inside_pro_1.jpg";
import ProductMobileImage2 from "../../static/assets/m/inside_pro_2.jpg";
import ProductMobileImage3 from "../../static/assets/m/inside_pro_3.jpg";

const NewHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopSlides = [
    { image: ProductImage1 },
    { image: ProductImage2 },
    { image: ProductImage3 },
  ];
  const swiperTopMobileSlides = [
    { image: ProductMobileImage1 },
    { image: ProductMobileImage2 },
    { image: ProductMobileImage3 },
  ];

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
            loopTF={true}
          />
        </>
      ) : (
        <div className="container banner cd">
          <div className="banner_box cd_box">
            <div className="banner_box cd_box">
              <Swipper
                swiperImage={swiperTopSlides.map((slide) => slide.image)}
                imageClassName={"cd_banner2"}
              />
            </div>
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

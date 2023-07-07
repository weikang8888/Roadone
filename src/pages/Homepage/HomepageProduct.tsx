import React from "react";

import HotProductImage1 from "../../static/picture/hotproductImage1.webp";
import HotProductImage2 from "../../static/picture/hotproductImage2.webp";
import HotProductImage3 from "../../static/picture/hotproductImage3.webp";
import HotProductImage4 from "../../static/picture/hotproductImage4.webp";
import HotProductImage5 from "../../static/picture/hotproductImage5.webp";
import HotProductImage6 from "../../static/picture/hotproductImage6.webp";
import HotProductImage7 from "../../static/picture/hotproductImage7.webp";
import HotProductImage8 from "../../static/picture/hotproductImage8.webp";
import ButtonMain from "../../component/Button/ButtonMain";

const hotProducts = [
  {
    image: HotProductImage1,
    alt: "16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE",
    title: "16.00R25 ALL STEEL WIDE BODY DUMP TRUCK TIRE",
    description:
      "ROADONE 14.00R25 ， 16.00R25 RADIAL TIRES FOR WIDE BODY DUMP TRUCK SUIT FOR SOFT MINE AND HARD...",
    link: "/products/radial-otr-tires/16-00r25",
  },
  {
    image: HotProductImage2,
    alt: "14.00R25 OTR TIRES",
    title: "14.00R25 OTR TIRES",
    description:
      "14.00R25 RADIAL TIRES FOR OFF-THE-ROAD TRUCK SUIT FOR MANY KINDS OF MINES SUCH AS GOLD MINE...",
    link: "/products/radial-otr-tires/14-00r25",
  },
  {
    image: HotProductImage3,
    alt: "11R22.5 295/80R22.5 Mid-long Distance Truck Tire TBR",
    title: "11R22.5 295/80R22.5 Mid-long Distance Truck Tire TBR",
    description:
      "Designed for mid distance, mid speed in national roads and provincial roads, suitable for all...",
    link: "/products/roadone-tyre-demonstration/11r22-5-295-80r22-5",
  },
  {
    image: HotProductImage4,
    alt: "CHINA HIGH QUALITY QA19 OFF ROAD TRUCK TYRE FACTORY",
    title: "CHINA HIGH QUALITY QA19 OFF ROAD TRUCK TYRE FACTORY",
    description:
      "Specially designed for short distance, low speed driving in soft mine, low slope, extremely bad...",
    link: "/products/roadone-tyre-demonstration/china-hight-quality-qa19",
  },
  {
    image: HotProductImage5,
    alt: "China Factory 11.00R20、12.00R20 QA99 PURE MINE HIGH QUALITY TYRE",
    title: "China Factory 11.00R20、12.00R20 QA99 PURE MINE HIGH QUALI...",
    description:
      "Designed for short-distance, low-speed driving in soft mines, industrial and mining mixed-road...",
    link: "/products/roadone-tyre-demonstration/china-factory-11-00r20-12-00r20-qa99",
  },
  {
    image: HotProductImage6,
    alt: "RF02 Light Truck Tire",
    title: "RF02 Light Truck Tire",
    description:
      "Suitable for all positions Designed for mid-long distance, mid-high speed in national roads,...",
    link: "/products/light-truck-tire/rf02-light",
  },
  {
    image: HotProductImage7,
    alt: "RA85 Light Truck Tire",
    title: "RA85 Light Truck Tire",
    description:
      "Suitable for all positions Designed for mid-long distance, mid-high speed in highway, national...",
    link: "/products/light-truck-tire/ra85-light",
  },
  {
    image: HotProductImage8,
    alt: "GA06",
    title: "GA06",
    description:
      "Suitable for all positions Designed for mid-short distance, mid-low speed in national...",
    link: "/products/light-truck-tire/ga06-light",
  },
];

const HomepageProduct = () => {
  return (
    <>
      <section className="info-box">
        <div className="prices-title wow bounceIn">Hot Products</div>
        <div className="container clearfix">
          <ul className="info-list case-list wow bounceInDown ProductTopHotList">
            {hotProducts.map((product, index) => (
              <li key={index}>
                <a href={product.link} className="pic">
                  <img
                    src={product.image}
                    width="300"
                    height="300"
                    alt={product.alt}
                  />
                </a>
                <div className="h3">
                  <a href={product.link}>{product.title}</a>
                </div>
                <p>{product.description}</p>
                <ButtonMain href={product.link} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomepageProduct;

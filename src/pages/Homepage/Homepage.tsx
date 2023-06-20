import React from "react";
import Swipper from "../../component/Swipper/Swipper";
import ButtonMain from "../../component/Button/ButtonMain";
import HomepageProduct from "./HomepageProduct";

const Homepage = () => {
  return (
    <>
      <Swipper />
      <div className="video clearfix">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KH68Uma-QKE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>

      <section className="clearfix abouts-index">
        <div className="abouts-imgs wow bounceInLeft">
          <div className="abouts-fixed wow pulse" data-wow-delay=".6s"></div>
        </div>
        <div className="abouts-text wow bounceInRight">
          <h2 className="h2 animation-undefined">TONGLI TYRE CO.,LTD.</h2>
          <p>
            ROADONE registered in 2003 by Hixih group, and grandly launched once
            again after more than 10 years successful cooperation between Hixih
            group and world top-level group. We can supply you international
            high-end quality and suitable for all kinds of road conditions and
            meet different market demands.
          </p>
          <ButtonMain />
        </div>
      </section>

      <section className="clearfix team-index">
        <div className="abouts-text  wow bounceInLeft">
          <h2 className="h2 animation-undefined">Design team</h2>
          <p>
            Hixih Rubber Industry Group, located in Yanzhou district, Jining
            city, Shandong Province, which is one of the most flourishing
            economic areas in China. Which founded in 1989, is an international,
            diversified and innovative enterprise group, occupying an area of
            200 thousand square meters. The total number of employees is over
            10,000.
          </p>
          <ButtonMain />
        </div>
        <div className="abouts-imgs wow bounceInRight">
          <div className="abouts-fixed wow pulse" data-wow-delay=".6s"></div>
        </div>
      </section>

      <HomepageProduct />

      <div className="services wow bounceInLeft">
        <div className="container">
          <h3>OUR ADVANTAGE</h3>
          <div className="col-md-6 services-grids">
            <ul className="srevicesgrid_info">
              <li className="tick">
                Tongli tire has 15 years of experience in joint venture with a
                world className brand tyre, and the production standard is based
                on world top level group, which reaches the joint venture level.
                <br />
              </li>
              <li className="tick">
                Tongli applies the network control technology to guarantee the
                good quality and performance of the products and ensure the
                tires produced can meet DOT and ECE standards and internal
                control specifications
                <br />
              </li>
            </ul>
          </div>
          <div className="col-md-6 services-grids">
            <ul className="srevicesgrid_info">
              <li className="tick">
                All the key equipment is from the famous world-className tire
                equipment suppliers like Netherlands VMI , German WP, United
                States RJS, all customized according to the special requirements
                of top tire producer.
              </li>
              <li className="tick">
                Tongli tire adopted the special HBW bead wire、3SB new sandwich
                belts、DTL compound and FRC high penetration steel cord design,
                ensured the tire has high mileage、retreadability、heavy load
                capacity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services-bottom wow bounceInRight">
        <p>
          Our company have more than
          <span>200.000 customers</span>
          around the world!
        </p>
      </div>
    </>
  );
};

export default Homepage;

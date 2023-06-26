import React, { useEffect } from "react";
import HM1 from "../../static/image/main/hm1.png";
import HM2 from "../../static/image/main/hm2.png";
import HM3 from "../../static/image/main/hm3.png";
import HM4 from "../../static/image/main/hm4.png";
import HM5 from "../../static/image/main/hm5.png";
import FTTYRE1 from "../../static/image/main/fttyre1.webp";
import FTTYRE2 from "../../static/image/main/fttyre2.webp";

const Footer = () => {
  const contactInfoStyles = {
    fontFamily: "arial, helvetica, sans-serif",
    fontSize: "16px",
  };

  return (
    <>
      <footer>
        <section className="container clearfix">
          <div className="met-footer foot-01 wow bounceInLeft">
            <h3>TRY BEST! TO BE NO.1</h3>
            <p>
              We can supply you international high end quality and suitable for
              all kinds of road conditions and meet different market demands.
            </p>
            <div className="social-box">
              <a href="#">
                <img src={HM1} alt="HM1" />
              </a>
              <a href="#">
                <img src={HM2} alt="HM2" />
              </a>
              <a href="#">
                <img src={HM3} alt="HM3" />
              </a>
              <a href="#">
                <img src={HM4} alt="HM4" />
              </a>
              <a href="#">
                <img src={HM5} alt="HM5" />
              </a>
            </div>
          </div>
          <div className="met-footer foot-02 wow bounceInUp">
            <div className="h3">Contact Us</div>
            <p></p>
            <p>
              <span style={contactInfoStyles}>White Bai</span>
              <br />
            </p>
            <p>
              <span style={contactInfoStyles}>
                TEL: +<span style={contactInfoStyles}>86-537-5174483</span>
                <br />
                MOBILE/WHATSAPP/WECHAT:
              </span>
            </p>
            <p>
              <span style={contactInfoStyles}>
                <span style={contactInfoStyles}>
                  <a
                    href="https://api.whatsapp.com/send?phone=8615764288507&text=Hello"
                    id="A_8">
                    +
                  </a>
                </span>
                <span style={contactInfoStyles}>8615764288507</span>
              </span>
            </p>
            <p>
              <span style={contactInfoStyles}>
                <br />
              </span>
            </p>
            <p>
              <span style={contactInfoStyles}>Tongli Tyre Co,. Ltd</span>
            </p>
            <p>
              <span style={contactInfoStyles}>
                AD
                <span style={contactInfoStyles}>
                  D: Hixih Inustrial Park, Yanzhou, Shandong Province, China
                </span>
              </span>
            </p>
          </div>
          <div className="met-footer foot-03 wow bounceInRight">
            <div className="h3">Categories</div>
            <dl>
              <dt>
                <a href="truck-tire1.html">
                  <img src={FTTYRE1} width="50" height="50" alt="Truck Tire" />
                </a>
              </dt>
              <dd>
                <a href="truck-tire1.html">Truck Tire</a>
                <a href="truck-tire1.html" rel="nofollow">
                  Read More
                </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="bus-tire1.html">
                  <img src={FTTYRE2} width="50" height="50" alt="Bus Tire" />
                </a>
              </dt>
              <dd>
                <a href="bus-tire1.html">Bus Tire</a>
                <a href="bus-tire1.html" rel="nofollow">
                  Read More
                </a>
              </dd>
            </dl>
          </div>
        </section>
        <div className="copy wow bounceInUp">
          <div className="container clearfix">
            <ul className="links clearfix">
              <li id="li_Menu101_about-us">
                <a href="about-us1.html" className="inmenu">
                  Tongli Tyre Factory
                </a>
              </li>
              <li id="li_Menu101_products">
                <a href="products1.html" className="inmenu">
                  Product
                </a>
              </li>
              <li id="li_Menu101_newslist-1">
                <a href="newslist-11.html" className="inmenu">
                  News
                </a>
              </li>
              <li id="li_Menu101_Info">
                <a href="info1.html" className="inmenu">
                  Service
                </a>
              </li>
              <li id="li_Menu101_contact-us">
                <a href="contact-us1.html" className="inmenu">
                  Contact Us
                </a>
              </li>
              <li id="li_Menu101_download">
                <a href="download1.html" className="inmenu">
                  Download
                </a>
              </li>
              <li>
                <a href="index2.html">Mobile</a>
              </li>

              <li id="li_Menu101_sitemap">
                <a href="/sitemap.xml" className="inmenu">
                  Sitemap
                </a>
              </li>
            </ul>
            <p>Copyright © Tongli Tyre Co.,Ltd All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

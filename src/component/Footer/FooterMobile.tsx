import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./footermobile.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Qrcode from "../../static/assets/m/erweima.png";
import { NavLink, Link } from "react-router-dom";

const FooterMobile = () => {
  const { t } = useTranslation();

  const [serviceOpen, setServiceOpen] = useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const toggleService = () => {
    setServiceOpen(!serviceOpen);
  };

  const toggleRecruitment = () => {
    setRecruitmentOpen(!recruitmentOpen);
  };

  const toggleAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };
  return (
    <>
      <div className="foot">
        <div className="sfq">
          <ul>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <div className="clearfix">
                <NavLink to="/products" className="fl">
                  Product
                </NavLink>
              </div>
              {/* <div className="sfq_a" style={{ display: "none" }}>
                <ul>
                  <li className="kc">
                    <a to="list-3.html">Truck Tyres</a>
                  </li>

                  <li>
                    <a to="list-21.html">Long Haul Wearable Tyres</a>
                  </li>
                  <li>
                    <a to="list-23.html">Middle & Long Distance</a>
                  </li>
                  <li>
                    <a to="list-24.html">Middle & Short Distance</a>
                  </li>
                  <li>
                    <a to="list-25.html">Quarry & Building Sites</a>
                  </li>
                  <li>
                    <a to="list-34.html">High End Off-road Tyres</a>
                  </li>
                  <li>
                    <a to="list-35.html">High End Heavy Loading Tyres</a>
                  </li>
                  <li>
                    <a to="list-36.html">HIGH END WEARABLE TYRE</a>
                  </li>
                  <li className="kc">
                    <a to="list-28.html">Light Truck Tyres</a>
                  </li>

                  <li>
                    <a to="list-3.html">Truck Tyres</a>
                  </li>
                  <li>
                    <a to="list-28.html">Light Truck Tyres</a>
                  </li>
                  <li>
                    <a to="list-4.html">Bus Tyres</a>
                  </li>
                  <li className="kc">
                    <a to="list-4.html">Bus Tyres</a>
                  </li>

                  <li>
                    <a to="list-26.html">Inter-city Bus</a>
                  </li>
                  <li>
                    <a to="list-27.html">City-City Bus</a>
                  </li>
                </ul>
              </div> */}
            </li>
            <li>
              <div className="clearfix" onClick={toggleService}>
                <span className="fl">Service</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                
                {serviceOpen && (
                  <ul>
                    <li>
                      <Link to="/service/tyre-class">Tyre className</Link>
                    </li>
                    <li>
                      <Link to="/services/guestbook">Guestbook</Link>
                    </li>
                    <li>
                      <Link to="/services/download">Download</Link>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
            <li>
              <div className="clearfix" onClick={toggleRecruitment}>
                <span className="fl">Recruitment</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                {recruitmentOpen && (
                  <ul>
                    <li>
                      <Link to="/recruitment/social">Social Recruitment</Link>
                    </li>
                    <li>
                      <Link to="/recruitment/campus">Campus Recruitment</Link>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
            <li>
              <div className="clearfix" onClick={toggleAboutUs}>
                <span className="fl">About Us</span>
                <i className="fr jia">+</i>
              </div>
              <SlideDown className="sfq_a">
                {aboutUsOpen && (
                  <ul>
                    <li>
                      <Link to="/about/roadone">About Roadone</Link>
                    </li>
                    <li>
                      <Link to="/about/social-responsibility">CSR</Link>
                    </li>
                    <li>
                      <Link to="/about/contact">Contact Us</Link>
                    </li>
                  </ul>
                )}
              </SlideDown>
            </li>
          </ul>
        </div>
        <div className="ewm">
          <img src={Qrcode} />
        </div>
        <div className="foot_d1">
          <NavLink to="">Legal Declaration</NavLink>
          <NavLink to="">Contact Us</NavLink>
          <NavLink to="">Sitemap</NavLink>
        </div>
      </div>
      <div className="foot_d2">
        Copyright &copy; {t("about.companyName")} All Rights Reserved.
      </div>
    </>
  );
};

export default FooterMobile;

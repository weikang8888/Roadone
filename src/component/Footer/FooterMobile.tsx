import React from "react";
import "./footermobile.css";

import Qrcode from "../../static/assets/m/erweima.png";

const FooterMobile = () => {
  return (
    <>
      <div className="foot">
        <div className="sfq">
          <ul>
            <li>
              <a href="list-1.html">News</a>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">Product</span>
                <i className="fr jia">+</i>
              </div>
              <div className="sfq_a" style={{ display: "none" }}>
                <ul>
                  <li className="kc">
                    <a href="list-3.html">Truck Tyres</a>
                  </li>

                  <li>
                    <a href="list-21.html">Long Haul Wearable Tyres</a>
                  </li>
                  <li>
                    <a href="list-23.html">Middle & Long Distance</a>
                  </li>
                  <li>
                    <a href="list-24.html">Middle & Short Distance</a>
                  </li>
                  <li>
                    <a href="list-25.html">Quarry & Building Sites</a>
                  </li>
                  <li>
                    <a href="list-34.html">High End Off-road Tyres</a>
                  </li>
                  <li>
                    <a href="list-35.html">High End Heavy Loading Tyres</a>
                  </li>
                  <li>
                    <a href="list-36.html">HIGH END WEARABLE TYRE</a>
                  </li>
                  <li className="kc">
                    <a href="list-28.html">Light Truck Tyres</a>
                  </li>

                  <li>
                    <a href="list-3.html">Truck Tyres</a>
                  </li>
                  <li>
                    <a href="list-28.html">Light Truck Tyres</a>
                  </li>
                  <li>
                    <a href="list-4.html">Bus Tyres</a>
                  </li>
                  <li className="kc">
                    <a href="list-4.html">Bus Tyres</a>
                  </li>

                  <li>
                    <a href="list-26.html">Inter-city Bus</a>
                  </li>
                  <li>
                    <a href="list-27.html">City-City Bus</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="list-6.html">Marketing</a>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">Service</span>
                <i className="fr jia">+</i>
              </div>
              <div className="sfq_a" style={{ display: "none" }}>
                <ul>
                  <li>
                    <a href="list-9.html">Tyre className</a>
                  </li>
                  <li>
                    <a href="list-10.html">Guestbook</a>
                  </li>
                  <li>
                    <a href="list-11.html">Download</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">Recruitment</span>
                <i className="fr jia">+</i>
              </div>
              <div className="sfq_a" style={{ display: "none" }}>
                <ul>
                  <li>
                    <a href="list-15.html">Social Recruitment</a>
                  </li>
                  <li>
                    <a href="list-16.html">Campus Recruitment</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">About Us</span>
                <i className="fr jia">+</i>
              </div>
              <div className="sfq_a" style={{ display: "none" }}>
                <ul>
                  <li>
                    <a href="list-12.html">About Roadone</a>
                  </li>
                  <li>
                    <a href="list-13.html">CSR</a>
                  </li>
                  <li>
                    <a href="list-29.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="ewm">
          <img src={Qrcode} />
        </div>
        <div className="foot_d1">
          <a href="">Legal Declaration</a>
          <a href="">Contact Us</a>
          <a href="">Sitemap</a>
        </div>
      </div>
      <div className="foot_d2">
        Copyright &copy; Tongli Tyre Co., Ltd. All Rights Reserved.
      </div>
    </>
  );
};

export default FooterMobile;

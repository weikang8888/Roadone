import React from "react";

import LogoMobile from "../../static/assets/m/logo.png";
import MenuMobile from "../../static/assets/m/menu.png";
import "./header_m.css";

const Header_m = () => {
  return (
    <>
      <div className="header clearfix">
        <div className="header_box">
          <div className="xiala fl">
            <img src={MenuMobile} />
          </div>
          <div className="logo">
            <a href="">
              <img src={LogoMobile} title="Roadone" />
            </a>
          </div>
        </div>
        <div className="xiala1" style={{ display: "none" }}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="list-1.html">News</a>
            </li>
            <li>
              <a href="list-2.html">Product</a>
            </li>
            <li>
              <a href="list-6.html">Marketing</a>
            </li>
            <li>
              <a href="list-7.html">Service</a>
            </li>
            <li>
              <a href="list-14.html">Recruitment</a>
            </li>
            <li>
              <a href="list-8.html">About Us</a>
            </li>
          </ul>
          <div className="xiala1_f">
            <a href="http://www.tltyre.com/m/index.php">中文</a>
            <a href="">English</a>
            <a href="http://kr.tltyre.com/m">한국어</a>
            <a href="http://www.hixih.com.cn" target="_blank">
              HIXIH Group
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_m;

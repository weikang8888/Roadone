import React from "react";
import Logo from "../../static/assets/main/logo.png";

const Header = () => {
  return (
    <>
      <div className="nav clearfix">
        <div className="nav_left fl">
          <a href="">
            <img src={Logo} className="in_logo" title="Roadone" />
          </a>
        </div>
        <div className="nav_box fr">
          <div className="nav_d1 clearfix">
            <p className="nav_d1_box fr">
              <a href="http://www.tltyre.com/index.php">中文</a>
              <a href="">English</a>
              <a href="http://kr.tltyre.com">한국어</a>
              <a href="http://www.hixih.com.cn" target="_blank">
                HIXIH Group
              </a>
            </p>
          </div>
          <div className="nav_main in_nav_main">
            <ul className="clearfix">
              <li>
                <a href="" className="a1 current" id="nav0">
                  Home
                </a>
              </li>
              <li>
                <a href="news.html" className="a1" id="nav1">
                  News
                </a>
                <div className="lb" style={{ display: "none" }}></div>
              </li>
              <li>
                <a href="product.html" className="a1" id="nav2">
                  Product
                </a>
                <div className="lb" style={{ display: "none" }}>
                  <a href="truck-tyres.html">Truck Tyres</a>
                  <a href="light-truck-series.html">Light Truck Tyres</a>
                  <a href="bus-tyres.html">Bus Tyres</a>
                </div>
              </li>
              <li>
                <a href="marketing.html" className="a1" id="nav3">
                  Marketing
                </a>
                <div className="lb" style={{ display: "none" }}></div>
              </li>
              <li>
                <a href="service.html" className="a1" id="nav4">
                  Service
                </a>
                <div className="lb" style={{ display: "none" }}>
                  <a href="tyre-className.html">Tyre className</a>
                  <a href="guestbook.html">Guestbook</a>
                  <a href="download.html">Download</a>
                </div>
              </li>
              <li>
                <a href="recruit.html" className="a1" id="nav5">
                  Recruitment
                </a>
                <div className="lb" style={{ display: "none" }}>
                  <a href="social.html">Social Recruitment</a>
                  <a href="Campus.html">Campus Recruitment</a>
                </div>
              </li>
              <li>
                <a href="about.html" className="a1" id="nav6">
                  About Us
                </a>
                <div className="lb" style={{ display: "none" }}>
                  <a href="roadone.html">About Roadone</a>
                  <a href="social-responsibility.html">CSR</a>
                  <a href="contact.html">Contact Us</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

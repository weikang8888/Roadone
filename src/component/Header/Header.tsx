import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderOption {
  logo: string;
  logoDivClassName: string;
  logoClassName: string;
}

const Header = ({ logo, logoDivClassName, logoClassName }: HeaderOption) => {
  return (
    <>
      <div className="nav clearfix">
        <div className={logoDivClassName}>
          <NavLink to="">
            <img src={logo} className={logoClassName} title="Roadone" />
          </NavLink>
        </div>
        <div className="nav_box fr">
          <div className="nav_d1 clearfix">
            <p className="nav_d1_box fr">
              <NavLink to="">中文</NavLink>
              <NavLink to="">English</NavLink>
              <NavLink to="">한국어</NavLink>
              <NavLink to="" target="_blank">
                HIXIH Group
              </NavLink>
            </p>
          </div>
          <div className="nav_main in_nav_main">
            <ul className="clearfix">
              <li>
                <NavLink to="/" className="a1 current" id="nav0">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="a1" id="nav1">
                  News
                </NavLink>
                <div className="lb" style={{ display: "none" }}></div>
              </li>
              <li>
                <NavLink to="product.html" className="a1" id="nav2">
                  Product
                </NavLink>
                <div className="lb" style={{ display: "none" }}>
                  <NavLink to="truck-tyres.html">Truck Tyres</NavLink>
                  <NavLink to="light-truck-series.html">
                    Light Truck Tyres
                  </NavLink>
                  <NavLink to="bus-tyres.html">Bus Tyres</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="marketing.html" className="a1" id="nav3">
                  Marketing
                </NavLink>
                <div className="lb" style={{ display: "none" }}></div>
              </li>
              <li>
                <NavLink to="service.html" className="a1" id="nav4">
                  Service
                </NavLink>
                <div className="lb" style={{ display: "none" }}>
                  <NavLink to="tyre-className.html">Tyre className</NavLink>
                  <NavLink to="guestbook.html">Guestbook</NavLink>
                  <NavLink to="download.html">Download</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="recruit.html" className="a1" id="nav5">
                  Recruitment
                </NavLink>
                <div className="lb" style={{ display: "none" }}>
                  <NavLink to="social.html">Social Recruitment</NavLink>
                  <NavLink to="Campus.html">Campus Recruitment</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="about.html" className="a1" id="nav6">
                  About Us
                </NavLink>
                <div className="lb" style={{ display: "none" }}>
                  <NavLink to="roadone.html">About Roadone</NavLink>
                  <NavLink to="social-responsibility.html">CSR</NavLink>
                  <NavLink to="contact.html">Contact Us</NavLink>
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

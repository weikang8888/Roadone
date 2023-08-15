import React from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderOption {
  logo: string;
  logoDivClassName: string;
  logoClassName: string;
}

const Header = ({ logo, logoDivClassName, logoClassName }: HeaderOption) => {
  return (
    <>
      <div className="nav clearfixzz container p-0">
        <div className="d-flex justify-content-between">
          <div className="ps-5">
            <div className={logoDivClassName}>
              <NavLink to="">
                <img src={logo} className={logoClassName} title="Roadone" />
              </NavLink>
            </div>
          </div>
          <div className="nav_box fr">
            <div className="nav_d1 clearfix">
              <p className="nav_d1_box fr">
                <NavLink to="">中文</NavLink>
                <NavLink to="">English</NavLink>
                <NavLink to="http://www.hixih.com.cn/" target="_blank">
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
                </li>
                <li>
                  <NavLink to="/products" className="a1" id="nav2">
                    Product
                  </NavLink>
                  {/* <div className="lb product-submenu">
                    <Link to="/products#truck-tyres">Truck Tyres</Link>
                    <Link to="/products#light-truck-tyres">
                      Light Truck Tyres
                    </Link>
                    <Link to="/products#bus-tyres">Bus Tyres</Link>
                  </div> */}
                </li>
                <li>
                  <NavLink to="/services/tyre-class" className="a1" id="nav4">
                    Service
                  </NavLink>
                  <div className="lb service-submenu">
                    <Link to="/services/tyre-class">Tyre Class</Link>
                    <Link to="/services/guestbook">Guestbook</Link>
                    <Link to="/services/download">Download</Link>
                  </div>
                </li>
                <li>
                  <NavLink to="/recruitment" className="a1" id="nav5">
                    Recruitment
                  </NavLink>
                  <div className="lb recruitment-submenu">
                    <Link to="/recruitment/social">Social Recruitment</Link>
                    <Link to="/recruitment/campus">Campus Recruitment</Link>
                  </div>
                </li>
                <li>
                  <NavLink to="/about/roadone" className="a1" id="nav6">
                    About Us
                  </NavLink>
                  <div className="lb aboutus-submenu">
                    <Link to="/about/roadone">About Roadone</Link>
                    <Link to="/about/social-responsibility">CSR</Link>
                    <Link to="/about/contact">Contact Us</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./header.css";
import Logo from "../../static/image/main/logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container clearfix top">
          <div className="pull-left logo">
            <Link to="/">
              <img src={Logo} alt="Tongli Tyre Co.,Ltd" />
            </Link>
          </div>
          <div id="nav-menu">
            <div id="nav">
              <ul className="menu nav_en site_363820">
                <li id="liHome">
                  <NavLink to="/" className="inmenu">
                    Home
                  </NavLink>
                </li>
                <li id="liproducts">
                  <NavLink to="/products" className="inmenu">
                    Product
                  </NavLink>
                  <ul className="submenu nav0">
                    <li className="side_nav1" id="HeadProCat1">
                      <Link to="">Truck Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat2">
                      <Link to="">Bus Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat3">
                      <Link to="">Light Truck Tire</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat4">
                      <Link to="">RADIAL OTR TIRES</Link>
                    </li>
                    <li className="side_nav1" id="HeadProCat5">
                      <Link to="">ROADONE TYRE DEMONSTRATION</Link>
                    </li>
                  </ul>
                </li>
                <li id="liabout-us">
                  <NavLink to="/about" className="inmenu">
                    Tongli Tyre Factory
                  </NavLink>
                </li>
                <li id="linewslist-1">
                  <NavLink to="/news" className="inmenu">
                    News
                  </NavLink>
                  <ul className="submenu">
                    <li id="HeadNewsCat1">
                      <Link to="/news/newproducts" title="New products">
                        New products
                      </Link>
                    </li>
                    <li id="HeadNewsCat2">
                      <Link to="/news/tradefair" title="Trade Fair">
                        Trade Fair
                      </Link>
                    </li>
                    <li id="HeadNewsCat3">
                      <Link to="/news/tyretest" title="TYRE TEST">
                        TYRE TEST
                      </Link>
                    </li>
                    <li id="HeadNewsCat4">
                      <Link to="/news/companyupdate" title="Company update">
                        Company update
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="liInfo">
                  <NavLink to="/services" className="inmenu">
                    Service
                  </NavLink>
                  <ul className="submenu">
                    <li id="HeadIndustryCat1">
                      <Link to="/services/companynews" title="Company News">
                        Company News
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="licontact-us">
                  <NavLink to="/contact" className="inmenu">
                    Contact Us
                  </NavLink>
                </li>
                <li id="lidownload">
                  <NavLink to="/download" className="inmenu">
                    Download
                  </NavLink>
                </li>

                <div className="clr"></div>
              </ul>
              <span className="fl">Navigation</span>
              <span className="fr nbtn">Menu</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

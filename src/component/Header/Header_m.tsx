import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import LogoMobile from "../../static/assets/m/logo.png";
import MenuMobile from "../../static/assets/m/menu.png";
import CloseMenuMobile from "../../static/assets/m/menu_on.png";
import "./header_m.css";

const Header_m = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClose, setMenuClose] = useState("closed");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  };

  return (
    <>
      <div className="header clearfix">
        <div className="header_box">
          <div
            className="xiala fl"
            onClick={() => {
              setMenuOpen(!menuOpen);
              toggleMenu();
              setMenuClose(menuClose === "closed" ? "open" : "closed");
            }}>
            <img
              src={menuClose === "closed" ? MenuMobile : CloseMenuMobile}
              alt="Menu"
            />
          </div>
          <div className="logo">
            <NavLink to="/">
              <img src={LogoMobile} title="Roadone" />
            </NavLink>
          </div>
        </div>
        <SlideDown className="xiala1" closed={!menuOpen}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/products">Product</NavLink>
            </li>
            <li>
              <NavLink to="/services">Service</NavLink>
            </li>
            <li>
              <NavLink to="/recruitment">Recruitment</NavLink>
            </li>
            <li>
              <NavLink to="/about/roadone">About Us</NavLink>
            </li>
          </ul>
          <div className="xiala1_f">
            <NavLink to="">中文</NavLink>
            <NavLink to="">English</NavLink>
            <NavLink to="" target="_blank">
              HIXIH Group
            </NavLink>
          </div>
        </SlideDown>
      </div>
    </>
  );
};

export default Header_m;

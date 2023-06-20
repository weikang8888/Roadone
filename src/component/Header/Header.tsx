import React from "react";

import Logo from "../../static/image/main/logo.png";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container clearfix top">
          <div className="pull-left logo">
            <a href="">
              <img src={Logo} alt="Tongli Tyre Co.,Ltd" />
            </a>
          </div>
          <div id="nav-menu">
            <div id="nav">
              <ul className="menu nav_en site_363820">
                <li id="liHome">
                  <a href="" className="inmenu_1">
                    Home
                  </a>
                </li>
                <li id="liproducts">
                  <a href="products1.html" className="inmenu">
                    Product
                  </a>
                  <ul className="submenu nav0">
                    <li className="side_nav1" id="HeadProCat1">
                      <a href="truck-tire1.html">Truck Tire</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat2">
                      <a href="bus-tire1.html">Bus Tire</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat3">
                      <a href="light-truck-tire1.html">Light Truck Tire</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat4">
                      <a href="radial-otr-tires1.html">RADIAL OTR TIRES</a>
                    </li>
                    <li className="side_nav1" id="HeadProCat5">
                      <a href="roadone-tyre-demonstration1.html">
                        ROADONE TYRE DEMONSTRATION
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="liabout-us">
                  <a href="about-us1.html" className="inmenu">
                    Tongli Tyre Factory
                  </a>
                </li>
                <li id="linewslist-1">
                  <a href="newslist-11.html" className="inmenu">
                    News
                  </a>
                  <ul className="submenu">
                    <li id="HeadNewsCat1">
                      <a href="newslist-455862-11.html" title="New products">
                        New products
                      </a>
                    </li>
                    <li id="HeadNewsCat2">
                      <a href="newslist-466167-11.html" title="Trade Fair">
                        Trade Fair
                      </a>
                    </li>
                    <li id="HeadNewsCat3">
                      <a href="newslist-470000-11.html" title="TYRE TEST">
                        TYRE TEST
                      </a>
                    </li>
                    <li id="HeadNewsCat4">
                      <a href="newslist-506479-11.html" title="Company update">
                        Company update
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="liInfo">
                  <a href="info1.html" className="inmenu">
                    Service
                  </a>
                  <ul className="submenu">
                    <li id="HeadIndustryCat1">
                      <a href="3448391.html" title="Company News">
                        Company News
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="licontact-us">
                  <a href="contact-us1.html" className="inmenu">
                    Contact Us
                  </a>
                </li>
                <li id="lidownload">
                  <a href="download1.html" className="inmenu">
                    Download
                  </a>
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

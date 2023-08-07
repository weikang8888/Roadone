import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";

import ServiceTyreClass from "./ServiceTyreClass";

const Servicepage = () => {
  return (
    <>
      <div className="banner cd fuwu">
        <div className="banner_box cd_banner2">
          <Header
            logo={LogoOther}
            logoClassName={""}
            logoDivClassName={"nav_left nav_left1 fl"}
          />
        </div>
      </div>

      <div className="zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            <ul className="clearfix">
              <li>
                <Link to="/services/tyre-class" className="zx_on">
                  Tyre className
                </Link>
              </li>
              <li>
                <Link to="/services/guestbook">Guestbook</Link>
              </li>
              <li>
                <Link to="/services/download">Download</Link>
              </li>
            </ul>
            <ServiceTyreClass showHeader={false} showMenu={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicepage;

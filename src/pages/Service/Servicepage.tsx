import React from "react";
import Header from "../../component/Header/Header";
import { NavLink } from "react-router-dom";
import LogoOther from "../../static/assets/main/cd_logo.png";
import ServiceForm from "./ServiceForm";
import ServiceTyreClass from "./ServiceTyreClass";
import ServiceDownload from "./ServiceDownload";
import { useServiceContext } from "../../provider/ServiceContent";

const Servicepage = () => {
  const { activeService, setActiveService } = useServiceContext();

  const handleTabClick = (service) => {
    setActiveService(service);
  };

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
              <li onClick={() => handleTabClick("tyre")}>
                <NavLink
                  to="/services/tyreclassName"
                  className={activeService === "tyre" ? "zx_on" : ""}>
                  Tyre className
                </NavLink>
              </li>
              <li onClick={() => handleTabClick("guestbook")}>
                <NavLink
                  to="/services/guestbook"
                  className={activeService === "guestbook" ? "zx_on" : ""}>
                  Guestbook
                </NavLink>
              </li>
              <li onClick={() => handleTabClick("download")}>
                <NavLink
                  to="/services/download"
                  className={activeService === "download" ? "zx_on" : ""}>
                  Download
                </NavLink>
              </li>
            </ul>
            {activeService === "tyre" && <ServiceTyreClass />}
            {activeService === "download" && <ServiceDownload />}
          </div>
        </div>
        {activeService === "guestbook" && <ServiceForm />}
      </div>
    </>
  );
};

export default Servicepage;

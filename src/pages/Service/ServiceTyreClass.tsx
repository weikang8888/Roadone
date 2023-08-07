import React, { useEffect, useState } from "react";
import NewsDateIcon from "../../static/assets/picture/news_date.png";
import axios from "axios";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import { Link } from "react-router-dom";

const ServiceTyreClass = ({ showHeader, showMenu }) => {
  const [servicesItems, setServicesItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services")
      .then((response) => {
        setServicesItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {showHeader && (
        <div className="banner cd fuwu">
          <div className="banner_box cd_banner2">
            <Header
              logo={LogoOther}
              logoClassName={""}
              logoDivClassName={"nav_left nav_left1 fl"}
            />
          </div>
        </div>
      )}
      <div className="zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            {showMenu && (
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
            )}
            <div className="kt">
              <ul>
                {servicesItems.map((services, index) => (
                  <li key={index}>
                    <div className="kt_d1">
                      <a
                        href={services.services_url}
                        title="Tire Function and Structure">
                        <img
                          src={require(`../../static/assets/picture/${services.services_image}`)}
                        />
                      </a>
                    </div>
                    <div className="kt_d2">
                      <a
                        href={services.services_url}
                        title="Tire Function and Structure">
                        {services.services_title}
                      </a>
                    </div>
                    <div className="kt_d3">{services.services_content}</div>
                    <div className="clearfix">
                      <div className="news_rt_d3 kt_d4">
                        <p className="fl">
                          <img src={NewsDateIcon} />
                          <span className="news_date">
                            {services.services_date}
                          </span>
                        </p>
                      </div>
                      <div className="yuedu kt_yuedu">
                        <a href={services.services_url}>View details {">"}</a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTyreClass;

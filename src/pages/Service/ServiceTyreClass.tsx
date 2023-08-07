import React, { useEffect, useState } from "react";
import NewsDateIcon from "../../static/assets/picture/news_date.png";
import axios from "axios";
const ServiceTyreClass = () => {
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
                    <span className="news_date">{services.services_date}</span>
                  </p>
                </div>
                <div className="yuedu kt_yuedu">
                  <a href={services.services_url}>View details {">"}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServiceTyreClass;

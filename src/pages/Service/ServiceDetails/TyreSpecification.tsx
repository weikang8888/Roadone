import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsDateIcon from "../../../static/assets/picture/news_date.png";
import NewsSource from "../../../static/assets/picture/news_source.png";
import ServiceImage1 from "../../../static/assets/picture/161ZG323-1.jpg";
import ServiceImage2 from "../../../static/assets/picture/161ZMY6-2.jpg";
import ServiceImage3 from "../../../static/assets/picture/161ZIF3-3.jpg";
import ServiceImage4 from "../../../static/assets/picture/161ZM243-4.jpg";
import ServiceHeader from "../ServiceHeader";
import { Link } from "react-router-dom";
import NewPreNext from "../../New/NewDetails/NewPrevNext";

const TyreSpecification = () => {
  const [servicesItems, setServicesItems] = useState([]);

  useEffect(() => {
    // Fetch data from phpMyAdmin using Axios
    axios
      .get("http://localhost:8080/api_roadone/services/services?id=3")
      .then((response) => {
        setServicesItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <ServiceHeader />
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            <ul className="clearfix">
              <li>
                <Link to="/services/tyre-class" className="zx_on">
                  Tyre Class
                </Link>
              </li>
              <li>
                <Link to="/services/guestbook">Guestbook</Link>
              </li>
              <li>
                <Link to="/services/download">Download</Link>
              </li>
            </ul>
            <div className="zxns">
              <div className="zx_box">
                <div className="zx_list fuwu_list">
                  {servicesItems.map((services, index) => (
                    <div className="kt" key={index}>
                      <div className="kt_d2 gn_d2">
                        {" "}
                        {services.services_title}
                      </div>
                      <div className="news_rt_d3 kt_d5 clearfix">
                        <p className="bs_img">
                          <img src={NewsSource} />
                          <span className="news_date">Roadone</span>
                          <img src={NewsDateIcon} />
                          <span className="news_date">
                            {" "}
                            {services.services_date}
                          </span>
                        </p>
                      </div>

                      <div className="cont">
                        <p className="text-center">
                          <img
                            src={require(`../../../static/assets/picture/${services.services_image}`)}
                          />
                          <img src={ServiceImage1} />
                          <img src={ServiceImage2} />
                          <img src={ServiceImage3} />
                          <img src={ServiceImage4} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <NewPreNext
            nextTitle={"Tyre Marking"}
            nextUrl="/services/tyre-class/tyre-marketing"
            prevTitle={"Tire Storage"}
            prevUrl="/services/tyre-class/tyre-storage"
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default TyreSpecification;
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";
import SubmitImage from "../../static/assets/picture/submit.png";
import SubmitImage_CN from "../../static/assets/cn/submit.png";

import { Link } from "react-router-dom";
import TopButton_m from "../../component/Button/TopButton_m";
import TopButton from "../../component/Button/TopButton";
import ServiceHeader from "./ServiceHeader";

const ServiceForm = () => {
  const { t, i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    messageType: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://backend.roadone.com.my/api_roadone/contact/contact", formData)
      .then((response) => {
        console.log(response.data);
        const submitSuccessLink = `/submit-success`;
        window.location.href = submitSuccessLink;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ServiceHeader />

      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list fuwu_list">
            <ul className="clearfix">
              <li>
                <Link to="/services/tyre-class">{t("header.tyreClass")}</Link>
              </li>
              <li>
                <Link to="/services/guestbook" className="zx_on">
                  {t("header.guestBook")}
                </Link>
              </li>
              <li>
                <Link to="/services/download">{t("header.download")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="zxfw zxfw1">
          <form className="clearfix" id="form1" onSubmit={handleSubmit}>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl">{t("services.guestBook.phone")}</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    className="in_bg_s"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl">{t("services.guestBook.email")}</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input
                    name="email"
                    id="email"
                    className="in_bg_s"
                    type="text"
                    onChange={handleInputChange}
                  />
                  <div>{t("services.guestBook.validEmailMessage")}</div>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.name")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input
                    name="name"
                    id="name"
                    className="in_bg_s"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.sex")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b zx_d">
                  <label>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                    />
                    <span>{t("services.guestBook.male")}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                    />
                    <span>{t("services.guestBook.female")}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.address")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input
                    name="address"
                    id="address"
                    className="in_bg"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.message")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b zx_d">
                  <label>
                    <input
                      type="radio"
                      id="messageType"
                      name="messageType"
                      value="Consult"
                      onChange={handleInputChange}
                    />
                    <span>{t("services.guestBook.consult")}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="messageType"
                      name="messageType"
                      value="Complain"
                      onChange={handleInputChange}
                    />
                    <span>{t("services.guestBook.complain")}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="messageType"
                      name="messageType"
                      value="Suggest"
                      onChange={handleInputChange}
                    />
                    <span>{t("services.guestBook.suggest")}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.title")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input
                    name="subject"
                    id="subject"
                    className="in_bg"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">
                  {t("services.guestBook.content")}
                </span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <textarea
                    className="text_bg"
                    name="message"
                    id="message"
                    onChange={handleInputChange}></textarea>
                  <div className="submit">
                    {i18n.language === "zh" ? (
                      <>
                        <input
                          type="image"
                          src={SubmitImage_CN}
                          className="tjbtn"
                        />
                      </>
                    ) : (
                      <>
                        <input
                          type="image"
                          src={SubmitImage}
                          className="tjbtn"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="clearfix zxfw_d1">
              <div className="fr zx_b">
                <input
                  id="vcode"
                  className="in_bg_ss"
                  style={{ textTransform: "uppercase" }}
                  name="vcode"
                  type="text"
                  placeholder="Verification code"
                  required
                />
                &nbsp;&nbsp;
                <img
                  alt="Click to change"
                  id="vdimgck"
                  style={{ cursor: "pointer" }}
                />
                &nbsp;
                <span>
                  <a>Click to change</a>
                </span>
              </div>
            </div> */}
          </form>
        </div>
        {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
      </div>
    </>
  );
};

export default ServiceForm;

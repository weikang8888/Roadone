import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Helmet } from "react-helmet";

import InnerBanner from "../../component/Banner/InnerBanner";
import ContactBanner from "../../static/image/main/contact-banner.webp";
import ContactHouse from "../../static/image/main/contact-house.png";
import SubMenu from "../../component/SubMenu/SubMenu";
import "./contact.css";

const Contactpage = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
    gridCheck: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://backend.roadone.com.my/contact/contact.php", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success response
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
        setIsSuccess(false);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      });
  };
  return (
    <>
      <Helmet>
        <title>
          {t("header.contact")} - {t("homepage.title")}
        </title>
      </Helmet>
      <InnerBanner bannerimage={ContactBanner} />

      <section>
        <div className="container">
          <div className="ejfl">{t("contactpage.contact")}</div>
          <SubMenu
            currentpage={t("contactpage.submenuContactUs")}
            currentlink={"/contact"}
          />
          <div className="main">
            <div className="pinfo">
              <p>
                <span className="text-wrap">
                  <strong>{t("contactpage.companyName")}</strong>
                </span>
              </p>
              <div className="mb-3">
                <p>
                  <img width="26" src={ContactHouse} alt="Contact House" />
                  {t("contactpage.address")}
                </p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;{t("contactpage.postalCode")}</p>
              </div>
              <div className="mb-3">
                <p className="text-wrap">{t("contactpage.contactInfo")}</p>
                <p className="text-wrap">{t("contactpage.contactPerson")}</p>
                <p className="text-wrap"></p>
              </div>

              <p className="text-wrap mb-3">
                <strong className="text-wrap">
                  {t("contactpage.otherContacts")}&nbsp;&nbsp;
                </strong>
              </p>
              <p className="text-wrap"></p>
              <p className="text-wrap">{t("contactpage.contactUsMessage")}</p>
              <div className="feedbackForm">
                <form id="feedbackForm" onSubmit={handleSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <td className="ftxt">
                          <div className="lable">
                            {t("contactpage.yourName")}
                          </div>
                        </td>
                        <td className="fput">
                          <input
                            id="SubmitName"
                            name="name"
                            className="text"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">
                            <span className="xh">*</span>
                            {t("contactpage.email")}
                          </div>
                        </td>
                        <td>
                          <input
                            id="SubmitEmail"
                            name="email"
                            className="text"
                            placeholder={t("contactpage.emailPlaceholder")}
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">
                            {t("contactpage.phoneWhatsApp")}
                          </div>
                        </td>
                        <td>
                          <input
                            id="SubmitPhone"
                            name="phone_number"
                            className="text"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">
                            {t("contactpage.company")}
                          </div>
                        </td>
                        <td>
                          <input
                            id="SubmitCompanyName"
                            name="SubmitCompanyName"
                            className="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">
                            {t("contactpage.subject")}
                          </div>
                        </td>
                        <td>
                          <input
                            id="SubmitTitle"
                            name="subject"
                            className="text"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <div className="lable">
                            <span className="xh">*</span>
                            {t("contactpage.content")}
                          </div>
                        </td>
                        <td>
                          <textarea
                            name="message"
                            id="SubmitContent"
                            className="atextarea"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t(
                              "contactpage.contentPlaceholder"
                            )}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <div className="fsbtn">
                            <button
                              type="submit"
                              className="submita"
                              id="ImgSend">
                              <span className="submita-loading"></span>
                              {t("contactpage.submitButton")}
                            </button>
                            <span id="msg"></span>
                          </div>
                        </td>
                      </tr>
                      {isSuccess && (
                        <tr>
                          <td>
                            <div className="success-message">
                              {t("contactpage.successMessage")}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactpage;

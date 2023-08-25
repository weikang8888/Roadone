import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import YuYueimage from "../../static/assets/picture/yuyue_lt.jpg";
import YYlogo from "../../static/assets/picture/yy_logo.png";
import SubmitImage from "../../static/assets/picture/submit.png";
import SubmitImage_CN from "../../static/assets/cn/submit.png";

import { useTranslation } from "react-i18next";

const ModalRoadone = ({ clodeModal, fieldVisibility }) => {
  const { t, i18n } = useTranslation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    jobTitle: "",
    message: "",
  });

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append form data fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("jobTitle", formData.jobTitle);
    formDataToSend.append("message", formData.message);

    // Append the file attachment if it exists
    if (file) {
      formDataToSend.append("attachment", file);
    }

    axios
      .post("http://localhost:8080/api_roadone/contact/contact", formDataToSend)
      .then((response) => {
        console.log(response.data);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSuccess(false);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      });
  };

  return (
    <>
      <div className="layui-layer layer-animation">
        <div className="container layui-layer-content">
          <div className="yy clearfix layui-layer-wrap">
            <div className="yy_left">
              <img src={YuYueimage} />
            </div>
            <div className="yy_right">
              <div className="yy_logo clearfix">
                <img className="fr" src={YYlogo} />
              </div>
              <div className="yy_f">
                <form className="clearfix" id="form1" onSubmit={handleSubmit}>
                  <div className="col-lg-6 yy_f_lt ">
                    {fieldVisibility.fullName && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                            placeholder={t("popup.yourname")}
                          />
                        </div>
                        <div className="phone2">{t("popup.fullname")}</div>
                      </div>
                    )}
                    {fieldVisibility.telephone && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            onChange={handleInputChange}
                            placeholder={t("popup.yourphone")}
                          />
                        </div>
                        <div className="phone2">{t("popup.phone")}</div>
                      </div>
                    )}
                    {fieldVisibility.email && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleInputChange}
                            placeholder={t("popup.youremail")}
                          />
                        </div>
                        <div className="phone2">{t("popup.email")}</div>
                      </div>
                    )}
                    {fieldVisibility.address && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={handleInputChange}
                            placeholder={t("popup.youraddress")}
                          />
                        </div>
                        <div className="phone2">{t("popup.address")}</div>
                      </div>
                    )}
                    {fieldVisibility.jobTitle && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="jobTitle"
                            id="jobTitle"
                            onChange={handleInputChange}
                            placeholder={t("popup.jobtitle")}
                          />
                        </div>
                        <div className="phone2">{t("popup.jobT")}</div>
                      </div>
                    )}
                    {fieldVisibility.attachment && (
                      <div className="yy_phone">
                        <input
                          type="file"
                          name="attachment"
                          id="attachment"
                          className="scfj"
                          onChange={handleFileChange}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 yy_f_rt ">
                    <textarea
                      className="liuyan"
                      name="message"
                      id="message"
                      onChange={handleInputChange}
                      placeholder={t("popup.leavingmessage")}></textarea>
                    {/* <div className="vcode">
                      <input
                        id="vdcode"
                        className="in_bg_ss"
                        style={{ textTransform: "uppercase" }}
                        name="vdcode"
                        type="text"
                        value={formData.message}
                        placeholder="Verification Code"
                        required
                      />
                      &nbsp;&nbsp;
                      <img
                        title="Click to change"
                        id="vdimgck"
                        onClick={changeAuthCode}
                        src={authCodeSrc}
                        style={{ cursor: "pointer" }}
                      />
                    </div> */}
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
                </form>
              </div>
            </div>
          </div>
          <span className="layui-layer-setwin">
            <a
              className="layui-layer-ico layui-layer-close layui-layer-close2"
              onClick={clodeModal}></a>
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalRoadone;

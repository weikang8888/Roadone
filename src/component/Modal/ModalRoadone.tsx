import React, { useState } from "react";
import YuYueimage from "../../static/assets/picture/yuyue_lt.jpg";
import YYlogo from "../../static/assets/picture/yy_logo.png";
import SubmitImage from "../../static/assets/picture/submit.png";

const ModalRoadone = ({ clodeModal, fieldVisibility }) => {
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
                <form className="clearfix" id="form1">
                  <div className="col-6 yy_f_lt ">
                    {fieldVisibility.fullName && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="phone2">Full Name</div>
                      </div>
                    )}
                    {fieldVisibility.telephone && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Your Telephone"
                          />
                        </div>
                        <div className="phone2">Telephone</div>
                      </div>
                    )}
                    {fieldVisibility.email && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Your E-mail"
                          />
                        </div>
                        <div className="phone2">E-mail</div>
                      </div>
                    )}
                    {fieldVisibility.address && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Your Address"
                          />
                        </div>
                        <div className="phone2">Address</div>
                      </div>
                    )}
                    {fieldVisibility.jobTitle && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Job Title"
                          />
                        </div>
                        <div className="phone2">Job Title</div>
                      </div>
                    )}
                    {fieldVisibility.contactInformation && (
                      <div className="yy_phone">
                        <div className="phone1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Contact Information"
                          />
                        </div>
                        <div className="phone2">Contact Information</div>
                      </div>
                    )}
                    {fieldVisibility.attachment && (
                      <div className="yy_phone">
                        <input
                          type="file"
                          name="attfile"
                          id="attfile"
                          className="scfj"
                        />
                        &nbsp; Upload Attachment
                      </div>
                    )}
                  </div>
                  <div className="col-6 yy_f_rt ">
                    <textarea
                      className="liuyan"
                      name="message"
                      id="message"
                      placeholder="Leaving Message"></textarea>
                    <div className="vcode">
                      <input
                        id="vdcode"
                        className="in_bg_ss"
                        name="vdcode"
                        type="text"
                        placeholder="Verification Code"
                      />
                      &nbsp;&nbsp; <img title="Click to change" id="vdimgck" />{" "}
                      &nbsp;
                      <span>
                        <a>Click to change</a>
                      </span>
                    </div>
                    <div className="submit">
                      <input
                        type="hidden"
                        name="dede_fields"
                        value="name,text;email,text;phone,text;address,text;message,multitext;time,text"
                      />
                      <input
                        type="hidden"
                        name="dede_fieldshash"
                        value="7b38ad3b8f8ba147d402cc390ddfb2b3"
                      />
                      <input type="image" src={SubmitImage} className="tjbtn" />
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

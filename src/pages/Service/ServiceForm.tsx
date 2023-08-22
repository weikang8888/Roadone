import React, { useEffect, useState } from "react";

import SubmitImage from "../../static/assets/picture/submit.png";
import { Link } from "react-router-dom";
import TopButton_m from "../../component/Button/TopButton_m";
import TopButton from "../../component/Button/TopButton";
import ServiceHeader from "./ServiceHeader";

const ServiceForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
                <Link to="/services/tyre-class">Tyre className</Link>
              </li>
              <li>
                <Link to="/services/guestbook" className="zx_on">
                  Guestbook
                </Link>
              </li>
              <li>
                <Link to="/services/download">Download</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="zxfw zxfw1">
          <form action="" method="post">
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl">Phone</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input name="phone" id="phone" className="in_bg_s" type="" />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl">E-mail</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input name="email" id="email" className="in_bg_s" type="" />
                  <div>
                    Please fill in the valid email address so that you can
                    receive the question from lutong tire in the first place.
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              
              <div className="col-3">
                <span className="zx_a fl zx_c">Name</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input name="name" id="name" className="in_bg_s" type="" />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              <div className="col-3">
                <span className="zx_a fl zx_c">Sex</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b zx_d">
                  <label>
                    <input type="radio" id="sex" name="sex" value="Male" />
                    <span>Male</span>
                  </label>
                  <label>
                    <input type="radio" id="sex" name="sex" value="Female" />
                    <span>Female</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              
              <div className="col-3">
                <span className="zx_a fl zx_c">Address</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input name="area" id="area" className="in_bg" type="" />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              
              <div className="col-3">
                <span className="zx_a fl zx_c">Message</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b zx_d">
                  <label>
                    <input type="radio" id="d3" name="gtype" value="Consult" />
                    <span>Consult</span>
                  </label>
                  <label>
                    <input type="radio" id="d4" name="gtype" value="Complain" />
                    <span>Complain</span>
                  </label>
                  <label>
                    <input type="radio" id="d5" name="gtype" value="Suggest" />
                    <span>Suggest</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              
              <div className="col-3">
                <span className="zx_a fl zx_c">Title</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <input name="title" id="title" className="in_bg" type="" />
                </div>
              </div>
            </div>
            <div className="clearfix zxfw_d1">
              
              <div className="col-3">
                <span className="zx_a fl zx_c">Content</span>
              </div>
              <div className="col-9">
                <div className="fr zx_b">
                  <textarea
                    className="text_bg"
                    name="message"
                    id="message"></textarea>
                  <div className="submit">
                    <input type="image" src={SubmitImage} className="tjbtn" />
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix zxfw_d1">
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
            </div>
            <input
              type="hidden"
              name="dede_fields"
              value="name,text;sex,radio;phone,text;email,text;area,text;gtype,radio;title,text;message,multitext;time,text"
            />
            <input
              type="hidden"
              name="dede_fieldshash"
              value="6931e64fdabdf67d87bb4a865cdf0c4d"
            />
          </form>
        </div>
        {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
      </div>
    </>
  );
};

export default ServiceForm;

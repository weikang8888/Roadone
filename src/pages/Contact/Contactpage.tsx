import React from "react";
import InnerBanner from "../../component/Banner/InnerBanner";
import ContactBanner from "../../static/image/main/contact-banner.webp";
import ContactHouse from "../../static/image/main/contact-house.png";
import SubMenu from "../../component/SubMenu/SubMenu";
const Contactpage = () => {
  return (
    <>
      <InnerBanner bannerimage={ContactBanner} />

      <section>
        <div className="container">
          <div className="ejfl">Contact</div>
          <SubMenu currentpage={"Contact Us"} currentlink={"/contact"} />
          <div className="main">
            <div className="pinfo">
              <p>
                <span className="text-wrap">
                  <strong>TONGLI TYRE CO.,LTD.</strong>
                </span>
              </p>
              <div className="mb-3">
                <p>
                  <img width="26" src={ContactHouse} />
                  Addresss: Hixih Inustrial Park ,Yanzhou ,Shandong
                  Province,China
                </p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;Postal Code: 272100</p>{" "}
              </div>
              <div className="mb-3">
                <p className="text-wrap">Mob/Whatsapp/Wechat: +8615764288507</p>
                <p className="text-wrap">Contact person:&nbsp; White</p>
                <p className="text-wrap"></p>
              </div>

              <p className="text-wrap mb-3">
                <strong className="text-wrap">
                  Other Contacts:&nbsp;&nbsp;
                </strong>
              </p>
              <p className="text-wrap"></p>
              <p className="text-wrap">
                Please contact us by the information above , better than left
                message at this website
              </p>
              <div className="feedbackForm">
                <form
                  name="feedbackForm"
                  action=""
                  id="feedbackForm"
                  method="post">
                  <table>
                    <tbody>
                      <tr>
                        <td className="ftxt">
                          <div className="lable">Your Name:</div>
                        </td>
                        <td className="fput">
                          <input
                            id="SubmitName"
                            name="SubmitName"
                            className="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">
                            <span className="xh">*</span>E-mail:
                          </div>
                        </td>
                        <td>
                          <input
                            id="SubmitEmail"
                            name="SubmitEmail"
                            className="text"
                            placeholder="Please input your email here, it is very important!"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">Phone/WhatsApp:</div>
                        </td>
                        <td>
                          <input
                            id="SubmitPhone"
                            name="SubmitPhone"
                            className="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lable">Company:</div>
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
                          <div className="lable">Subject:</div>
                        </td>
                        <td>
                          <input
                            id="SubmitTitle"
                            name="SubmitTitle"
                            className="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <div className="lable">
                            <span className="xh">*</span>Content:
                          </div>
                        </td>
                        <td>
                          <textarea
                            name="SubmitContent"
                            id="SubmitContent"
                            className="atextarea"
                            placeholder="Please include details like size, weight, destination port and etc., so that we can quote the best price."></textarea>
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
                              <span className="submita-loading"></span>Send
                            </button>
                            <span id="msg"></span>
                          </div>
                        </td>
                      </tr>
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

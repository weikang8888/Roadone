import React from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";

import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import RecruitmentSocialImage2 from "../../static/assets/picture/recruit_campus.jpg";
import TopButton from "../../component/Button/TopButton";

const CampusRecruit = ({ showHeader }) => {
  const swiperTopSlides = [
    { image: InsideImage1 },
    { image: InsideImage2 },
    { image: InsideImage3 },
  ];
  return (
    <>
      {showHeader && (
        <div className="banner cd about">
          <div className="banner_box cd_box">
            <Swipper
              swiperImage={swiperTopSlides.map((slide) => slide.image)}
              imageClassName={"cd_banner2"}
            />
          </div>
          <Header
            logo={LogoOther}
            logoClassName={""}
            logoDivClassName={"nav_left nav_left1 fl"}
          />{" "}
        </div>
      )}
      <div className="zxns">
        <div className="zx_box">
          <div className="zx_list">
            <div className="tabs3">
              <div className="sh_zp xy_zp">
                <div className="zx_banner zx_banner1">
                  <img
                    src={RecruitmentSocialImage2}
                    style={{
                      transition: "all 0.5s ease 0s",
                      transform: "scale(1)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />{" "}
                </div>
                <div className="sh_zp_hd">
                  <a href="Campus.html">Campus Recruitment</a>
                </div>
                <div className="zw">
                  <table>
                    <tr className="tb_frist t1">
                      <td className="tb_frist_t1">Position</td>
                      <td className="tb_frist_t2">Major Requirement</td>
                      <td className="tb_frist_t3">Degree</td>
                      <td className="tb_frist_t4">Number of Hiring</td>
                      <td className="tb_frist_t5">Other Requirement</td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a href="item-709.html" title="Laboratory Technician">
                          Laboratory Technician
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>Majored in chemistry, physics or related major.</p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        Solid professional knowledge,innovative,
                        hard-working,self-motivated, fast-learned,good com ...
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a
                          href="item-708.html"
                          title="Mechanical / Electrical Technician">
                          Mechanical / Electrical Technician
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>Majored in automation, mechanical engineering.</p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        Solid professional knowledge,innovative,
                        hard-working,self-motivated, fast-learned,good com ...
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a href="item-707.html" title="Quality Technician">
                          Quality Technician
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            Majored in polymer, material, chemistry or related
                            major.
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        Solid professional knowledge,innovative,
                        hard-working,self-motivated, fast-learned,good com ...
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a href="item-706.html" title="R &amp; D Technician">
                          R &amp; D Technician
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            Majored in polymer, material, chemistry or related
                            major
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        Solid professional knowledge,innovative,
                        hard-working,self-motivated, fast-learned,good com ...
                      </td>
                    </tr>
                  </table>

                  <div className="zp_date clearfix">
                    <ul className="list-paddingleft-2">
                      <li>
                        <p>Recruitment deadline: 2019/06/30</p>
                      </li>
                      <li>
                        <p>E-mail: feifei.chen@hixih.com</p>
                      </li>
                      <li>
                        <p>Linkman: Chenfeifei</p>
                      </li>
                      <li>
                        <p>Tel: 0537-5174413</p>
                      </li>
                      <li>
                        <p className="lastrow">
                          【
                          <a href="/uploads/file/2003/1583918028869844.xlsx">
                            Download Resume
                          </a>
                          】
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="n_sq clearfix">
                    <a className="fr tj" id="tj2" href="javascript:;">
                      Submit Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopButton />
      </div>
    </>
  );
};

export default CampusRecruit;

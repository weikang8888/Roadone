import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";

import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import RecruitmentSocialImage1 from "../../static/assets/picture/recruit_social.jpg";
import Recruitmentbanner from "../../static/assets/m/inside_tlt_1.jpg";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";

const SocialRecruitment = ({ showHeader }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopMobileSlides = [{ image: Recruitmentbanner }];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const swiperTopSlides = [
    { image: InsideImage1 },
    { image: InsideImage2 },
    { image: InsideImage3 },
  ];
  return (
    <>
      {windowWidth <= 990 ? (
        <>
          <Header_m />
          <Swipper_m
            swiperImage={swiperTopMobileSlides.map((slide) => slide.image)}
            paginationTF={false}
            loopTF={false}
          />
        </>
      ) : (
        showHeader && (
          <div className="container banner cd about">
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
            />
          </div>
        )
      )}
      <div className="container zxns">
        <div className="zx_box">
          <div className="zx_list">
            <div className="tabs3">
              <div className="sh_zp">
                <div className="zx_banner">
                  <img
                    src={RecruitmentSocialImage1}
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
                  />
                </div>

                <div className="sh_zp_hd">
                  <a href="social.html">Social Recruitment</a>
                </div>
                <div className="zw">
                  <table>
                    <tr className="tb_frist">
                      <td className="tb_frist_t1">Position</td>
                      <td className="tb_frist_t2">Major Requirement</td>
                      <td className="tb_frist_t3">Degree</td>
                      <td className="tb_frist_t4">Number of Hiring</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a
                          href="item-705.html"
                          title="Industrial Engineering Specialist">
                          Industrial Engineering Specialist
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. Conducted capacity evaluation in the production
                            process and made management plan in annual of 5-year
                            and PMAT personnel management plan;
                            <br />
                            2. Conducted action research on existing operations
                            and apply the knowledge of industrial engineering,
                            value engineering theory, lean production, rapid
                            mold change, total preventive maintenance and so on.
                            Eliminating the non-value-added processes and
                            improving site bottlenecks.
                            <br />
                            3. Improve personnel efficiency and formulate annual
                            EAP personnel efficiency improvement plan
                            <br />
                            4. Standardization
                            <br />
                            5. Led the installation and debugging process of new
                            equipment
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-704.html" title="Motorcade Salesperson">
                          Motorcade Salesperson
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. Accomplish sales tasks assigned by the company;
                          </p>
                          <p>
                            2. Mainly responsible for the development and
                            maintenance of large motorcade customers, the
                            establishment of distribution network within the
                            jurisdiction and the expansion of the company&#39;s
                            product coverage;
                          </p>
                          <p>
                            3. Carry out product promotion activities according
                            to enterprise plans and procedures, introduce
                            products and provide relevant information;
                          </p>
                          <p>
                            4. Set up customer information card and customer
                            file, complete related sales report;
                          </p>
                          <p>
                            5. Participate in the company&#39;s sales meeting or
                            organized training;
                          </p>
                          <p>
                            6. Establish good relationship with customers to
                            maintain corporate image.
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-703.html" title="Quality Engineer">
                          Quality Engineer
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. At least 3 years quality management experience in
                            tire industry
                            <br />
                            2. Majored in polymer, chemistry or related major
                            <br />
                            3. Familiar with quality management and specific
                            methods, the performance of product technical
                            specifications, product inspection standard and
                            related knowledge
                            <br />
                            4. Familiar with product structure, performance,
                            mechanism, solid theoretical basis and technical
                            working experience
                            <br />
                            5. Good communication, coordination, organization
                            and team building skills
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-702.html" title="Formula Design Engineer">
                          Formula Design Engineer
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. At least 3 years experience in formula design
                            <br />
                            2. Majored in chemistry, rubber, polymer or related
                            field
                            <br />
                            3. Understand the test method and principle of the
                            test equipment for the material and formula
                            performance index test
                            <br />
                            4. Understand TS16949 standard requirements and the
                            application of the five core tools
                            <br />
                            5. Good discipline, teamwork, and innovative spirit
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-701.html" title="Structural Engineer">
                          Structural Engineer
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. At least 3 years experience in tire structural
                            design
                            <br />
                            2. Majored in polymer, material, chemistry or
                            related field
                            <br />
                            3. Have a good knowledge of tire manufacturing
                            process, understand key parameters and performance
                            indicators of all kinds of vehicles
                            <br />
                            4. Understand TS16949 standard requirements and the
                            application of the five core tools
                            <br />
                            5. Good discipline, teamwork, and innovative spirit
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-700.html" title="Cost Accountant">
                          Cost Accountant
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            1. At least 2 years finance experience in tire
                            industry
                            <br />
                            2. Accounting, finance, auditing or related major
                            <br />
                            3. Skilled in financial software and Office
                            software; Sufficient experience in cost control
                            <br />
                            4. Dedicated, responsible, rigorous, practical, and
                            careful
                            <br />
                            5. Good discipline, teamwork, and innovative spirit
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">Bachelor degree or above</td>
                      <td className="zw_d4">1</td>
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
                    <a className="fr tj" id="tj1" href="javascript:;">
                      Submit Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialRecruitment;

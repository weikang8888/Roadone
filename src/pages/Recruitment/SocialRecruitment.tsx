import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";
import { useTranslation } from "react-i18next";

import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import RecruitmentSocialImage1 from "../../static/assets/picture/recruit_social.jpg";
import Recruitmentbanner from "../../static/assets/m/inside_tlt_1.jpg";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import AdvanceButton from "../../component/Button/AdvanceButton";
import ModalRoadone from "../../component/Modal/ModalRoadone";

const SocialRecruitment = ({ showHeader }) => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperTopMobileSlides = [{ image: Recruitmentbanner }];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const fieldVisibility = {
    fullName: true,
    jobTitle: true,
    email: true,
    attachment: true,
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

  const swiperTopSlides = [
    { image: InsideImage1 },
    { image: InsideImage2 },
    { image: InsideImage3 },
  ];
  return (
    <>
      {showHeader && windowWidth <= 990 ? (
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
                  <a href="social.html">{t("header.socialRecruitment")}</a>
                </div>
                <div className="zw">
                  <table>
                    <tr className="tb_frist">
                      <td className="tb_frist_t1">
                        {t("socialRecruitment.position")}
                      </td>
                      <td className="tb_frist_t2">
                        {t("socialRecruitment.majorRequirement")}
                      </td>
                      <td className="tb_frist_t3">
                        {t("socialRecruitment.degree")}
                      </td>
                      <td className="tb_frist_t4">
                        {t("socialRecruitment.numberOfHiring")}
                      </td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a
                          href="item-705.html"
                          title="Industrial Engineering Specialist">
                          {t("socialRecruitment.industrialEngineering")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t(
                              "socialRecruitment.industrialEngineeringDescription1"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.industrialEngineeringDescription2"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.industrialEngineeringDescription3"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.industrialEngineeringDescription4"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.industrialEngineeringDescription5"
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-704.html" title="Motorcade Salesperson">
                          {t("socialRecruitment.motorcadeSalesperson")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription1"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription2"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription3"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription4"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription5"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.motorcadeSalespersonDescription6"
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-703.html" title="Quality Engineer">
                          {t("socialRecruitment.qualityEngineer")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t("socialRecruitment.qualityEngineerDescription1")}
                          </p>
                          <p>
                            {t("socialRecruitment.qualityEngineerDescription2")}
                          </p>
                          <p>
                            {t("socialRecruitment.qualityEngineerDescription3")}
                          </p>
                          <p>
                            {t("socialRecruitment.qualityEngineerDescription4")}
                          </p>
                          <p>
                            {t("socialRecruitment.qualityEngineerDescription5")}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-702.html" title="Formula Design Engineer">
                          {t("socialRecruitment.formulaDesignEngineer")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t(
                              "socialRecruitment.formulaDesignEngineerDescription1"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.formulaDesignEngineerDescription2"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.formulaDesignEngineerDescription3"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.formulaDesignEngineerDescription4"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.formulaDesignEngineerDescription5"
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-701.html" title="Structural Engineer">
                          {t("socialRecruitment.structuralEngineer")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t(
                              "socialRecruitment.structuralEngineerDescription1"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.structuralEngineerDescription2"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.structuralEngineerDescription3"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.structuralEngineerDescription4"
                            )}
                          </p>
                          <p>
                            {t(
                              "socialRecruitment.structuralEngineerDescription5"
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                    <tr>
                      <td className="zw_d1">
                        <a href="item-700.html" title="Cost Accountant">
                          {t("socialRecruitment.costAccountant")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>
                            {t("socialRecruitment.costAccountantDescription1")}
                          </p>
                          <p>
                            {t("socialRecruitment.costAccountantDescription2")}
                          </p>
                          <p>
                            {t("socialRecruitment.costAccountantDescription3")}
                          </p>
                          <p>
                            {t("socialRecruitment.costAccountantDescription4")}
                          </p>
                          <p>
                            {t("socialRecruitment.costAccountantDescription5")}
                          </p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">1</td>
                    </tr>
                  </table>
                  <div className="zp_date clearfix">
                    <ul className="list-paddingleft-2">
                      <li>
                        <p>
                          {t("socialRecruitment.recruitmentDeadline")}:
                          2019/06/30
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("socialRecruitment.email")}: feifei.chen@hixih.com
                        </p>
                      </li>
                      <li>
                        <p>{t("socialRecruitment.linkMan")}: Chenfeifei</p>
                      </li>
                      <li>
                        <p>{t("socialRecruitment.tel")}: 0537-5174413</p>
                      </li>
                      <li>
                        <p className="lastrow">
                          【
                          <a href="/uploads/file/2003/1583918028869844.xlsx">
                            {t("socialRecruitment.downloadResume")}
                          </a>
                          】
                        </p>
                      </li>
                    </ul>
                  </div>
                  <AdvanceButton
                    advanceButtonText={t("socialRecruitment.submitResume")}
                    advanceButtonClass={"n_sq "}
                    handleOpenModal={handleOpenModal}
                  />

                  {isModalOpen && (
                    <ModalRoadone
                      clodeModal={handleCloseModal}
                      fieldVisibility={fieldVisibility}
                    />
                  )}
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

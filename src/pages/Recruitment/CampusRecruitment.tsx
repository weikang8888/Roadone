import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import LogoOther from "../../static/assets/main/cd_logo.png";
import Swipper from "../../component/Swiper/Swipper";
import InsideImage1 from "../../static/assets/image/inside_tlt_1.jpg";
import InsideImage2 from "../../static/assets/image/inside_tlt_2.jpg";
import InsideImage3 from "../../static/assets/image/inside_tlt_3.jpg";
import RecruitmentSocialImage2 from "../../static/assets/picture/recruit_campus.jpg";
import TopButton from "../../component/Button/TopButton";
import Recruitmentbanner from "../../static/assets/m/inside_tlt_1.jpg";
import Header_m from "../../component/Header/Header_m";
import Swipper_m from "../../component/Swiper/Swipper_m";
import TopButton_m from "../../component/Button/TopButton_m";
import AdvanceButton from "../../component/Button/AdvanceButton";
import ModalRoadone from "../../component/Modal/ModalRoadone";
import { useTranslation } from "react-i18next";

const CampusRecruit = ({ showHeader }) => {
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
                  />
                </div>
                <div className="sh_zp_hd">
                  <a>{t("header.campusRecruitment")}</a>
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
                      <td className="tb_frist_t4">
                        {t("socialRecruitment.otherRecruitment")}
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a title="Laboratory Technician">
                          {t("campusRecruitment.laboratory")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>{t("campusRecruitment.laboratoryDescription")}</p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        {t("campusRecruitment.otherRequirementDescription")}
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a title="Mechanical / Electrical Technician">
                          {t("campusRecruitment.mechanical")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>{t("campusRecruitment.mechanicalDescription")}</p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        {t("campusRecruitment.otherRequirementDescription")}
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a title="Quality Technician">
                          {t("campusRecruitment.quality")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>{t("campusRecruitment.qualityDescription")}</p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        {t("campusRecruitment.otherRequirementDescription")}
                      </td>
                    </tr>
                    <tr className="t1">
                      <td className="zw_d1">
                        <a title="R &amp; D Technician">
                          {t("campusRecruitment.r&d")}
                        </a>
                      </td>
                      <td className="zw_d2">
                        <div className="zw_d2_box">
                          <p>{t("campusRecruitment.r&dDescription")}</p>
                        </div>
                      </td>
                      <td className="zw_d3">
                        {t("socialRecruitment.bachelorDegree")}
                      </td>
                      <td className="zw_d4">10</td>
                      <td className="zw_d5">
                        {t("campusRecruitment.otherRequirementDescription")}
                      </td>
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
                          【<a>{t("socialRecruitment.downloadResume")}</a>】
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
        {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
      </div>
    </>
  );
};

export default CampusRecruit;

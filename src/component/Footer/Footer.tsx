import React from "react";
import { useTranslation } from "react-i18next";

import QRcode from "../../static/assets/picture/qrcode.jpg";
import Wechat from "../../static/assets/picture/weixin.png";
import Weibo from "../../static/assets/picture/weibo.png";
import Qzone from "../../static/assets/picture/qzone.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="container foot_top">
          <div className="foot_top_box clearfix">
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/products">{t("header.products")}</NavLink>
              </div>
              <ul className="firstrow">
                <li className="kc">
                  <NavLink to="/products/truck">
                    {t("header.truckTyre")}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/products/truck/long-haul-wearable">
                    {t("products.longHaulWearable")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/truck/middle-long-distance">
                    {t("products.middleLongDistance")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/truck/middle-short-distance">
                    {t("products.middleShortDistance")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/truck/quarry-building-site">
                    {t("products.quarryBuidlingSites")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/psroducts/truck/high-end-off-road">
                    {" "}
                    {t("products.highEndOffRoad")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/truck/high-end-heavy-loading">
                    {t("products.highEndHeavyLoading")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/truck/high-end-wearable">
                    {t("products.highEndWearable")}
                  </NavLink>
                </li>
              </ul>
              <ul className="firstrow">
                <li className="kc">
                  <NavLink to="/products">{t("header.busTyre")}</NavLink>
                </li>

                <li>
                  <NavLink to="/products/bus/inter-city">
                    {t("products.interCityBus")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/bus/city-bus">
                    {t("products.cityCityBus")}
                  </NavLink>
                </li>
                <li className="kc"></li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/services">{t("header.service")}</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/services/tyre-class">{t("header.tyreClass")}</Link>
                </li>
                <li>
                  <Link to="/services/guestbook">{t("header.guestBook")}</Link>
                </li>
                <li>
                  <Link to="/services/download">{t("header.download")}</Link>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/recruitment">{t("header.recruitment")}</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/recruitment/social">
                    {t("header.socialRecruitment")}
                  </Link>
                </li>
                <li>
                  <Link to="/recruitment/campus">
                    {t("header.campusRecruitment")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/about/roadone">{t("header.about")}</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/about/roadone">{t("header.aboutRoadone")}</Link>
                </li>
                <li>
                  <Link to="/about/social-responsibility">
                    {t("header.csr")}
                  </Link>
                </li>
                <li>
                  <Link to="/about/contact">{t("header.contactUs")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fx">
            <div className="code">
              <img src={QRcode} />
            </div>
            <div className="fx_fw">{t("homepage.roadoneTireIsForYour")}</div>
            <div className="fx_img">
              {t("homepage.share")}:
              <img className="h7" src={Wechat} />
              <a
                href="http://service.weibo.com/share/share.php?url=http://en.tltyre.com&title=Roadone"
                target="_blank">
                <img className="h8" src={Weibo} />
              </a>
              <a
                target="_blank"
                href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://en.tltyre.com&title=Roadone">
                <img className="h9" src={Qzone} />
              </a>
            </div>
          </div>
        </div>
        <div className="container foot">
          <div className="foot_box clearfix px-3">
            <div className="fl foot_txt">
              {t("homepage.copyright")} &copy; 2003-2021&nbsp;{" "}
              {t("about.companyName")} {t("homepage.allRightReserved")}
            </div>
            <div className="foot_list fr">
              <ul className="clearfix">
                <li>
                  <a href="">{t("homepage.legalDeclaration")}</a>
                </li>
                <li>
                  <a href="/about/contact">{t("header.contactUs")}</a>
                </li>
                <li>
                  <a href="">{t("homepage.siteMap")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

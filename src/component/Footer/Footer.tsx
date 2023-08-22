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
                <NavLink to="/products">Product</NavLink>
              </div>
              <ul className="firstrow">
                <li className="kc">
                  <NavLink to="/products">Truck Tyres</NavLink>
                </li>

                <li>
                  <NavLink to="/products">Long Haul Wearable Tyres</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Middle & Long Distance</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Middle & Short Distance</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Quarry & Building Sites</NavLink>
                </li>
                <li>
                  <NavLink to="/products"> High End Off-road Tyres</NavLink>
                </li>
                <li>
                  <NavLink to="/products">High End Heavy Loading Tyres</NavLink>
                </li>
                <li>
                  <NavLink to="/products">HIGH END WEARABLE TYRE</NavLink>
                </li>
              </ul>
              <ul className="firstrow">
                <li className="kc">
                  <NavLink to="/products">Bus Tyres</NavLink>
                </li>

                <li>
                  <NavLink to="/products">Inter-city Bus</NavLink>
                </li>
                <li>
                  <NavLink to="/products">City-City Bus</NavLink>
                </li>
                <li className="kc"></li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/services">Service</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/services/tyre-class">Tyre className</Link>
                </li>
                <li>
                  <Link to="/services/guestbook">Guestbook</Link>
                </li>
                <li>
                  <Link to="/services/download">Download</Link>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/recruiment">Recruitment</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/recruiment/social">Social Recruitment</Link>
                </li>
                <li>
                  <Link to="/recruiment/campus">Campus Recruitment</Link>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <NavLink to="/about/roadone">About Us</NavLink>
              </div>
              <ul>
                <li>
                  <Link to="/about/roadone">About Roadone</Link>
                </li>
                <li>
                  <Link to="/about/social-responsibility">CSR</Link>
                </li>
                <li>
                  <Link to="/about/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fx">
            <div className="code">
              <img src={QRcode} />
            </div>
            <div className="fx_fw">Roadone tire is for you</div>
            <div className="fx_img">
              Share:
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
              Copyright &copy; 2003-2021&nbsp; {t("about.companyName")} All
              Rights Reserved.
            </div>
            <div className="foot_list fr">
              <ul className="clearfix">
                <li>
                  <a href="">Legal Declaration</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
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

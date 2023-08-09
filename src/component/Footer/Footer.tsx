import React from "react";

import QRcode from "../../static/assets/picture/qrcode.jpg";
import Wechat from "../../static/assets/picture/weixin.png";
import Weibo from "../../static/assets/picture/weibo.png";
import Qzone from "../../static/assets/picture/qzone.png";

const Footer = () => {
  return (
    <>
      <div>
        {" "}
        <div className="container foot_top">
          <div className="foot_top_box clearfix">
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <a href="product.html">Product</a>
              </div>
              <ul className="firstrow">
                <li className="kc">
                  <a href="truck-tyres.html">Truck Tyres</a>
                </li>

                <li>
                  <a href="long-haul-highway.html">Long Haul Wearable Tyres</a>
                </li>
                <li>
                  <a href="middle-long-distance.html">Middle & Long Distance</a>
                </li>
                <li>
                  <a href="middle-short-distance.html">
                    Middle & Short Distance
                  </a>
                </li>
                <li>
                  <a href="quarry-building-sites.html">
                    Quarry & Building Sites
                  </a>
                </li>
                <li>
                  <a href="high-end-off-road-tyres.html">
                    High End Off-road Tyres
                  </a>
                </li>
                <li>
                  <a href="high-end-heavy-loading-tyres.html">
                    High End Heavy Loading Tyres
                  </a>
                </li>
                <li>
                  <a href="high-end-wearable-tyres.html">
                    HIGH END WEARABLE TYRE
                  </a>
                </li>
              </ul>
              <ul className="firstrow">
                <li className="kc">
                  <a href="bus-tyres.html">Bus Tyres</a>
                </li>

                <li>
                  <a href="inter-city-bus.html">Inter-city Bus</a>
                </li>
                <li>
                  <a href="city-bus.html">City-City Bus</a>
                </li>
                <li className="kc"></li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <a href="service.html">Service</a>
              </div>
              <ul>
                <li>
                  <a href="tyre-className.html">Tyre className</a>
                </li>
                <li>
                  <a href="guestbook.html">Guestbook</a>
                </li>
                <li>
                  <a href="download.html">Download</a>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <a href="recruit.html">Recruitment</a>
              </div>
              <ul>
                <li>
                  <a href="social.html">Social Recruitment</a>
                </li>
                <li>
                  <a href="Campus.html">Campus Recruitment</a>
                </li>
              </ul>
            </div>
            <div className="foot_top1 fl">
              <div className="xl_hd">
                <a href="about.html">About Us</a>
              </div>
              <ul>
                <li>
                  <a href="roadone.html">About Roadone</a>
                </li>
                <li>
                  <a href="social-responsibility.html">CSR</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
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
              Copyright &copy; 2003-2021&nbsp; Tongli Tyre Co., Ltd. All Rights
              Reserved.
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

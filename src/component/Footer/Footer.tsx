import React from "react";
import { useTranslation } from "react-i18next";
import HM1 from "../../static/image/main/hm1.png";
import HM2 from "../../static/image/main/hm2.png";
import HM3 from "../../static/image/main/hm3.png";
import HM4 from "../../static/image/main/hm4.png";
import HM5 from "../../static/image/main/hm5.png";
import FTTYRE1 from "../../static/image/main/fttyre1.webp";
import FTTYRE2 from "../../static/image/main/fttyre2.webp";

const Footer = () => {
  const { t } = useTranslation();
  const contactInfoStyles = {
    fontFamily: "arial, helvetica, sans-serif",
    fontSize: "16px",
  };

  return (
    <>
      <footer>
        <section className="container clearfix">
          <div className="row">
            <div className="met-footer wow bounceInLeft">
              <h3>{t("footer.tryBest")}</h3>
              <p>{t("footer.tryBestDescription")}</p>
              <div className="social-box">
                <a href="#">
                  <img src={HM1} alt="HM1" />
                </a>
                <a href="#">
                  <img src={HM2} alt="HM2" />
                </a>
                <a href="#">
                  <img src={HM3} alt="HM3" />
                </a>
                <a href="#">
                  <img src={HM4} alt="HM4" />
                </a>
                <a href="#">
                  <img src={HM5} alt="HM5" />
                </a>
              </div>
            </div>
            <div className="met-footer wow bounceInUp">
              <div className="h3">{t("footer.contactUs")}</div>
              <div>
                <div style={contactInfoStyles} className="mb-3">
                  <p>
                    <span>White Bai</span>
                  </p>
                  <p>TEL: +86-537-5174483</p>
                  <p>MOBILE/WHATSAPP/WECHAT: 86-537-5174483</p>
                </div>
                <div style={contactInfoStyles}>
                  <p>{t("footer.companyName")}</p>
                  <p>{t("footer.companyAddress")}</p>
                </div>
              </div>
            </div>
            <div className="met-footer foot-03 wow bounceInRight">
              <div className="h3">{t("footer.categories")}</div>
              <div className="footer-mobile-flex">
                <dl>
                  <dt>
                    <a href="truck-tire1.html">
                      <img
                        src={FTTYRE1}
                        width="50"
                        height="50"
                        alt="Truck Tire"
                      />
                    </a>
                  </dt>
                  <dd>
                    <a href="truck-tire1.html">{t("footer.truckTire")}</a>
                    <a href="truck-tire1.html" rel="nofollow">
                      {t("other.readMore")}
                    </a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="bus-tire1.html">
                      <img
                        src={FTTYRE2}
                        width="50"
                        height="50"
                        alt="Bus Tire"
                      />
                    </a>
                  </dt>
                  <dd>
                    <a href="bus-tire1.html">{t("footer.busTire")}</a>
                    <a href="bus-tire1.html" rel="nofollow">
                      {t("other.readMore")}
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <div className="copy wow bounceInUp">
          <div className="container clearfix">
            <ul className="links clearfix">
              <li id="li_Menu101_about-us">
                <a href="/about" className="inmenu">
                  {t("footer.tyreFactory")}
                </a>
              </li>
              <li id="li_Menu101_products">
                <a href="/products" className="inmenu">
                  {t("footer.product")}
                </a>
              </li>
              <li id="li_Menu101_newslist-1">
                <a href="/news" className="inmenu">
                  {t("footer.news")}
                </a>
              </li>
              <li id="li_Menu101_Info">
                <a href="/service" className="inmenu">
                  {t("footer.service")}
                </a>
              </li>
              <li id="li_Menu101_contact-us">
                <a href="/contact" className="inmenu">
                  {t("footer.contactUs")}
                </a>
              </li>
            </ul>
            <p>{t("footer.copyRight")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

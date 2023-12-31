import React, { useEffect, useState } from "react";
import TopButton_m from "../../../component/Button/TopButton_m";
import TopButton from "../../../component/Button/TopButton";
import Wechat from "../../../static/assets/picture/weixin.png";
import Weibo from "../../../static/assets/picture/weibo.png";
import Qzone from "../../../static/assets/picture/qzone.png";
import { useTranslation } from "react-i18next";

interface NewPrevNextOptions {
  nextTitle: string;
  prevTitle: string;
  nextUrl?: string;
  prevUrl?: string;
}

const NewPreNext = ({
  nextTitle,
  prevTitle,
  nextUrl,
  prevUrl,
}: NewPrevNextOptions) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();

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
      <div className="n_xq_s clearfix">
        <div className="fr n_xq_fx">
          {t("homepage.share")}
          <img className="h4" src={Wechat} />
          <a
            href="http://service.weibo.com/share/share.php?url=http://en.tltyre.com&title=Explosion scene | ROADONE debut at the SHANGHAI Tire Show, showing the national brand charm!-Roadone&pic=/uploads/image/2003/1J44R417-0-lp.jpg"
            target="_blank">
            <img className="h5" src={Weibo} />
          </a>
          <a
            target="_blank"
            href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://en.tltyre.com&title=Explosion scene | ROADONE debut at the SHANGHAI Tire Show, showing the national brand charm!-Roadone">
            <img className="h6" src={Qzone} />
          </a>
        </div>
      </div>

      <div className="n_xq_up">
        {t("homepage.prev")}:
        {prevUrl ? (
          <a href={prevUrl} className="next">
            <span>{prevTitle}</span>
          </a>
        ) : (
          <span>{prevTitle}</span>
        )}
      </div>
      <div className="n_xq_down">
        {t("homepage.next")}:
        {nextUrl ? (
          <a href={nextUrl} className="next">
            <span>{nextTitle}</span>
          </a>
        ) : (
          <span>{nextTitle}</span>
        )}
      </div>

      {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
    </>
  );
};

export default NewPreNext;

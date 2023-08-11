import React, { useEffect, useState } from "react";
import TopButton_m from "../../../component/Button/TopButton_m";
import TopButton from "../../../component/Button/TopButton";

const NewPreNext = ({ currentId, totalIds, onPrevClick, onNextClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
          分享
          <img className="h4" src="static/picture/new_weixin.jpg" />
          <a
            href="http://service.weibo.com/share/share.php?url=http://en.tltyre.com&title=Explosion scene | ROADONE debut at the SHANGHAI Tire Show, showing the national brand charm!-Roadone&pic=/uploads/image/2003/1J44R417-0-lp.jpg"
            target="_blank">
            <img className="h5" src="static/picture/new_sina.jpg" />
          </a>
          <a
            target="_blank"
            href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://en.tltyre.com&title=Explosion scene | ROADONE debut at the SHANGHAI Tire Show, showing the national brand charm!-Roadone">
            <img className="h6" src="static/picture/new_qzone.jpg" />
          </a>
        </div>
      </div>

      <div className="n_xq_up">
        <div
          onClick={onPrevClick}
          role="button"
          tabIndex={0}
          className={`${currentId === 1 ? "disabled" : ""} prev`}>
          Previous
        </div>
        <div
          onClick={onNextClick}
          role="button"
          tabIndex={0}
          className={`${currentId === totalIds ? "disabled" : ""} next`}>
          Next
        </div>
      </div>

      {windowWidth <= 990 ? <TopButton_m /> : <TopButton />}
    </>
  );
};

export default NewPreNext;

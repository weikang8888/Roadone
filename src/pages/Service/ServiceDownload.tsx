import React from "react";

import DownloadImage from "../../static/assets/picture/xiazai.jpg";
import UpImage from "../../static/assets/picture/up.jpg";

const ServiceDownload = () => {
  return (
    <>
      <div className="kt kt1">
        <div className="xiazai xiazai1">
          <ul>
            <li>
              <div className="clearfix">
                <span className="fl">
                  Roadone Product Catalogue (TYRE FOR PAKISTANI MARKET)
                </span>
                <a className="fr" href="/uploads/file/2003/1-200311164930.zip">
                  <img src={DownloadImage} title="Download" />
                </a>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">Roadone Product Catalogue</span>
                <a className="fr" href="/uploads/file/2003/2020ROADONE.pdf">
                  <img src={DownloadImage} title="Download" />
                </a>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="fl">Roadone Product Posters</span>
                <a className="fr" href="/uploads/file/2003/1-200311164H4.zip">
                  <img src={DownloadImage} title="Download" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="news_up kt_fenye">
          <div className="up_n kt_up">
            <img src={UpImage} title="TOP" />
            <span>TOP</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDownload;

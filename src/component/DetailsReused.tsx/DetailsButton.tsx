import React from "react";
import "./deatilsreused.css";

const DetailsButton = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="share-btn-list mt-5">
        <div
          className="share-btn facebook"
          data-type="facebook"
          title="Facebook"></div>
        <div
          className="share-btn twitter"
          data-type="twitter"
          title="Twitter"></div>
        <div
          className="share-btn linkedin"
          data-type="linkedin"
          title="Linkedin"></div>
        <div
          className="share-btn pinterest"
          data-type="pinterest"
          title="Pinterest"></div>
        <div
          className="share-btn print"
          data-type="print"
          title="Print"
          onClick={handlePrint}></div>
      </div>
    </>
  );
};
export default DetailsButton;

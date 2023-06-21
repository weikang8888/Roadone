import React, { useEffect, useState } from "react";
import "./subcontact.css";

const SubContact = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const toTopButton = document.getElementById("toTop");
      if (window.scrollY > 300) {
        toTopButton.classList.add("show");
      } else {
        toTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="wmkc">
        <ul className="wmkc-list">
          <li className="wmkc-email">
            <a
              href=""
              target="_blank"
              title="mailto:roadone@hixih.com.cn"
              id="F9">
              <i className="wmkc-icon"></i>
              <p>E-Mail</p>
            </a>
          </li>
          <li className="wmkc-whatsapp">
            <a href="" target="_blank" title="WhatsApp:8615764288507" id="F8">
              <i className="wmkc-icon"></i>
              <p>WhatsApp</p>
            </a>
          </li>
          <li className="wmkc-wechat">
            <a href="" title="Wechat:8615764288507" id="F8">
              <i className="wmkc-icon"></i>
              <p>Wechat</p>
            </a>
          </li>
        </ul>
        <div id="toTop" className="wmkc-top" onClick={handleScrollUp}>
          <i className="wmkc-icon"></i>
        </div>
      </div>
    </>
  );
};

export default SubContact;

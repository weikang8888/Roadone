import React from "react";
import "./button.css";

interface ButtonMainOption {
  href?: string;
}

const ButtonMain = ({ href }: ButtonMainOption) => {
  return (
    <>
      <a className="abouts-button" href={href}>
        READ MORE
      </a>
    </>
  );
};

export default ButtonMain;

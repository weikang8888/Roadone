import React from "react";
import "./button.css";
import { useTranslation } from "react-i18next";

interface ButtonMainOption {
  href?: string;
}

const ButtonMain = ({ href }: ButtonMainOption) => {
  const { t } = useTranslation();

  return (
    <>
      <a className="abouts-button" href={href}>
        {t("other.readMore")}
      </a>
    </>
  );
};

export default ButtonMain;

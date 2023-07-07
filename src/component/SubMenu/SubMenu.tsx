import React from "react";
import { useTranslation } from "react-i18next";

interface SubMenuOptions {
  currentpage: string;
  currentlink?: string;
  previouslink?: string;
  previouspage?: string;
  typelink?: string;
  typepage?: string;
  className?: string;
  onSubMenuClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    previousPage: string,
    currentPage: string,
    typePage: string
  ) => void;
}

const SubMenu: React.FC<SubMenuOptions> = ({
  currentpage,
  previouspage,
  currentlink,
  previouslink,
  typelink,
  typepage,
  className,
  onSubMenuClick,
}) => {
  const handlePreviousPageClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (onSubMenuClick) {
      onSubMenuClick(event, previouspage || "", "", typepage || "");
    }
  };

  const handleCurrentPageClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (onSubMenuClick) {
      onSubMenuClick(
        event,
        previouspage || "",
        currentpage || "",
        typepage || ""
      );
    }
  };
  const { t } = useTranslation();

  return (
    <div className="bPosition">
      <a href="/">{t("header.home")}</a>
      {previouslink ? (
        <>
          {previouspage && " > "}
          {previouspage && <a href={previouslink}>{previouspage}</a>}
        </>
      ) : (
        <>
          {previouspage && " > "}
          {previouspage && (
            <span onClick={handlePreviousPageClick} className={className}>
              {previouspage}
            </span>
          )}
        </>
      )}
      {currentlink ? (
        <>
          {currentpage && " > "}
          {currentpage && (
            <a href={currentlink} onClick={handleCurrentPageClick}>
              {currentpage}
            </a>
          )}
        </>
      ) : (
        <>
          {currentpage && " > "}
          {currentpage && (
            <span onClick={handleCurrentPageClick} className={className}>
              {currentpage}
            </span>
          )}
        </>
      )}
      {typelink ? (
        <>
          {typepage && " > "}
          {typepage && <a href={typelink}>{typepage}</a>}
        </>
      ) : (
        <>
          {typepage && " > "}
          {typepage && <span>{typepage}</span>}
        </>
      )}
    </div>
  );
};

export default SubMenu;

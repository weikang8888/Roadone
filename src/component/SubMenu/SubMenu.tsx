import React from "react";
import { NavLink } from "react-router-dom";

interface SubMenuOptions {
  currentpage: string;
  currentlink?: string;
  previouslink?: string;
  previouspage?: string;
}

const SubMenu = ({
  currentpage,
  previouspage,
  currentlink,
  previouslink,
}: SubMenuOptions) => {
  return (
    <>
      <div className="bPosition">
        <a href="/">Home</a>
        {previouspage && " > "}
        {previouspage && <a href={previouslink}>{previouspage}</a>}
        {" > "}
        {currentlink ? (
          <a href={currentlink}>{currentpage}</a>
        ) : (
          <span>{currentpage}</span>
        )}{" "}
      </div>
    </>
  );
};

export default SubMenu;

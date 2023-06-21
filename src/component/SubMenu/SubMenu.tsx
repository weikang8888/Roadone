import React from "react";
import { NavLink } from "react-router-dom";

interface SubMenuOptions {
  currentpage: string;
  currentlink: string;
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
        <a href={currentlink}>{currentpage}</a>
      </div>
    </>
  );
};

export default SubMenu;

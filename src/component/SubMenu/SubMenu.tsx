import React from "react";
import { NavLink } from "react-router-dom";

interface SubMenuOptions {
  currentpage: string;
  currentlink?: string;
  previouslink?: string;
  previouspage?: string;
  typelink?: string;
  typepage?: string;
}

const SubMenu = ({
  currentpage,
  previouspage,
  currentlink,
  previouslink,
  typelink,
  typepage,
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
        {typepage && " > "}
        {typepage && <a href={typelink}>{typepage}</a>}
      </div>
    </>
  );
};

export default SubMenu;

import React from "react";
import { NavLink } from "react-router-dom";

interface SubMenuOptions {
  currentpage: string;
}

const SubMenu = ({ currentpage }: SubMenuOptions) => {
  return (
    <>
      <div className="bPosition">
        <NavLink to="/">Home</NavLink>
        {" > "}
        {currentpage}
      </div>
    </>
  );
};

export default SubMenu;

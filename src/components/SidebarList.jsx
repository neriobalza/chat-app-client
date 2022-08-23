import React from "react";
import "../assets/styles/components/SidebarList.scss";

const SidebarList = ({ className = "", children }) => {
  return <ul className={`sidebar-list ${className}`}>{children}</ul>;
};

export default SidebarList;

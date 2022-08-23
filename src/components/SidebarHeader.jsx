import React from "react";
import "../assets/styles/components/SidebarHeader.scss";

import Searchbar from "../components/Searchbar";
import SidebarMenu from "./SidebarMenu";

const SidebarHeader = () => {
  return (
    <header className="sidebar-header">
      <SidebarMenu />

      <Searchbar id="input-search" name="input-search" placeholder="Search" />
    </header>
  );
};

export default SidebarHeader;

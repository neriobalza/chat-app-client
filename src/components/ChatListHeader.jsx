import React from "react";
import "../assets/styles/components/ChatListHeader.scss";

import InputSearch from "../components/InputSearch";
import { BiMenu } from "react-icons/bi";

const ChatListHeader = () => {
  return (
    <header className="chatlist__header">
      <button className="menu-button">
        <BiMenu />
      </button>

      <InputSearch id="input-search" name="input-search" placeholder="Search" />
    </header>
  );
};

export default ChatListHeader;

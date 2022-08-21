import React from "react";
import "../assets/styles/components/ChatListHeader.scss";

import InputSearch from "../components/InputSearch";
import {
  BiMenu,
  BiBookmark,
  BiUser,
  BiCog,
  BiMoon,
  BiMeteor,
  BiHelpCircle,
  BiBug,
} from "react-icons/bi";

const ChatListHeader = () => {
  const handleToggleMenu = () => {
    document.getElementById("main-menu").classList.toggle("active");
    document.getElementById("main-menu-button").classList.toggle("active");
  };

  return (
    <header className="chatlist__header">
      <button
        id="main-menu-button"
        className="menu-button"
        onClick={handleToggleMenu}
      >
        <BiMenu />
      </button>

      <nav className="main-menu" id="main-menu">
        <ul className="main-menu__list">
          <li className="main-menu__list--item">
            <BiBookmark />
            <p>Saved Messages</p>
          </li>
          <li className="main-menu__list--item">
            <BiUser />
            <p>Contacts</p>
          </li>
          <li className="main-menu__list--item">
            <BiCog />
            <p>Settings</p>
          </li>
          <li className="main-menu__list--item">
            <BiMoon />
            <p>Dark Mode</p>
          </li>
          <li className="main-menu__list--item">
            <BiMeteor />
            <p>Animations</p>
          </li>
          <li className="main-menu__list--item">
            <BiHelpCircle />
            <p>ChatApp Features</p>
          </li>
          <li className="main-menu__list--item">
            <BiBug />
            <p>Report Bug</p>
          </li>
        </ul>
        <p className="main-menu__app-version">ChatApp WebK 1.0.0</p>
      </nav>

      <InputSearch id="input-search" name="input-search" placeholder="Search" />
    </header>
  );
};

export default ChatListHeader;

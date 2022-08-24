import React, { useState } from "react";
import "../assets/styles/components/NewChatMenu.scss";

import { BiPencil, BiX, BiVolumeLow, BiUser, BiGroup } from "react-icons/bi";

const NewChatMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleOpenMenu = () => {
    setMenuActive(true);
    document.getElementById("new-chat-menu").classList.add("active");
    document.getElementById("new-chat-button").classList.add("active");
    window.addEventListener("click", mouseClick);
    window.addEventListener("mousemove", mouseMove);
  };

  const handleCloseMenu = () => {
    setMenuActive(false);
    document.getElementById("new-chat-menu").classList.remove("active");
    document.getElementById("new-chat-button").classList.remove("active");
    window.removeEventListener("click", mouseClick);
    window.removeEventListener("mousemove", mouseMove);
  };

  const mouseClick = (event) => {
    const isMenu = Array.from(event.target.classList).includes("close-menu");
    if (isMenu) handleCloseMenu();
  };

  const mouseMove = (event) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (event.clientY < windowHeight - 300) handleCloseMenu();
    if (event.clientX < 120 || event.clientX > 570) handleCloseMenu();
  };

  return (
    <div className="new-chat-menu">
      <button
        className="new-chat-menu__button"
        id="new-chat-button"
        onClick={handleOpenMenu}
      >
        <BiPencil className="pencil" />
        <BiX className="cross" />
      </button>

      {menuActive && <div className="new-chat-menu__overlay close-menu"></div>}

      <nav className="new-chat-menu__nav" id="new-chat-menu">
        <ul className="new-chat-menu__list">
          <li className="new-chat-menu__list--item">
            <BiVolumeLow />
            <p>New Channel</p>
          </li>
          <li className="new-chat-menu__list--item">
            <BiGroup />
            <p>New Group</p>
          </li>
          <li className="new-chat-menu__list--item">
            <BiUser />
            <p>New Private Chat</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewChatMenu;

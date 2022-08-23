import React from "react";
import "../assets/styles/components/SidebarMenu.scss";
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

const SidebarMenu = () => {
  const handleToggleMenu = () => {
    document.getElementById("main-menu").classList.toggle("active");
    document.getElementById("main-menu-button").classList.toggle("active");
    window.addEventListener("mousemove", mouseMove);
    setTimeout(() => {
      // window.addEventListener("click", mouseClick);
    }, 500);
  };

  const handleCloseMenu = () => {
    document.getElementById("main-menu").classList.remove("active");
    document.getElementById("main-menu-button").classList.remove("active");
    window.removeEventListener("mousemove", mouseMove);
  };

  // const mouseClick = (event) => {
  //   const isMenu = Array.from(event.target.classList).includes("menu");
  //   console.log(isMenu);
  // };

  const mouseMove = (event) => {
    if (event.clientX > 420 || event.clientY > 440) handleCloseMenu();
  };

  return (
    <div className="sidebar-menu">
      <button
        id="main-menu-button"
        className="sidebar-menu__button"
        onClick={handleToggleMenu}
      >
        <BiMenu />
      </button>

      <nav className="sidebar-menu__nav" id="main-menu">
        <ul className="sidebar-menu__list">
          <li className="sidebar-menu__list--item">
            <BiBookmark />
            <p>Saved Messages</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiUser />
            <p>Contacts</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiCog />
            <p>Settings</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiMoon />
            <p>Dark Mode</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiMeteor />
            <p>Animations</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiHelpCircle />
            <p>ChatApp Features</p>
          </li>
          <li className="sidebar-menu__list--item">
            <BiBug />
            <p>Report Bug</p>
          </li>
        </ul>
        <p className="sidebar-menu__app-version">ChatApp WebK 1.0.0</p>
      </nav>
    </div>
  );
};

export default SidebarMenu;

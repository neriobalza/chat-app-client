import React from "react";

import "../assets/styles/containers/ChatListContainer.scss";
import { BiPencil, BiMenu } from "react-icons/bi";

const ChatListContainer = () => {
  return (
    <section className="chatlist-container">
      <div className="chatlist">
        <header className="chatlist__header">
          <button>
            <BiMenu />
          </button>
          <input type="text" />
        </header>
        <ul className="chatlist__list"></ul>
      </div>

      <div className="cotactlist">
        <ul className="contactlist__list"></ul>
      </div>

      <button className="new-chat">
        <BiPencil />
      </button>
    </section>
  );
};

export default ChatListContainer;

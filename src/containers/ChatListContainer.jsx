import React from "react";
import "../assets/styles/containers/ChatListContainer.scss";

import ChatListHeader from "../components/ChatListHeader";
import { BiPencil } from "react-icons/bi";

const ChatListContainer = () => {
  return (
    <section className="chatlist-container">
      <ChatListHeader />

      <ul className="chatlist"></ul>

      <ul className="cotactlist"></ul>

      <button className="new-chat">
        <BiPencil />
      </button>
    </section>
  );
};

export default ChatListContainer;

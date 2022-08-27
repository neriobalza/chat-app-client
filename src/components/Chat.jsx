import React from "react";
import "../assets/styles/components/Chat.scss";

import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <ul className="chat-messages"></ul>

      <div className="chat-input"></div>
    </div>
  );
};

export default Chat;

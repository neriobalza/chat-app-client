import React from "react";
import "../assets/styles/components/Chat.scss";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat-wrapper">
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;

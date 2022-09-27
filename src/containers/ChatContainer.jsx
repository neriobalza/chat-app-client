import React from "react";
import "../assets/styles/containers/ChatContainer.scss";

import Chat from "../components/Chat";
import ChatBackground from "../components/ChatBackground";

const ChatContainer = () => {
  return (
    <section className="chat-container">
      <ChatBackground />
      <Chat />
    </section>
  );
};

export default ChatContainer;

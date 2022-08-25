import React from "react";
import "../assets/styles/containers/ChatContainer.scss";

import Chat from "../components/Chat";

const ChatContainer = () => {
  return (
    <section className="chat-container">
      <div className="chat-background"></div>
      <Chat />
    </section>
  );
};

export default ChatContainer;

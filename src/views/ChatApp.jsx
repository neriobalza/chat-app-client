import React from "react";

import ChatSidebar from "../containers/ChatSidebar";
import ChatContainer from "../containers/ChatContainer";

import "../assets/styles/views/ChatApp.scss";

const ChatApp = () => {
  return (
    <main className="chat-app">
      <ChatSidebar />
      <ChatContainer />
    </main>
  );
};

export default ChatApp;

import React from "react";

import Sidebar from "../containers/Sidebar";
import ChatContainer from "../containers/ChatContainer";

import "../assets/styles/views/ChatApp.scss";

const ChatApp = () => {
  return (
    <main className="chat-app">
      <Sidebar />
      <ChatContainer />
    </main>
  );
};

export default ChatApp;

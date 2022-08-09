/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import ChatListContainer from "../containers/ChatListContainer";
import ChatContainer from "../containers/ChatContainer";

import "../assets/styles/views/ChatApp.scss";

const ChatApp = () => {
  return (
    <main className="chat-app">
      <ChatListContainer />
      <ChatContainer />
    </main>
  );
};

export default ChatApp;

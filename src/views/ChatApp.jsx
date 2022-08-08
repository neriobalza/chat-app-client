/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import ChatsList from "../components/ChatsList";
import ContactsList from "../components/ContactsList";
import Chat from "../components/Chat";

import "../assets/styles/views/ChatApp.scss";

const ChatApp = () => {
  return (
    <main className="chat-app">
      <section className="main-container">
        <ChatsList />
        <ContactsList />
      </section>
      <section className="chat-container">
        <div className="chat-background">
          <Chat />
        </div>
      </section>
    </main>
  );
};

export default ChatApp;

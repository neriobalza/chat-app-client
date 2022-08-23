import React from "react";
import "../assets/styles/containers/ChatSidebar.scss";

import SidebarHeader from "../components/SidebarHeader";
import NewChatButton from "../components/NewChatButton";
import SidebarList from "../components/SidebarList";
import ChatPreview from "../components/ChatPreview";

const ChatSidebar = () => {
  const chats = [
    {
      person: "Nerio Balza",
      messages: [],
      mute: false,
      image: "",
    },
    {
      person: "Nerio Balza",
      messages: [],
      mute: false,
      image: "",
    },
    {
      person: "Nerio Balza",
      messages: [],
      mute: false,
      image: "",
    },
  ];

  return (
    <section className="chat-sidebar">
      <SidebarHeader />
      <section className="lists-container">
        <SidebarList className="chats">
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </SidebarList>
        <SidebarList className="contacts">
          <h2>Contacts</h2>
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </SidebarList>
      </section>
      <NewChatButton />
    </section>
  );
};

export default ChatSidebar;

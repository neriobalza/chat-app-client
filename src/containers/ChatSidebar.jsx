import React from "react";
import "../assets/styles/containers/ChatSidebar.scss";

import SidebarHeader from "../components/SidebarHeader";
import NewChatMenu from "../components/NewChatMenu";
import SidebarList from "../components/SidebarList";
import ChatPreview from "../components/ChatPreview";
import ContactPreview from "../components/ContactPreview";

const ChatSidebar = () => {
  // eslint-disable-next-line no-unused-vars
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
        </SidebarList>
        <SidebarList className="contacts">
          <h2>Contacts</h2>
          <ContactPreview />
        </SidebarList>
      </section>

      <NewChatMenu />
    </section>
  );
};

export default ChatSidebar;

import React from "react";
import "../assets/styles/containers/ChatSidebar.scss";

import SidebarHeader from "../components/SidebarHeader";
import NewChatMenu from "../components/NewChatMenu";
import SidebarList from "../components/SidebarList";
import ChatPreview from "../components/ChatPreview";
import ContactPreview from "../components/ContactPreview";

const ChatSidebar = () => {
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

import React from "react";
import "../assets/styles/components/ChatHeader.scss";

const ChatHeader = () => {
  return (
    <header className="chat-header">
      <div className="chat-header__user">
        <figure className="chat-header__user-avatar">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </figure>
        <div className="chat-header__user-info">
          <h2>Maria Carrero</h2>
          <p>last seen recently</p>
        </div>
      </div>
      <div className="chat-header__buttons"></div>
    </header>
  );
};

export default ChatHeader;

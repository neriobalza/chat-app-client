import React from "react";
import "../assets/styles/components/NewChatButton.scss";

import { BiPencil } from "react-icons/bi";

const NewChatButton = () => {
  return (
    <button className="new-chat-button">
      <BiPencil className="pencil" />
    </button>
  );
};

export default NewChatButton;

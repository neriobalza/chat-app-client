import React from "react";
import "../assets/styles/components/ChatPreview.scss";

const ChatPreview = ({ className = "", data }) => {
  return (
    <div className={"chat-preview " + className}>
      <figure className="image-container">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </figure>
      <div className="data-container">
        <p>
          <span className="name">Maria Carrero</span>
          <span className="hour">10:30</span>
        </p>
        <p>
          <span className="last-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            autem numquam ullam, repellendus placeat, itaque eum id iure tenetur
            accusamus deserunt odit provident laborum delectus praesentium
            veritatis natus est quos.
          </span>
          <span className="unread-message">12</span>
        </p>
      </div>
    </div>
  );
};

export default ChatPreview;

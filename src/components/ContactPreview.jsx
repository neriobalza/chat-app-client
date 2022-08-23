import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/ContactPreview.scss";

const ContactPreview = () => {
  return (
    <Link to="/" className="contact-preview">
      <figure className="image-container">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </figure>
      <div className="data-container">
        <p className="name">Maria Carrero</p>
        <p className="last-seen">last seen recently</p>
      </div>
    </Link>
  );
};

export default ContactPreview;

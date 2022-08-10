import React from "react";
import "../assets/styles/components/Input.scss";

const Input = ({ id, name, className, type, placeholder }) => {
  return (
    <input
      className={`input ${className ? className : ""}`}
      type={type ? type : "text"}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;

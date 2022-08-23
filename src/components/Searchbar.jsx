import React from "react";
import "../assets/styles/components/Searchbar.scss";

import Input from "./Input";
import { BiSearch } from "react-icons/bi";

const Searchbar = ({ id, name, className, type, placeholder }) => {
  return (
    <label htmlFor={id} className="searchbar">
      <Input
        className="search"
        id={id}
        name={name}
        classNam={className}
        type={type}
        placeholder={placeholder}
      />

      <BiSearch className="search-icon" />
    </label>
  );
};

export default Searchbar;

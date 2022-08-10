import React from "react";
import "../assets/styles/components/InputSearch.scss";

import Input from "./Input";
import { BiSearch } from "react-icons/bi";

const InputSearch = ({ id, name, className, type, placeholder }) => {
  return (
    <div className="input-search">
      <Input
        className="search"
        id={id}
        name={name}
        classNam={className}
        type={type}
        placeholder={placeholder}
      />

      <BiSearch className="search-icon" />
    </div>
  );
};

export default InputSearch;
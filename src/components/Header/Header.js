import React from "react";
import { BsChevronDown, BsList } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="dropdown">
        <BsChevronDown className="dropdown__svg" color="white" />
      </div>
      <div className="list">
        <BsList className="list__svg" color="white" />
      </div>
    </div>
  );
};

export default Header;

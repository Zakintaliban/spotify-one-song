import React from "react";
import "./Control.css";
import { BsShuffle } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
const Control = () => {
  return (
    <div className="controller">
      <div className="buttons">
        <div className="shuffle">
          <BsShuffle className="shuffle__svg" color="white" />
        </div>
        <div className="repeat">
          <FiRepeat className="repeat__svg" color="white" />
        </div>
      </div>
      <div className="control"></div>
      <div className="volume"></div>
    </div>
  );
};

export default Control;

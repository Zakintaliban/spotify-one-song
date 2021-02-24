import React from "react";
import "./Control.css";
import { BsShuffle, BsFillVolumeUpFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
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
      <div className="control">
        <div className="prev">
          <GiPreviousButton className="prev__svg" color="white" />
        </div>
        <div className="play">
          <FaRegPlayCircle className="play__svg" color="white" />
        </div>
        <div className="next">
          <GiNextButton className="next__svg" color="white" />
        </div>
      </div>
      <div className="vol">
        <BsFillVolumeUpFill className="vol__svg" color="white" />
      </div>
    </div>
  );
};

export default Control;

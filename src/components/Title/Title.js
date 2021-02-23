import React from "react";
import {
  HiOutlinePlusCircle,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import "./Title.css";
const Title = () => {
  return (
    <div className="title">
      <div className="plus">
        <HiOutlinePlusCircle color="white" className="plus__svg" />
      </div>
      <div className="title__container">
        <div className="title__title">
          <h3>Feeling Lonely</h3>
        </div>
        <div className="title__sub">
          <h4>boy pablo</h4>
        </div>
      </div>
      <div className="dots">
        <HiOutlineDotsCircleHorizontal color="white" className="dots__svg" />
      </div>
    </div>
  );
};

export default Title;

import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="song-progress-container">
      <p className="timer-start">0:00</p>
      <div className="song-progress">
        <div className="song-expired"></div>
      </div>
      <p className="timer-end">3:17</p>
    </div>
  );
};

export default Progress;

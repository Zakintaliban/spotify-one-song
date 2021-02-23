import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <div class="song-progress-container">
      <p class="timer-start">0:00</p>
      <div class="song-progress">
        <div class="song-expired"></div>
      </div>
      <p class="timer-end">3:17</p>
    </div>
  );
};

export default Progress;

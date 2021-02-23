import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Title from "./components/Title/Title";
import Progress from "./components/Progress/Progress";
import Controller from "./components/Control/Control";
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Title />
      <Progress />
      <Controller />
    </div>
  );
}

export default App;

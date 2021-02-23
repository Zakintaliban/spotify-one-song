import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Control from "./components/Control/Control";
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Control />
    </div>
  );
}

export default App;

import React from "react";
import List from "./components/List/List";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <List />
    </div>
  );
}

export default App;

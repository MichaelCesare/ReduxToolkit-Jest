import React from "react";

import { UIOptions } from "./components/UIOptions";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Redux ToolKit</h1>
      <h2>Jest Testing!</h2>
      <p>Redux testing on reducers, selectors, and state</p>
      <UIOptions />
    </div>
  );
}

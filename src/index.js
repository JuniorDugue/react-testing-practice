import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button/Button";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button label="click me"></Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// notes

// npm install @testing-library/react react-test-render jest-dom --save-dev
// to install necessary testing libraries, 
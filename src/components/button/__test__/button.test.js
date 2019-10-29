import React from "react";
import ReactDOM from "react-dom"; //since we need to render stuff
//then import the component that we're testing
import Button from "./../Button";

// import {isTSAnyKeyword} from "@babel/types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";

const root = document.querySelector("#root");
const AppRender = () => {
  render(<App />, root);
};

AppRender();

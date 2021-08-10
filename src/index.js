import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";
import { AppProvider } from "./core/context";

const root = document.querySelector("#root");
const AppRender = () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>,
    root
  );
};

AppRender();

import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Content } from "./Templates/Content";
import { Footer } from "./Templates/Footer";
import { Header } from "./Templates/Header";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { AppProvider, useAppContext } from "./core/context";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppProvider>
        <AppWrapper>
          <GlobalStyle />
          <Header themeToggler={themeToggler} theme={theme} />
          <Content />
          <Footer />
        </AppWrapper>
      </AppProvider>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  width: 100vw;
  height: 100vh;
`;

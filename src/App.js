import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Content } from "./components/Content";
import { Footer } from "./components//Footer";
import { Header } from "./components//Header";
import { AppProvider, useAppContext } from "./core/context";
import { AppWrapper } from "./lib/Styled/Styled";
import { ThemeProvider } from "styled-components";

export const App = () => {
  let { theme } = useAppContext();
  return (
    <AppProvider>
      {/* <ThemeProvider value={theme}> */}
        <AppWrapper>
          <GlobalStyle />
          <Header />
          <Content />
          <Footer />
        </AppWrapper>
      {/* </ThemeProvider> */}
    </AppProvider>
  );
};

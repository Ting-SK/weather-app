import React from "react";
import { GlobalStyle, AppWrapper } from "./GlobalStyle";
import { Content } from "./components/ui/Content";
import { Footer } from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
import { useAppContext } from "./core/context";
import { ThemeProvider } from "styled-components";

export const App = () => {
  let { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Header />
        <Content />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

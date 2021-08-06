import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Content } from "./Templates/Content";
import { Footer } from "./Templates/Footer";
import { Header } from "./Templates/Header";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { AppProvider } from "./core/context";

export const App = () => {
  const [value, setValue] = useState("");

  function onChangeValue(e) {
    setValue(e.target.value);
  }
  function onSubmitValue(e) {
    e.preventDefault();
    setCity(value);
    setValue("");
  }
  console.log("value", value);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    clouds: "",
    main: "",
    weather: "",
    wind: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const API_KEY = `594e5978ad1b3ecaa1651cfb29c9a33d`;
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setWeather({
          clouds: result?.clouds,
          main: result?.main,
          weather: result?.weather,
          wind: result?.wind,
        });
        setIsLoading(false);
      })
      .catch((error) => alert("error", error));
  }, [city]);

  console.log("city", city);
  console.log("weather", weather);

  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    setShowWeather(!showWeather);
  }, [weather]);

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  console.log("theme", theme);

  const inputEl = useRef(null);
  const onButtonClick = (e) => {
    e.preventDefault();
    if (!showWeather) {
      inputEl.current.focus();
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppProvider>
        <AppWrapper>
          <GlobalStyle />
          <Header
            themeToggler={themeToggler}
            theme={theme}
            onButtonClick={onButtonClick}
          />
          <Content
            isLoading={isLoading}
            showWeather={showWeather}
            weather={weather}
            value={value}
            onChangeValue={onChangeValue}
            onSubmitValue={onSubmitValue}
            inputEl={inputEl}
          />
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

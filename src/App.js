import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Content } from "./Templates/Content";
import { Footer } from "./Templates/Footer";
import { Header } from "./Templates/Header";

export const App = () => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    clouds: "",
    main: "",
    weather: "",
    wind: "",
  });
  const [showWeather, setShowWeather] = useState(false);
  const [check, setCheck] = useState(false);

  function onChangeValue(e) {
    setValue(e.target.value);
  }

  console.log("value", value);

  function onSubmitValue(e) {
    e.preventDefault();
    setCity(value);
    setValue("");
  }
  console.log("city", city);

  useEffect(() => {
    const API_KEY = `594e5978ad1b3ecaa1651cfb29c9a33d`;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWeather({
          clouds: result?.clouds,
          main: result?.main,
          weather: result?.weather,
          wind: result?.wind,
        });
      })
      .catch((error) => console.log("error", error));
  }, [city]);
  console.log("weather", weather);

  useEffect(() => {
    setShowWeather(!showWeather);
  }, [weather]);

  function onCheck() {
    setCheck(!check);
  }
  console.log("check", check);

  const inputEl = useRef(null);
  const onButtonClick = (e) => {
    e.preventDefault();
    if (!showWeather) {
      inputEl.current.focus();
    }
  };

  const themes = {
    light: {
      background: "#fff",
      headFoot: "#9c8cbb",
      headFootText: "#fafafa",
    },
    dark: {
      background: "gray",
      headFoot: "#000",
      headFootText: "brown",
    },
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <Header
        onButtonClick={onButtonClick}
        city={city}
        onCheck={onCheck}
        check={check}
      />
      <Content
        showWeather={showWeather}
        weather={weather}
        value={value}
        onChangeValue={onChangeValue}
        onSubmitValue={onSubmitValue}
        inputEl={inputEl}
      />
      <Footer />
    </AppWrapper>
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

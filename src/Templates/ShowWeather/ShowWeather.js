import React from "react";
import styled from "styled-components";

export const ShowWeather = ({ weather }) => {
  if (typeof weather.wind !== "undefined") {
    if (weather.wind.deg === 0 || weather.wind.deg === 360) {
      weather.wind.deg = "Северный";
    }
    if (weather.wind.deg > 0 && weather.wind.deg < 90) {
      weather.wind.deg = "Северо-восточный";
    }
    if (weather.wind.deg === "90") {
      weather.wind.deg = "Восточный";
    }
    if (weather.wind.deg > 90 && weather.wind.deg < 180) {
      weather.wind.deg = "Юго-восточный";
    }
    if (weather.wind.deg === 180) {
      weather.wind.deg = "Южный";
    }
    if (weather.wind.deg > 180 && weather.wind.deg < 270) {
      weather.wind.deg = "Юго-западный";
    }
    if (weather.wind.deg === 270) {
      weather.wind.deg = "Западный";
    }
    if (weather.wind.deg > 270 && weather.wind.deg < 360) {
      weather.wind.deg = "Северо-западный";
    }
  }
  return (
    <ShowWeatherWrapper>
      <WeathTitle>Погода на сегодня</WeathTitle>
      <p style={{ lineHeight: "30px", margin: "0" }}>
        Температура: {weather?.main?.temp} ℃
        <br />
        Максимальная температура: {weather?.main?.temp_max} ℃
        <br />
        Минимальная температура: {weather?.main?.temp_min} ℃
        <br />
        Облачность: {weather?.clouds?.all}%
        <br />
        Влажность: {weather?.main?.humidity}%
        <br />
        Атмосферное давление: {(weather?.main?.pressure / 1.33).toFixed(0)} мм
        рт.ст.
        <br />
        Погода: {weather.weather ? weather?.weather[0].main : ""}
        {weather.weather ? weather?.weather[0].description : ""}
        <br />
        Ветер: {weather?.wind?.deg}, {weather?.wind?.speed} м/с
      </p>
    </ShowWeatherWrapper>
  );
};

const WeathTitle = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin: 10px 0;
`;
const ShowWeatherWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0;
`;

import React from "react";
import styled from "styled-components";

export const ShowWeather = ({ weatherData }) => {
  if (typeof weatherData.wind !== "undefined") {
    if (weatherData.wind.deg === 0 || weatherData.wind.deg === 360) {
      weatherData.wind.deg = "Северный";
    }
    if (weatherData.wind.deg > 0 && weatherData.wind.deg < 90) {
      weatherData.wind.deg = "Северо-восточный";
    }
    if (weatherData.wind.deg === "90") {
      weatherData.wind.deg = "Восточный";
    }
    if (weatherData.wind.deg > 90 && weatherData.wind.deg < 180) {
      weatherData.wind.deg = "Юго-восточный";
    }
    if (weatherData.wind.deg === 180) {
      weatherData.wind.deg = "Южный";
    }
    if (weatherData.wind.deg > 180 && weatherData.wind.deg < 270) {
      weatherData.wind.deg = "Юго-западный";
    }
    if (weatherData.wind.deg === 270) {
      weatherData.wind.deg = "Западный";
    }
    if (weatherData.wind.deg > 270 && weatherData.wind.deg < 360) {
      weatherData.wind.deg = "Северо-западный";
    }
  }
  return (
    <ShowWeatherWrapper>
      <WeathTitle>Погода на сегодня</WeathTitle>
      <p style={{ lineHeight: "30px", margin: "0" }}>
        Температура: {weatherData?.main?.temp} ℃
        <br />
        Максимальная температура: {weatherData?.main?.temp_max} ℃
        <br />
        Минимальная температура: {weatherData?.main?.temp_min} ℃
        <br />
        Облачность: {weatherData?.clouds?.all}%
        <br />
        Влажность: {weatherData?.main?.humidity}%
        <br />
        Атмосферное давление: {(weatherData?.main?.pressure / 1.33).toFixed(
          0
        )}{" "}
        мм рт.ст.
        <br />
        Погода:{" "}
        {weatherData.weatherData ? weatherData?.weatherData[0].main : ""}
        {weatherData.weatherData ? weatherData?.weatherData[0].description : ""}
        <br />
        Ветер: {weatherData?.wind?.deg}, {weatherData?.wind?.speed} м/с
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
  margin-top: 30px;
  padding: 0;
`;

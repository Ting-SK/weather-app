import React from "react";
import { useWindDeg } from "../../../hooks/useWindDeg";
import { ResultTitle, ShowWeatherWrapper } from "./styles";

export const ShowWeather = ({ weatherData }) => {
  let [winDeg] = useWindDeg(weatherData);
  return (
    <ShowWeatherWrapper>
      <ResultTitle>Погода на сегодня</ResultTitle>
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
        Погода: {weatherData?.weather[0]?.main}, {weatherData?.weather[0]?.description}
        <br />
        Ветер: {winDeg}, {weatherData?.wind?.speed} м/с
      </p>
    </ShowWeatherWrapper>
  );
};

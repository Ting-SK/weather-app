import React from "react";
import { useWindDeg } from "../../hooks/useWindDeg";
import { ResultTitle, ShowWeatherWrapper } from "../../lib/Styled/Styled";

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
        Погода:{" "}
        {weatherData.weatherData ? weatherData?.weatherData[0].main : ""}
        {weatherData.weatherData ? weatherData?.weatherData[0].description : ""}
        <br />
        Ветер: {winDeg}, {weatherData?.wind?.speed} м/с
      </p>
    </ShowWeatherWrapper>
  );
};

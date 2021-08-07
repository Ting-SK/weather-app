import React, { useEffect, useState } from "react";
import { useAppContext } from "../core/context";

export const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState({
    clouds: "",
    main: "",
    weather: "",
    wind: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const API_KEY = `594e5978ad1b3ecaa1651cfb29c9a33d`;
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod === "404" ) {
          setError('Город не найден');
        }
        if (result.cod === "400") {
          setError('Напишите название города');
        }
        setWeatherData({
          clouds: result?.clouds,
          main: result?.main,
          weather: result?.weather,
          wind: result?.wind,
        });
        setIsLoading(false);
        console.log("result", result);
      })
      .catch((error) => setError(error));
  }, [city]);
  return [weatherData, isLoading, error];
};

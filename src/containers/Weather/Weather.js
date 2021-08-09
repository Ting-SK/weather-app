import React from "react";
import { useAppContext } from "../../core/context";
import { useWeather } from "../../hooks/useWeather";
import { WeathTitle } from "../../lib/Styled/Styled";
import { ShowWeather } from "../../components/ShowWeather";

export const Weather = () => {
  let { city } = useAppContext();
  const [weatherData, isLoading, error] = useWeather(city);
  if (isLoading) {
    return <WeathTitle>Загрузка</WeathTitle>;
  }
  if (error) {
    return <WeathTitle>{error}</WeathTitle>;
  }

  return <ShowWeather weatherData={weatherData} />;
};

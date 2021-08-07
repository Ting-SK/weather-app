import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../core/context";
import { useWeather } from "../../hooks/useWeather";
import { ShowWeather } from "../ShowWeather";

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

const WeathTitle = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin: 30% 0;
`;

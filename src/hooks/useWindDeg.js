import { useEffect, useState } from "react";

export const useWindDeg = (weatherData) => {
  const [winDeg, setWinDeg] = useState("no-data");
  // useEffect(() => {
  //   console.log(weatherData.weather[0].description);
  // }, [weatherData]);
  useEffect(() => {
    if (weatherData.wind.deg === 0 || weatherData.wind.deg === 360) {
      setWinDeg("Северный");
    }
    if (weatherData.wind.deg > 0 && weatherData.wind.deg < 90) {
      setWinDeg("Северо-восточный");
    }
    if (weatherData.wind.deg === 90) {
      setWinDeg("Восточный");
    }
    if (weatherData.wind.deg > 90 && weatherData.wind.deg < 180) {
      setWinDeg("Юго-восточный");
    }
    if (weatherData.wind.deg === 180) {
      setWinDeg("Южный");
    }
    if (weatherData.wind.deg > 180 && weatherData.wind.deg < 270) {
      setWinDeg("Юго-западный");
    }
    if (weatherData.wind.deg === 270) {
      setWinDeg("Западный");
    }
    if (weatherData.wind.deg > 270 && weatherData.wind.deg < 360) {
      setWinDeg("Северо-западный");
    }
  }, [weatherData]);

  return [winDeg];
};

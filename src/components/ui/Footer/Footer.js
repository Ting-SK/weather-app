import React from "react";
import OpenWeather from "../../../assets/icons/OpenWeather.png";
import { Links } from "../Links";
import { FooterWrapper, ImgAPI } from "./styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://openweathermap.org/">
        <ImgAPI src={OpenWeather} alt="asda" />
      </a>
      <Links />
    </FooterWrapper>
  );
};

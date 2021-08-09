import React from "react";
import OpenWeather from "../../assets/icons/OpenWeather.png";
import { FooterWrapper, ImgAPI } from "../../lib/Styled/Styled";
import { Links } from "../Links";

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

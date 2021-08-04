import React from "react";
import styled from "styled-components";
import OpenWeather from "../../image/OpenWeather.png";
import { GitHub } from "../../components/GitHub";

export const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://openweathermap.org/">
        <ImgAPI src={OpenWeather} alt="asda" />
      </a>
      <GitHub />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #9c8cbb;
`;

const ImgAPI = styled.img`
  width: 100px;
`;
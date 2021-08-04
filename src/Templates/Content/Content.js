import React from "react";
import styled from "styled-components";
import { ShowWeather } from "../ShowWeather";
import { WriteCity } from "../WriteCity";

export const Content = (props) => {
  let { showWeather } = props;
  return (
    <ContentWrapper>
      <WriteCity {...props} />
      {showWeather && <ShowWeather {...props} />}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  display: flex;
  padding: 10px;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-top: 20px;
`;

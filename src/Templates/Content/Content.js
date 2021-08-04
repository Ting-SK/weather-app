import React from "react";
import styled from "styled-components";
import { ShowWeather } from "../ShowWeather";
import { WriteCity } from "../WriteCity";

export const Content = (props) => {
  let { showWeather, isLoading, weather } = props;
  return (
    <ContentWrapper>
      <WriteCity {...props} />
      {isLoading ? (
        <LoadTitle>Loading ...</LoadTitle>
      ) : (
        showWeather && (
          <>
            {weather.main !== undefined ? (
              <ShowWeather {...props} />
            ) : (
              <Title>Указанный город не найден</Title>
            )}
          </>
        )
      )}
    </ContentWrapper>
  );
};
const LoadTitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 40%;
`;
const Title = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30%;
`;
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

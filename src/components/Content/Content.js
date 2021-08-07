import React from "react";
import styled from "styled-components";
import { InputCity } from "../../containers/InputCity";
import { Weather } from "../../containers/Weather";

export const Content = () => {
  return (
    <ContentWrapper>
      <InputCity />
      <Weather />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  display: flex;
  padding: 10px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px;
`;

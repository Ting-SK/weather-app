import React from "react";
import styled from "styled-components";
import { InputCity } from "../../components/InputCity";
import { useAppContext } from "../../core/context";
import { Weather } from "../Weather";
import { WriteCity } from "../WriteCity";

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

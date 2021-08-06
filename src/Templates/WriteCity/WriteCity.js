import React from "react";
import styled from "styled-components";
import { InputCity } from "../../components/InputCity";
import { useAppContext } from "../../core/context";

export const WriteCity = () => {
  let { city } = useAppContext();
  return (
    <>
      {!city && <Title>Пожалуйста, напишите название вашего города</Title>}
      <InputCity />
    </>
  );
};

const Title = styled.p`
  font-size: 16px;
  text-align: center;
`;

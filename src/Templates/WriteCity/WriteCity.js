import React from "react";
import styled from "styled-components";
import { InputCity } from "../../components/InputCity";

export const WriteCity = (props) => {
  let { onSubmitValue, showWeather } = props;
  // let button;
  // if (showWeather) {
  //   button = <Button onClick={onSubmitValue}>Выбрать другой город</Button>;
  // } else {
  //   button = <Button onClick={onSubmitValue}>Поиск</Button>;
  // }
  return (
    <>
      {!showWeather && (
        <Title>Пожалуйста, напишите название вашего города</Title>
      )}
      {!showWeather && <InputCity {...props} />}
      {/* {button} */}
    </>
  );
};

const Title = styled.p`
  font-size: 16px;
  text-align: center;
`;
const Button = styled.button`
  // color: #fafafa;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.toggleBorder};
  margin-top: 20px;
  width: 285px;
  height: 40px;
`;

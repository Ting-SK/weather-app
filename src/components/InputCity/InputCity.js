import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../core/context";
import { Input } from "../Input/Input";

export const InputCity = () => {
  let { setCity, value, setValue } = useAppContext();
  const onSubmitForm = (e) => {
    e.preventDefault();
    setCity(value);
    setValue("");
  };
  return (
    <Form onSubmit={onSubmitForm}>
      <Input />
      <Button>Поиск</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  // color: #fafafa;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.toggleBorder};
  margin-top: 20px;
  width: 285px;
  height: 40px;
`;

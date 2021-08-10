import React from "react";
import { useAppContext } from "../../core/context";
import { Input } from "../ui/Input";
import { Button, Form } from "./styles";

export const ChangeCity = () => {
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

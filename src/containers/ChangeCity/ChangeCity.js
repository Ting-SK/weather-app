import React from "react";
import { useAppContext } from "../../core/context";
import { Button, Form } from "../../lib/Styled/Styled";
import { Input } from "../../components/Input";

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

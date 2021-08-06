import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../core/context";

export const InputCity = (props) => {
  // let { inputEl, onChangeValue, value, onSubmitValue } = props;
  const [value, setValue] = useState("");

  let { setCity } = useAppContext();
  const onSubmitForm = (e) => {
    e.preventDefault();
    setCity(value)
  };
  // let button;
  //   if (showWeather) {
  //     button = <Button onClick={onSubmitValue}>Выбрать другой город</Button>;
  //   } else {
  //   }
  console.log(useAppContext())
  return (
    <form onSubmit={onSubmitForm}>
      <InputPlace
        // ref={inputEl}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Название города"
      />
      <button >Поиск</button>
    </form>
  );
};

const InputPlace = styled.input`
  width: 280px;
  height: 30px;
  color: #000;
  background: transparent;
  border-bottom: 1px solid #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  &:focus {
    box-shadow: 0px 0.2em 2.5em #c4c4c4;
    transform: scale(1.025);
  }
`;

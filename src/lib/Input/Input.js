import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../core/context";

export const Input = () => {
  let { setValue, value, inputEl } = useAppContext();
  return (
    <InputPlace
      ref={inputEl}
      value={value}
      onChange={(e) => setValue(e.target.value.trim())}
      placeholder="Название города"
    />
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

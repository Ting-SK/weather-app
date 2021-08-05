import React from "react";
import styled from "styled-components";

export const InputCity = (props) => {
  let { inputEl, onChangeValue, value, onSubmitValue } = props;
  return (
    <form onSubmit={onSubmitValue}>
      <InputPlace
        ref={inputEl}
        value={value}
        onChange={onChangeValue}
        placeholder="Название города"
      />
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
